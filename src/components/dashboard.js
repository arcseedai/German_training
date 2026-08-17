// Dashboard Component - with Translation Support
window.renderDashboard = function(mountPoint, userState, onStartTest, onLogout, onExport, onLangChange) {
  const i18n = window.i18n;
  const { username, history } = userState;
  
  let totalAttempted = 0;
  let totalCorrect = 0;
  
  history.forEach(session => {
    totalAttempted += session.answersCount;
    totalCorrect += session.correctCount;
  });
  
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  
  const rCount = (window.readingQuestionsSets || []).length * 20;
  const laCount = (window.languageQuestionsSets || []).length * 20;
  const liCount = (window.listeningQuestionsSets || []).length * 20;
  const totalDbQuestions = rCount + laCount + liCount;

  mountPoint.innerHTML = `
    <header>
      <div>
        <span class="logo">${i18n.t("title")}</span>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">
          ${i18n.t("welcome_back")}, <strong>${username}</strong> • ${totalDbQuestions} ${i18n.t("db_questions_count_label")}
        </p>
      </div>
      
      <div style="display: flex; gap: 0.75rem; align-items: center;">
        <!-- Language Switcher -->
        <button id="lang-switch-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem; border-color: rgba(99,102,241,0.2);">
          ${i18n.activeLanguage === 'de' ? '🇺🇸 English' : '🇩🇪 Deutsch'}
        </button>
        <button id="export-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem; border-color: rgba(99,102,241,0.3);">
          ${i18n.t("export_btn")}
        </button>
        <button id="logout-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
          ${i18n.t("logout_btn")}
        </button>
      </div>
    </header>

    <div class="dashboard-grid">
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div class="glass-card stats-card">
          <h3 style="margin-bottom: 1.5rem;">${i18n.t("accuracy_title")}</h3>
          
          <div class="accuracy-ring">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle class="bg" cx="80" cy="80" r="70" />
              <circle class="progress" id="accuracy-circle" cx="80" cy="80" r="70" />
            </svg>
            <div class="accuracy-text">${overallAccuracy}%</div>
          </div>
          
          <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            ${i18n.t("attempted_questions")}: <strong>${totalAttempted}</strong>
          </p>
          <p style="font-size: 0.95rem;">
            ${i18n.t("correct_solved")}: <strong style="color: var(--success);">${totalCorrect}</strong>
          </p>
        </div>

        <div class="glass-card" style="flex: 1;">
          <h3>${i18n.t("history_title")}</h3>
          ${
            history.length === 0 
              ? `<p style="margin-top: 1rem; font-size: 0.95rem; color: var(--text-muted);">${i18n.t("no_tests")}</p>`
              : `
                <div class="history-list">
                  ${history.map((session) => {
                    const pct = Math.round((session.correctCount / session.totalQuestions) * 100);
                    const isPass = pct >= 60;
                    const dateFormatted = new Date(session.timestamp).toLocaleDateString(i18n.activeLanguage === "de" ? "de-DE" : "en-US");
                    
                    // Translate variant names
                    let variantDisplay = session.variant;
                    if (session.variant === "Original") variantDisplay = i18n.t("original_test");
                    if (session.variant === "Reduced") variantDisplay = i18n.t("reduced_test");
                    if (session.variant === "Fast") variantDisplay = i18n.t("fast_test");

                    return `
                      <div class="history-item ${isPass ? 'pass' : 'fail'}">
                        <div>
                          <div style="font-weight: 500;">Set ${session.testSize} - ${variantDisplay}</div>
                          <div style="font-size: 0.75rem; color: var(--text-muted);">${dateFormatted}</div>
                        </div>
                        <div style="text-align: right;">
                          <div style="font-weight: 600; color: ${isPass ? 'var(--success)' : 'var(--error)'};">${pct}%</div>
                          <div style="font-size: 0.75rem; color: var(--text-secondary);">${session.correctCount}/${session.totalQuestions}</div>
                        </div>
                      </div>
                    `;
                  }).reverse().join('')}
                </div>
              `
          }
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div class="glass-card">
          <h3>${i18n.t("history_desc")}</h3>
          <div class="chart-container" id="chart-mount"></div>
        </div>

        <div class="glass-card">
          <h3>${i18n.t("start_new_test")}</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem;">${i18n.t("select_variant")}</p>
          
          <div class="test-selection-panel">
            <div class="glass-card test-mode-card" style="background: rgba(15,23,42,0.3); padding: 1.5rem;">
              <h3>${i18n.t("fast_test")}</h3>
              <div class="meta">30 ${i18n.t("questions")} • 45 ${i18n.t("minutes")}</div>
              <p style="font-size: 0.825rem; margin-bottom: 1.5rem; color: var(--text-secondary);">${i18n.t("fast_test_desc")}</p>
              <button class="btn btn-primary start-test-btn" data-size="30" style="width: 100%;">${i18n.t("start_btn")}</button>
            </div>
            
            <div class="glass-card test-mode-card" style="background: rgba(15,23,42,0.3); padding: 1.5rem; border-color: rgba(99, 102, 241, 0.2);">
              <h3>${i18n.t("reduced_test")}</h3>
              <div class="meta">60 ${i18n.t("questions")} • 90 ${i18n.t("minutes")}</div>
              <p style="font-size: 0.825rem; margin-bottom: 1.5rem; color: var(--text-secondary);">${i18n.t("reduced_test_desc")}</p>
              <button class="btn btn-primary start-test-btn" data-size="60" style="width: 100%;">${i18n.t("start_btn")}</button>
            </div>

            <div class="glass-card test-mode-card" style="background: rgba(15,23,42,0.3); padding: 1.5rem;">
              <h3>${i18n.t("original_test")}</h3>
              <div class="meta">120 ${i18n.t("questions")} • 180 ${i18n.t("minutes")}</div>
              <p style="font-size: 0.825rem; margin-bottom: 1.5rem; color: var(--text-secondary);">${i18n.t("original_test_desc")}</p>
              <button class="btn btn-primary start-test-btn" data-size="120" style="width: 100%;">${i18n.t("start_btn")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Draw Accuracy Progress Ring
  const circle = document.getElementById("accuracy-circle");
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    setTimeout(() => {
      circle.style.strokeDashoffset = circumference - (overallAccuracy / 100) * circumference;
    }, 100);
  }

  // Draw SVG Line Chart
  renderSVGChart(document.getElementById("chart-mount"), history, i18n);

  // Setup Event Listeners
  document.getElementById("logout-btn").addEventListener("click", () => {
    if (confirm(i18n.t("confirm_logout"))) {
      onLogout();
    }
  });
  
  document.getElementById("export-btn").addEventListener("click", onExport);

  document.getElementById("lang-switch-btn").addEventListener("click", () => {
    const nextLang = i18n.activeLanguage === "de" ? "en" : "de";
    i18n.setLanguage(nextLang);
    onLangChange();
  });
  
  document.querySelectorAll(".start-test-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      onStartTest(parseInt(btn.getAttribute("data-size"), 10));
    });
  });
};

function renderSVGChart(container, history, i18n) {
  if (!container) return;
  if (history.length === 0) {
    container.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-muted);">${i18n.t("no_history")}</div>`;
    return;
  }

  const data = history.map((s, idx) => ({
    label: `T${idx + 1}`,
    value: Math.round((s.correctCount / s.totalQuestions) * 100)
  }));
  
  if (data.length === 1) {
    data.unshift({ label: "Start", value: 0 });
  }

  const padding = 30;
  const width = container.clientWidth || 500;
  const height = 200;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = data.map((d, index) => ({
    x: padding + (index / (data.length - 1)) * chartWidth,
    y: padding + chartHeight - (d.value / 100) * chartHeight,
    value: d.value
  }));

  const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ');
  const grid = [0, 50, 100].map(val => {
    const y = padding + chartHeight - (val / 100) * chartHeight;
    return `
      <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" class="chart-grid" />
      <text x="${padding - 8}" y="${y + 4}" fill="var(--text-muted)" font-size="10" text-anchor="end">${val}%</text>
    `;
  }).join('');

  container.innerHTML = `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="var(--primary)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${grid}
      <polygon points="${points[0].x},${padding + chartHeight} ${polylinePoints} ${points[points.length - 1].x},${padding + chartHeight}" fill="url(#chart-gradient)" opacity="0.15" />
      <polyline points="${polylinePoints}" class="chart-line" />
      ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" class="chart-dot"/><text x="${p.x}" y="${p.y - 10}" fill="var(--text-primary)" font-size="10" text-anchor="middle">${p.value}%</text>`).join('')}
    </svg>
  `;
}
