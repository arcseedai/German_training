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
  let currentIdx = 0, isPlayingAudio = false;

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
      dot.addEventListener("click", () => renderQuestion(idx));
    });
    updateTimerUI();
  };

  const renderQuestion = (idx) => {
    currentIdx = idx;
    const q = flatQuestions[idx];
    const pane = document.getElementById("quiz-pane");
    if (!pane) return;
    if (window.speechSynthesis) { window.speechSynthesis.cancel(); isPlayingAudio = false; }

    document.querySelectorAll(".nav-dot").forEach((dot, dotIdx) => {
      dot.classList.remove("current");
      if (dotIdx === idx) dot.classList.add("current");
      dot.classList.toggle("answered", answers[flatQuestions[dotIdx].displayId] !== undefined);
    });

    let head = `
      <div class="test-section-header">
        <span style="font-size:0.85rem;font-weight:700;color:var(--primary);text-transform:uppercase;">
          ${q.section} • ${q.part}
        </span>
        <h2>${q.title}</h2>
      </div>
      <div class="test-section-description">
        ${q.description}
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
                ${q.options.map(opt => `
                  <label class="option-label ${answers[q.displayId] === opt.id ? 'selected' : ''}">
                    <input type="radio" name="q-${q.displayId}" value="${opt.id}" ${answers[q.displayId] === opt.id ? 'checked' : ''}>
                    <strong>${opt.id}</strong>. ${opt.text}
                  </label>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (q.section === "Hörverstehen") {
      body = `
        <div class="audio-player-card">
          <div style="font-weight:600;color:#fff;">${q.topic || i18n.t("audio_text")}</div>
          <p style="font-size: 0.85rem;">${i18n.t("audio_info")}</p>
          <div class="audio-controls">
            <button class="audio-play-btn" id="audio-play-trigger">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
            <div class="audio-progress-bar"><div class="audio-progress-fill" id="audio-progress"></div></div>
          </div>
          <button class="audio-transcript-toggle" id="transcript-toggle">${i18n.t("show_script")}</button>
          <div class="audio-transcript-pane" id="transcript-pane" style="display:none;"><em>${q.audioScript || i18n.t("no_script")}</em></div>
        </div>
        <div class="question-item active">
          <div class="question-title">${qLabel}: ${q.speaker ? `<strong>${q.speaker}</strong>: ` : ''} ${q.situationText || q.questionText}</div>
          <div class="options-list">
            ${q.options.map(opt => `
              <label class="option-label ${answers[q.displayId] === opt.id ? 'selected' : ''}">
                <input type="radio" name="q-${q.displayId}" value="${opt.id}" ${answers[q.displayId] === opt.id ? 'checked' : ''}>
                <strong>${opt.id}</strong>. ${opt.text}
              </label>
            `).join('')}
          </div>
        </div>
      `;
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
                return `
                  <button class="matching-opt-btn ${isSelected ? 'selected' : ''}" 
                          data-value="${opt.id}" 
                          style="text-align: left; width: 100%; padding: 1.1rem; border-radius: var(--border-radius); background: ${isSelected ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${isSelected ? 'var(--primary)' : 'var(--glass-border)'}; color: var(--text-primary); cursor: pointer; transition: all 0.2s; font-family: inherit; font-size: 0.95rem;">
                    <strong style="color: var(--primary); margin-right: 0.5rem;">${opt.id}:</strong> ${opt.text}
                  </button>
                `;
              }).join('')}
              
              <button class="matching-opt-btn ${answers[q.displayId] === undefined ? 'selected' : ''}" 
                      data-value="" 
                      style="text-align: left; width: 100%; padding: 1.1rem; border-radius: var(--border-radius); background: ${answers[q.displayId] === undefined ? 'rgba(239, 68, 68, 0.1)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${answers[q.displayId] === undefined ? 'var(--error)' : 'var(--glass-border)'}; color: var(--text-muted); cursor: pointer; transition: all 0.2s; font-family: inherit; font-size: 0.95rem;">
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
        <button id="prev-btn" class="btn btn-secondary" ${idx===0?'disabled':''}>${i18n.t("prev_btn")}</button>
        <button id="next-btn" class="btn btn-primary">${nextLabel}</button>
      </div>
    `;
    pane.innerHTML = head + body + nav;

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
        
        // Update styling of buttons instantly
        pane.querySelectorAll(".matching-opt-btn").forEach(b => {
          const bVal = b.getAttribute("data-value");
          const isSel = (bVal === val);
          
          if (bVal === "") {
            // "No selection" button styles
            b.style.background = isSel ? 'rgba(239, 68, 68, 0.1)' : 'rgba(15, 23, 42, 0.4)';
            b.style.borderColor = isSel ? 'var(--error)' : 'var(--glass-border)';
            b.style.color = isSel ? 'var(--error)' : 'var(--text-muted)';
          } else {
            // Normal option button styles
            b.style.background = isSel ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.4)';
            b.style.borderColor = isSel ? 'var(--primary)' : 'var(--glass-border)';
          }
        });
      });
    });


    document.getElementById("prev-btn").addEventListener("click", () => renderQuestion(idx-1));
    document.getElementById("next-btn").addEventListener("click", () => {
      if (idx < flatQuestions.length - 1) renderQuestion(idx + 1);
      else if (confirm(i18n.t("confirm_submit"))) submit();
    });

    const playBtn = document.getElementById("audio-play-trigger");
    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (isPlayingAudio) {
          window.speechSynthesis.cancel();
          isPlayingAudio = false;
          playBtn.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>';
        } else {
          const utterance = new SpeechSynthesisUtterance(q.audioScript || q.situationText);
          utterance.lang = "de-DE";
          const voices = window.speechSynthesis.getVoices();
          const deVoice = voices.find(v => v.lang.startsWith("de") && v.name.includes("Google")) || voices.find(v => v.lang.startsWith("de"));
          if (deVoice) utterance.voice = deVoice;

          utterance.onend = () => {
            isPlayingAudio = false;
            playBtn.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>';
            document.getElementById("audio-progress").style.width = "100%";
          };
          isPlayingAudio = true;
          playBtn.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>';
          window.speechSynthesis.speak(utterance);
        }
      });
    }

    const tt = document.getElementById("transcript-toggle");
    if (tt) {
      tt.addEventListener("click", () => {
        const tr = document.getElementById("transcript-pane");
        const isHidden = tr.style.display === "none";
        tr.style.display = isHidden ? "block" : "none";
        tt.innerText = isHidden ? i18n.t("hide_script") : i18n.t("show_script");
      });
    }
  };

  const submit = (timeUp = false) => {
    cleanup();
    let correctCount = 0, answersCount = 0;
    flatQuestions.forEach(q => {
      const userAns = answers[q.displayId];
      if (userAns !== undefined) {
        answersCount++;
        if (userAns.toLowerCase() === q.correctAnswer.toLowerCase()) correctCount++;
      }
    });
    if (timeUp) alert(i18n.t("time_up"));
    
    onFinish({
      timestamp: Date.now(),
      variant: test.totalQuestions === 105 ? "Original" : test.totalQuestions === 60 ? "Reduced" : "Fast",
      testSize: test.totalQuestions, answersCount, correctCount, totalQuestions: test.totalQuestions
    });
  };

  // Start the simulator
  init();
};

