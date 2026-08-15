// Telc B2 Test Results Component
window.renderTestResults = function(mountPoint, resultData, onBackToDashboard, onRetakeTest) {
  const { session, flatQuestions, answers } = resultData;

  // Group questions by Section and Part
  const sectionGroups = {};
  let totalCorrect = 0;
  let totalAttempted = 0;

  flatQuestions.forEach(q => {
    const sec = q.section;
    const part = q.part;
    
    if (!sectionGroups[sec]) {
      sectionGroups[sec] = {
        total: 0,
        correct: 0,
        attempted: 0,
        parts: {}
      };
    }
    if (!sectionGroups[sec].parts[part]) {
      sectionGroups[sec].parts[part] = {
        name: part,
        title: q.title || "",
        questions: []
      };
    }

    sectionGroups[sec].total++;
    const userAns = answers[q.displayId];
    const hasAnswered = userAns !== undefined && userAns !== "";
    const isCorrect = hasAnswered && userAns.toString().trim().toLowerCase() === q.correctAnswer.toString().trim().toLowerCase();

    if (hasAnswered) {
      sectionGroups[sec].attempted++;
      totalAttempted++;
    }
    if (isCorrect) {
      sectionGroups[sec].correct++;
      totalCorrect++;
    }

    sectionGroups[sec].parts[part].questions.push({
      ...q,
      userAns,
      hasAnswered,
      isCorrect
    });
  });

  const totalQuestions = flatQuestions.length;
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const isPassed = percentage >= 70; // 70% threshold required

  mountPoint.innerHTML = `
    <div class="results-container animate-fade-in" style="max-width: 900px; margin: 2rem auto; padding: 0 1rem;">
      
      <!-- Results Hero Card -->
      <div class="glass-card" style="text-align: center; padding: 2.5rem 1.5rem; margin-bottom: 2rem; border-radius: var(--border-radius); border-top: 4px solid ${isPassed ? 'var(--success)' : 'var(--error)'};">
        <div style="display: inline-block; padding: 0.4rem 1.2rem; border-radius: 999px; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 1rem; background: ${isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'}; color: ${isPassed ? 'var(--success)' : 'var(--error)'}; border: 1px solid ${isPassed ? 'var(--success)' : 'var(--error)'};">
          ${isPassed ? '🎉 ' + (i18n.t('passed') || 'Bestanden') : '⚠️ ' + (i18n.t('failed') || 'Nicht Bestanden')}
        </div>

        <h1 style="font-size: 3rem; margin: 0.5rem 0; font-weight: 800; color: #fff;">
          ${totalCorrect} <span style="font-size: 1.5rem; color: var(--text-secondary); font-weight: 500;">/ ${totalQuestions}</span>
        </h1>

        <p style="font-size: 1.3rem; font-weight: 700; color: ${isPassed ? 'var(--success)' : 'var(--error)'}; margin: 0 0 1rem 0;">
          ${percentage}% ${i18n.t("accuracy_title") || "Genauigkeit"}
        </p>

        <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 2rem auto; font-size: 0.95rem;">
          ${isPassed 
            ? (i18n.t('pass_message') || 'Herzlichen Glückwunsch! Sie haben das Prüfungsziel von mindestens 70% erreicht.')
            : (i18n.t('fail_message') || 'Für das Bestehen sind mindestens 70% erforderlich.')}
        </p>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button id="results-dashboard-btn" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
            🏠 ${i18n.t("back_to_dashboard") || "Zurück zum Dashboard"}
          </button>
          <button id="results-retake-btn" class="btn btn-secondary" style="padding: 0.75rem 1.5rem;">
            🔄 ${i18n.t("start_new_test") || "Neuen Test starten"}
          </button>
        </div>
      </div>

      <!-- Section Performance Summary Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        ${Object.keys(sectionGroups).map(secName => {
          const sec = sectionGroups[secName];
          const secPct = sec.total > 0 ? Math.round((sec.correct / sec.total) * 100) : 0;
          const secPass = secPct >= 70;
          let icon = "📖";
          if (secName.includes("Sprachbausteine")) icon = "✍️";
          if (secName.includes("Hörverstehen")) icon = "🎧";

          return `
            <div class="glass-card" style="padding: 1.25rem; border-radius: var(--border-radius-sm);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span style="font-weight: 600; font-size: 1rem; color: #fff;">${icon} ${secName}</span>
                <span style="font-size: 0.9rem; font-weight: 700; color: ${secPass ? 'var(--success)' : 'var(--error)'};">
                  ${secPct}%
                </span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                <span>${i18n.t("correct_solved") || "Richtig"}: ${sec.correct} / ${sec.total}</span>
                <span>${sec.attempted} / ${sec.total} ${i18n.t("answered_counter") || "beantwortet"}</span>
              </div>
              <div style="height: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden;">
                <div style="height: 100%; width: ${secPct}%; background: ${secPass ? 'var(--success)' : 'var(--error)'}; border-radius: 999px; transition: width 0.5s ease;"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Question Navigation Cards by Section & Part -->
      <div class="glass-card" style="padding: 2rem; border-radius: var(--border-radius);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <h2 style="font-size: 1.25rem; margin: 0; color: #fff;">
              🎯 ${i18n.t("overview_title") || "Fragen-Übersicht"}
            </h2>
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0.25rem 0 0 0;">
              ${i18n.t("overview_subtitle") || "Ergebnis jeder Frage nach Aufgabenkarten"}
            </p>
          </div>

          <!-- Legend -->
          <div style="display: flex; gap: 1.25rem; font-size: 0.85rem; font-weight: 600;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="display: inline-block; width: 14px; height: 14px; border-radius: 4px; background: rgba(16, 185, 129, 0.25); border: 1.5px solid var(--success);"></span>
              <span style="color: var(--success);">${i18n.t("correct") || "Richtig"} (${totalCorrect})</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="display: inline-block; width: 14px; height: 14px; border-radius: 4px; background: rgba(239, 68, 68, 0.25); border: 1.5px solid var(--error);"></span>
              <span style="color: var(--error);">${i18n.t("incorrect") || "Falsch"} (${totalQuestions - totalCorrect})</span>
            </div>
          </div>
        </div>

        <!-- Section / Part Question Tiles -->
        <div style="display: flex; flex-direction: column; gap: 1.75rem;">
          ${Object.keys(sectionGroups).map(secName => {
            const sec = sectionGroups[secName];
            let icon = "📖";
            if (secName.includes("Sprachbausteine")) icon = "✍️";
            if (secName.includes("Hörverstehen")) icon = "🎧";

            return `
              <div style="background: rgba(15, 23, 42, 0.3); border: 1px solid var(--glass-border); border-radius: var(--border-radius-sm); padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-weight: 700; color: #fff; font-size: 1rem;">
                  <span>${icon} ${secName}</span>
                  <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;">
                    ${sec.correct} / ${sec.total} ${i18n.t("correct") || "Richtig"}
                  </span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                  ${Object.keys(sec.parts).map(partName => {
                    const part = sec.parts[partName];
                    const partCorrect = part.questions.filter(q => q.isCorrect).length;

                    return `
                      <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.6rem; font-weight: 600;">
                          <span>${part.name} ${part.title ? '— ' + part.title : ''}</span>
                          <span>${partCorrect} / ${part.questions.length}</span>
                        </div>

                        <!-- Card Dots Grid -->
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                          ${part.questions.map(q => `
                            <div title="Aufgabe ${q.displayId}: ${q.isCorrect ? 'Richtig' : 'Falsch'}"
                                 style="width: 2.75rem; height: 2.75rem; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: var(--border-radius-sm); font-weight: 700; font-size: 0.85rem; background: ${q.isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; border: 1.5px solid ${q.isCorrect ? 'var(--success)' : 'var(--error)'}; color: ${q.isCorrect ? 'var(--success)' : 'var(--error)'}; transition: transform 0.15s; user-select: none;">
                              <span>${q.displayId}</span>
                              <span style="font-size: 0.7rem; line-height: 1;">${q.isCorrect ? '✓' : '✗'}</span>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>

    </div>
  `;

  // Add event listeners
  document.getElementById("results-dashboard-btn").addEventListener("click", onBackToDashboard);
  document.getElementById("results-retake-btn").addEventListener("click", () => {
    onRetakeTest(session.testSize || session.totalQuestions);
  });
};
