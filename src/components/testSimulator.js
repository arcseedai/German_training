// Test Simulator Component - with Translation Support
window.renderTestSimulator = function(mountPoint, test, onFinish, onCancel) {
  const i18n = window.i18n;
  let timeLeftSeconds = test.timeLimitMinutes * 60;
  let timerInterval = null;
  const flatQuestions = [];

  const extract = (sec) => {
    (test.sections[sec] || []).forEach(part => {
      if (part.questions) {
        part.questions.forEach(q => {
          flatQuestions.push({
            displayId: q.displayId, originalId: q.id, section: sec, part: part.part, title: part.title, description: part.description,
            passage: part.passage, audioScript: part.audioScript, questionText: q.question, options: q.options,
            type: "multiple-choice", correctAnswer: q.correctAnswer
          });
        });
      }
      if (part.items) {
        part.items.forEach(item => {
          flatQuestions.push({
            displayId: item.displayId, originalId: item.id, section: sec, part: part.part, title: part.title, description: part.description,
            passage: part.passage, audioScript: item.audioScript || part.audioScript, topic: part.topic,
            situationText: item.situation || item.statement || item.text, speaker: item.speaker,
            options: part.options || [{ id: "Richtig", text: "Richtig" }, { id: "Falsch", text: "Falsch" }],
            type: part.part === "Teil 2" ? "multiple-choice" : "matching", correctAnswer: item.correctAnswer
          });
        });
      }
    });
  };
  extract("Leseverstehen");
  extract("Sprachbausteine");
  extract("Hörverstehen");

  const answers = {};
  const lockedQuestions = {};
  const listeningStatus = {};
  let currentIdx = 0, isPlayingAudio = false;

  const lockCurrentQuestion = () => {
    if (flatQuestions.length === 0) return;
    const currentQ = flatQuestions[currentIdx];
    
    // Auto-complete playing status to finished if leaving
    const partKey = `${currentQ.section}-${currentQ.part}`;
    if (listeningStatus[partKey] && listeningStatus[partKey].status === "playing") {
      listeningStatus[partKey].status = "finished";
    }

    if (currentQ.section === "Hörverstehen") {
      const group = flatQuestions.filter(q => q.section === "Hörverstehen" && q.part === currentQ.part);
      group.forEach(q => {
        if (answers[q.displayId] !== undefined && lockedQuestions[q.displayId] === undefined) {
          const userAns = answers[q.displayId];
          const isCorrect = (userAns.toLowerCase() === q.correctAnswer.toLowerCase());
          lockedQuestions[q.displayId] = isCorrect ? 'correct' : 'incorrect';
        }
      });
    } else {
      const q = currentQ;
      if (answers[q.displayId] !== undefined && lockedQuestions[q.displayId] === undefined) {
        const userAns = answers[q.displayId];
        const isCorrect = (userAns.toLowerCase() === q.correctAnswer.toLowerCase());
        lockedQuestions[q.displayId] = isCorrect ? 'correct' : 'incorrect';
      }
    }
  };

  const init = () => {
    timerInterval = setInterval(() => {
      timeLeftSeconds--;
      updateTimerUI();
      if (timeLeftSeconds <= 0) submit(true);
    }, 1000);
    renderLayout();
    updateAnsweredCounter();
    renderQuestion(currentIdx);
  };

  const cleanup = () => {
    clearInterval(timerInterval);
    Object.keys(listeningStatus).forEach(key => {
      if (listeningStatus[key].interval) {
        clearInterval(listeningStatus[key].interval);
      }
    });
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  };

  const updateTimerUI = () => {
    const min = Math.floor(timeLeftSeconds / 60), sec = timeLeftSeconds % 60;
    const txt = document.getElementById("timer-text");
    if (txt) {
      txt.innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
      if (timeLeftSeconds < 300) txt.parentElement.classList.add("timer-warning");
    }
  };

  const updateAnsweredCounter = () => {
    const label = document.getElementById("answered-counter-label");
    if (label) {
      const answered = Object.keys(answers).length;
      label.innerText = `${i18n.t("answered_counter")}: ${answered} / ${test.totalQuestions}`;
    }
  };

  const renderLayout = () => {
    let modeLabel = test.totalQuestions === 105 ? i18n.t("original_test") : test.totalQuestions === 60 ? i18n.t("reduced_test") : i18n.t("fast_test");
    
    mountPoint.innerHTML = `
      <header style="margin-bottom: 2rem;">
        <div>
          <span class="logo">${i18n.t("title")}</span>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">
            ${modeLabel} • ${test.totalQuestions} ${i18n.t("questions")}
          </p>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="timer-container">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span id="timer-text">--:--</span>
          </div>
          <button id="cancel-test-btn" class="btn btn-danger" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
            ${i18n.t("cancel_btn")}
          </button>
        </div>
      </header>
      <div class="test-simulator">
        <aside class="test-sidebar glass-card">
          <h4>${i18n.t("progress_title")}</h4>
          <p id="answered-counter-label" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; font-weight: 500;">
            ${i18n.t("answered_counter")}: 0 / ${test.totalQuestions}
          </p>
          <div class="nav-grid">
            ${flatQuestions.map((q, idx) => `<div class="nav-dot" id="nav-dot-${idx}">${idx + 1}</div>`).join('')}
          </div>
          <button id="submit-test-btn" class="btn btn-primary" style="margin-top: 1rem; width: 100%;">
            ${i18n.t("submit_btn")}
          </button>
        </aside>
        <main class="test-content-area glass-card" id="quiz-pane"></main>
      </div>
    `;

    document.getElementById("cancel-test-btn").addEventListener("click", () => {
      if (confirm(i18n.t("confirm_cancel"))) {
        cleanup();
        onCancel();
      }
    });
    document.getElementById("submit-test-btn").addEventListener("click", () => {
      if (confirm(i18n.t("confirm_submit"))) submit();
    });
    document.querySelectorAll(".nav-dot").forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        let targetIdx = idx;
        const q = flatQuestions[targetIdx];
        if (q.section === "Hörverstehen") {
          while (targetIdx > 0 && flatQuestions[targetIdx - 1].section === "Hörverstehen" && flatQuestions[targetIdx - 1].part === q.part) {
            targetIdx--;
          }
        }
        renderQuestion(targetIdx);
      });
    });
    updateTimerUI();
  };

  const renderQuestion = (idx) => {
    if (currentIdx !== idx) {
      lockCurrentQuestion();
    }
    currentIdx = idx;
    const q = flatQuestions[idx];
    const isLocked = lockedQuestions[q.displayId] !== undefined;
    const pane = document.getElementById("quiz-pane");
    if (!pane) return;
    if (window.speechSynthesis) { window.speechSynthesis.cancel(); isPlayingAudio = false; }

    document.querySelectorAll(".nav-dot").forEach((dot, dotIdx) => {
      const dotQ = flatQuestions[dotIdx];
      const isCurrentGroup = (dotQ.section === q.section && dotQ.part === q.part && q.section === "Hörverstehen") || (dotIdx === idx);
      dot.classList.toggle("current", isCurrentGroup);
      
      const qId = dotQ.displayId;
      if (lockedQuestions[qId] !== undefined) {
        dot.classList.remove("answered");
        dot.classList.toggle("correct", lockedQuestions[qId] === 'correct');
        dot.classList.toggle("incorrect", lockedQuestions[qId] === 'incorrect');
      } else {
        dot.classList.toggle("answered", answers[qId] !== undefined);
        dot.classList.remove("correct");
        dot.classList.remove("incorrect");
      }
    });

    const partQuestions = flatQuestions.filter(item => item.section === q.section && item.part === q.part);
    let dynamicDescription = q.description || "";
    if (partQuestions.length > 0) {
      const minId = partQuestions[0].displayId;
      const maxId = partQuestions[partQuestions.length - 1].displayId;
      dynamicDescription = dynamicDescription
        .replace(/\(\d+-\d+\)/g, `(${minId}-${maxId})`)
        .replace(/\b\d+-\d+\b/g, `${minId}-${maxId}`)
        .replace(/\d+\s*bis\s*\d+/g, `${minId} bis ${maxId}`);
    }

    let head = `
      <div class="test-section-header">
        <span style="font-size:0.85rem;font-weight:700;color:var(--primary);text-transform:uppercase;">
          ${q.section} • ${q.part}
        </span>
        <h2>${q.title}</h2>
      </div>
      <div class="test-section-description">
        ${dynamicDescription}
      </div>
    `;
    let body = "";

    let qLabel = `${i18n.t("question_label")} ${idx + 1}`;

    if (q.passage) {
      body = `
        <div class="split-pane">
          <div class="text-pane">${q.passage}</div>
          <div class="question-pane">
            <div class="question-item active">
              <div class="question-title">${qLabel}: ${q.questionText || "Tragen Sie die richtige Lücke ein."}</div>
              <div class="options-list">
                ${q.options.map(opt => {
                  const isSelected = answers[q.displayId] === opt.id;
                  let labelClass = "option-label";
                  if (isSelected) {
                    labelClass += " selected";
                    if (isLocked) {
                      labelClass += lockedQuestions[q.displayId] === 'correct' ? " correct" : " incorrect";
                    }
                  }
                  return `
                    <label class="${labelClass}">
                      <input type="radio" name="q-${q.displayId}" value="${opt.id}" ${answers[q.displayId] === opt.id ? 'checked' : ''} ${isLocked ? 'disabled' : ''}>
                      <strong>${opt.id}</strong>. ${opt.text}
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (q.section === "Hörverstehen") {
      const group = flatQuestions.filter(item => item.section === "Hörverstehen" && item.part === q.part);
      const partKey = `${q.section}-${q.part}`;
      
      if (!listeningStatus[partKey]) {
        listeningStatus[partKey] = {
          status: "countdown",
          secondsLeft: q.part === "Teil 2" ? 60 : 30,
          interval: null
        };
      }

      let combinedScript = "";
      if (q.part === "Teil 2") {
        combinedScript = q.audioScript;
      } else {
        combinedScript = group.map(item => `${item.speaker ? `${item.speaker}: ` : ""}${item.audioScript || item.situationText}`).join("\n\n");
      }

      const startListeningAudio = () => {
        listeningStatus[partKey].status = "playing";
        renderQuestion(idx);
        
        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(combinedScript);
          utterance.lang = "de-DE";
          const voices = window.speechSynthesis.getVoices();
          const deVoice = voices.find(v => v.lang.startsWith("de") && v.name.includes("Google")) || voices.find(v => v.lang.startsWith("de"));
          if (deVoice) utterance.voice = deVoice;

          utterance.onend = () => {
            listeningStatus[partKey].status = "finished";
            renderQuestion(idx);
          };
          window.speechSynthesis.speak(utterance);
        }
      };

      let audioCardHtml = "";
      const statusObj = listeningStatus[partKey];
      if (statusObj.status === "countdown") {
        audioCardHtml = `
          <div class="audio-player-card" style="margin-bottom: 2rem;">
            <div style="font-weight:600;color:#fff;">${q.topic || i18n.t("audio_text")}</div>
            <p style="font-size: 1.1rem; font-weight: 600; color: var(--primary); margin: 1rem 0;">
              ${i18n.t("reading_pause") || "Lesepause"}: <span id="listening-countdown-text">${statusObj.secondsLeft}s</span>
            </p>
            <div class="audio-progress-bar"><div class="audio-progress-fill" id="audio-progress" style="width:0%;"></div></div>
          </div>
        `;
        if (!statusObj.interval) {
          statusObj.interval = setInterval(() => {
            statusObj.secondsLeft--;
            const cdSpan = document.getElementById("listening-countdown-text");
            if (cdSpan) cdSpan.innerText = `${statusObj.secondsLeft}s`;
            if (statusObj.secondsLeft <= 0) {
              clearInterval(statusObj.interval);
              statusObj.interval = null;
              startListeningAudio();
            }
          }, 1000);
        }
      } else if (statusObj.status === "playing") {
        audioCardHtml = `
          <div class="audio-player-card" style="margin-bottom: 2rem;">
            <div style="font-weight:600;color:#fff;">${q.topic || i18n.t("audio_text")}</div>
            <p style="font-size: 1rem; color: var(--success); margin: 1rem 0; font-weight: 600;">
              🔊 ${i18n.t("audio_playing") || "Audio wird abgespielt..."} (Einmalig)
            </p>
            <div class="audio-progress-bar"><div class="audio-progress-fill" id="audio-progress" style="width:50%; background: var(--success);"></div></div>
          </div>
        `;
      } else {
        audioCardHtml = `
          <div class="audio-player-card" style="margin-bottom: 2rem;">
            <div style="font-weight:600;color:#fff;">${q.topic || i18n.t("audio_text")}</div>
            <p style="font-size: 1rem; color: var(--text-secondary); margin: 1rem 0;">
              🔇 ${i18n.t("audio_finished") || "Audio beendet."}
            </p>
            <div class="audio-progress-bar"><div class="audio-progress-fill" id="audio-progress" style="width:100%; background: var(--text-secondary);"></div></div>
          </div>
        `;
      }

      const groupBody = `
        <div class="listening-group-container" style="display:flex; flex-direction:column; gap:1.25rem; margin-top:1.5rem;">
          ${group.map((item) => {
            const isItemLocked = lockedQuestions[item.displayId] !== undefined;
            const isSelectedRichtig = answers[item.displayId] === "Richtig";
            const isSelectedFalsch = answers[item.displayId] === "Falsch";
            
            let btnRichtigBg = isSelectedRichtig ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.4)';
            let btnRichtigBorder = isSelectedRichtig ? 'var(--primary)' : 'var(--glass-border)';
            let btnFalschBg = isSelectedFalsch ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.4)';
            let btnFalschBorder = isSelectedFalsch ? 'var(--primary)' : 'var(--glass-border)';
            
            if (isSelectedRichtig && isItemLocked) {
              const isCorrect = lockedQuestions[item.displayId] === 'correct';
              btnRichtigBg = isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';
              btnRichtigBorder = isCorrect ? 'var(--success)' : 'var(--error)';
            }
            if (isSelectedFalsch && isItemLocked) {
              const isCorrect = lockedQuestions[item.displayId] === 'correct';
              btnFalschBg = isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';
              btnFalschBorder = isCorrect ? 'var(--success)' : 'var(--error)';
            }

            const isMultipleChoice = item.options.length > 2 || item.options[0].id !== "Richtig";
            
            if (isMultipleChoice) {
              return `
                <div class="question-item active" style="padding: 1.25rem; border: 1px solid var(--glass-border); border-radius: var(--border-radius); background: rgba(15,23,42,0.2);">
                  <div class="question-title" style="font-size: 0.95rem; font-weight: 600;">
                    Aufgabe ${item.displayId}: ${item.situationText || item.questionText}
                  </div>
                  <div class="options-list" style="margin-top: 0.75rem;">
                    ${item.options.map(opt => {
                      const isSelected = answers[item.displayId] === opt.id;
                      let labelClass = "option-label";
                      if (isSelected) {
                        labelClass += " selected";
                        if (isItemLocked) {
                          labelClass += lockedQuestions[item.displayId] === 'correct' ? " correct" : " incorrect";
                        }
                      }
                      return `
                        <label class="${labelClass}">
                          <input type="radio" name="q-${item.displayId}" value="${opt.id}" ${answers[item.displayId] === opt.id ? 'checked' : ''} ${isItemLocked ? 'disabled' : ''}>
                          <strong>${opt.id}</strong>. ${opt.text}
                        </label>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="question-item active" style="display: flex; align-items: center; justify-content: space-between; gap: 2rem; padding: 1.25rem; border: 1px solid var(--glass-border); border-radius: var(--border-radius); background: rgba(15,23,42,0.2);">
                  <div class="question-title" style="font-size: 0.95rem; font-weight: 600; flex: 1; margin: 0;">
                    Aufgabe ${item.displayId}: ${item.situationText || item.questionText}
                  </div>
                  <div style="display: flex; gap: 0.5rem; flex-shrink: 0;">
                    <button class="matching-opt-btn tf-btn ${isSelectedFalsch ? 'selected' : ''}" 
                            data-q-id="${item.displayId}" data-value="Falsch" ${isItemLocked ? 'disabled' : ''}
                            style="width: 3.5rem; height: 3.5rem; display: flex; align-items: center; justify-content: center; border-radius: var(--border-radius-sm); background: ${btnFalschBg}; border: 1px solid ${btnFalschBorder}; color: var(--text-primary); cursor: ${isItemLocked ? 'not-allowed' : 'pointer'}; transition: all 0.2s; font-family: inherit; font-size: 1.5rem; font-weight: bold;">
                      -
                    </button>
                    <button class="matching-opt-btn tf-btn ${isSelectedRichtig ? 'selected' : ''}" 
                            data-q-id="${item.displayId}" data-value="Richtig" ${isItemLocked ? 'disabled' : ''}
                            style="width: 3.5rem; height: 3.5rem; display: flex; align-items: center; justify-content: center; border-radius: var(--border-radius-sm); background: ${btnRichtigBg}; border: 1px solid ${btnRichtigBorder}; color: var(--text-primary); cursor: ${isItemLocked ? 'not-allowed' : 'pointer'}; transition: all 0.2s; font-family: inherit; font-size: 1.5rem; font-weight: bold;">
                      +
                    </button>
                  </div>
                </div>
              `;
            }
          }).join('')}
        </div>
      `;
      body = audioCardHtml + groupBody;
    } else {
      // Matching section (e.g. Reading Part 3, Language Part 2)
      body = `
        <div class="matching-container">
          <div class="question-item active">
            <div class="question-title" style="margin-bottom: 1.5rem;">
              ${qLabel}: ${q.situationText}
            </div>
            
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem; font-weight: 500;">
              ${i18n.t("selection_label")}
            </div>
            
            <div class="matching-buttons-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${q.options.map(opt => {
                const isSelected = answers[q.displayId] === opt.id;
                let btnBg = isSelected ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.4)';
                let btnBorder = isSelected ? 'var(--primary)' : 'var(--glass-border)';
                if (isSelected && isLocked) {
                  const isCorrect = lockedQuestions[q.displayId] === 'correct';
                  btnBg = isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';
                  btnBorder = isCorrect ? 'var(--success)' : 'var(--error)';
                }
                return `
                  <button class="matching-opt-btn ${isSelected ? 'selected' : ''}" 
                          data-value="${opt.id}" 
                          ${isLocked ? 'disabled' : ''}
                          style="text-align: left; width: 100%; padding: 1.1rem; border-radius: var(--border-radius); background: ${btnBg}; border: 1px solid ${btnBorder}; color: var(--text-primary); cursor: ${isLocked ? 'not-allowed' : 'pointer'}; transition: all 0.2s; font-family: inherit; font-size: 0.95rem;">
                    <strong style="color: ${isSelected && isLocked ? (lockedQuestions[q.displayId] === 'correct' ? 'var(--success)' : 'var(--error)') : 'var(--primary)'}; margin-right: 0.5rem;">${opt.id}:</strong> ${opt.text}
                  </button>
                `;
              }).join('')}
              
              <button class="matching-opt-btn ${answers[q.displayId] === undefined ? 'selected' : ''}" 
                      data-value="" 
                      ${isLocked ? 'disabled' : ''}
                      style="text-align: left; width: 100%; padding: 1.1rem; border-radius: var(--border-radius); background: ${answers[q.displayId] === undefined ? 'rgba(239, 68, 68, 0.1)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${answers[q.displayId] === undefined ? 'var(--error)' : 'var(--glass-border)'}; color: var(--text-muted); cursor: ${isLocked ? 'not-allowed' : 'pointer'}; transition: all 0.2s; font-family: inherit; font-size: 0.95rem;">
                <strong>${i18n.t("no_selection")}</strong>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const nextLabel = idx === flatQuestions.length - 1 ? i18n.t("finish_btn") : i18n.t("next_btn");
    const nav = `
      <div style="display:flex;justify-content:space-between;margin-top:2rem;border-top:1px solid var(--glass-border);padding-top:1.5rem;">
        <button id="prev-btn" class="btn btn-secondary">${i18n.t("prev_btn")}</button>
        <button id="next-btn" class="btn btn-primary">${nextLabel}</button>
      </div>
    `;
    pane.innerHTML = head + body + nav;

    if (idx === 0) document.getElementById("prev-btn").setAttribute("disabled", "true");

    if (!isLocked) {
      if (q.section === "Hörverstehen") {
        pane.querySelectorAll('input[type="radio"]').forEach(inp => {
          inp.addEventListener("change", (e) => {
            const qId = parseInt(e.target.name.replace("q-", ""), 10);
            answers[qId] = e.target.value;
            e.target.closest(".options-list").querySelectorAll(".option-label").forEach(l => l.classList.remove("selected"));
            e.target.parentElement.classList.add("selected");
            
            const flatIdx = flatQuestions.findIndex(item => item.displayId === qId);
            document.getElementById(`nav-dot-${flatIdx}`).classList.add("answered");
            updateAnsweredCounter();
          });
        });

        pane.querySelectorAll('.tf-btn').forEach(btn => {
          btn.addEventListener("click", () => {
            const qId = parseInt(btn.getAttribute("data-q-id"), 10);
            const val = btn.getAttribute("data-value");
            answers[qId] = val;

            const flatIdx = flatQuestions.findIndex(item => item.displayId === qId);
            document.getElementById(`nav-dot-${flatIdx}`).classList.add("answered");
            updateAnsweredCounter();

            const parent = btn.parentElement;
            parent.querySelectorAll('.tf-btn').forEach(b => {
              const bVal = b.getAttribute("data-value");
              const isSel = (bVal === val);
              b.style.background = isSel ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.4)';
              b.style.borderColor = isSel ? 'var(--primary)' : 'var(--glass-border)';
            });
          });
        });
      } else {
        pane.querySelectorAll(`input[name="q-${q.displayId}"]`).forEach(inp => {
          inp.addEventListener("change", (e) => {
            answers[q.displayId] = e.target.value;
            pane.querySelectorAll(".option-label").forEach(l => l.classList.remove("selected"));
            e.target.parentElement.classList.add("selected");
            document.getElementById(`nav-dot-${idx}`).classList.add("answered");
            updateAnsweredCounter();
          });
        });

        pane.querySelectorAll(".matching-opt-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const val = btn.getAttribute("data-value");
            if (val) {
              answers[q.displayId] = val;
              document.getElementById(`nav-dot-${idx}`).classList.add("answered");
            } else {
              delete answers[q.displayId];
              document.getElementById(`nav-dot-${idx}`).classList.remove("answered");
            }
            
            updateAnsweredCounter();
            
            pane.querySelectorAll(".matching-opt-btn").forEach(b => {
              const bVal = b.getAttribute("data-value");
              const isSel = (bVal === val);
              
              if (bVal === "") {
                b.style.background = isSel ? 'rgba(239, 68, 68, 0.1)' : 'rgba(15, 23, 42, 0.4)';
                b.style.borderColor = isSel ? 'var(--error)' : 'var(--glass-border)';
                b.style.color = isSel ? 'var(--error)' : 'var(--text-muted)';
              } else {
                b.style.background = isSel ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.4)';
                b.style.borderColor = isSel ? 'var(--primary)' : 'var(--glass-border)';
              }
            });
          });
        });
      }
    }

    document.getElementById("prev-btn").addEventListener("click", () => {
      const currentQ = flatQuestions[idx];
      if (currentQ.section === "Hörverstehen") {
        let prevIdx = idx - 1;
        if (prevIdx >= 0) {
          const prevQ = flatQuestions[prevIdx];
          if (prevQ.section === "Hörverstehen") {
            while (prevIdx > 0 && flatQuestions[prevIdx - 1].section === "Hörverstehen" && flatQuestions[prevIdx - 1].part === prevQ.part) {
              prevIdx--;
            }
          }
          renderQuestion(prevIdx);
        }
      } else {
        renderQuestion(idx - 1);
      }
    });

    document.getElementById("next-btn").addEventListener("click", () => {
      const currentQ = flatQuestions[idx];
      if (currentQ.section === "Hörverstehen") {
        let nextIdx = idx;
        while (nextIdx < flatQuestions.length && flatQuestions[nextIdx].section === "Hörverstehen" && flatQuestions[nextIdx].part === currentQ.part) {
          nextIdx++;
        }
        if (nextIdx < flatQuestions.length) {
          renderQuestion(nextIdx);
        } else {
          if (confirm(i18n.t("confirm_submit"))) submit();
        }
      } else {
        if (idx < flatQuestions.length - 1) renderQuestion(idx + 1);
        else if (confirm(i18n.t("confirm_submit"))) submit();
      }
    });
  };

  const submit = (timeUp = false) => {
    cleanup();
    let correctCount = 0, answersCount = 0;
    flatQuestions.forEach(q => {
      const userAns = answers[q.displayId];
      if (userAns !== undefined && userAns !== "") {
        answersCount++;
        if (userAns.toString().trim().toLowerCase() === q.correctAnswer.toString().trim().toLowerCase()) correctCount++;
      }
    });
    if (timeUp) alert(i18n.t("time_up"));
    
    onFinish({
      session: {
        timestamp: Date.now(),
        variant: test.totalQuestions === 105 ? "Original" : test.totalQuestions === 60 ? "Reduced" : "Fast",
        testSize: test.totalQuestions,
        answersCount,
        correctCount,
        totalQuestions: test.totalQuestions
      },
      flatQuestions,
      answers,
      lockedQuestions
    });
  };

  // Start the simulator
  init();
};

