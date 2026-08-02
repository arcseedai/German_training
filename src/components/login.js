// Login Component - Name-based entry with Backup Import & Translation
window.renderLogin = function(mountPoint, onLogin, onImport, onLangChange) {
  const i18n = window.i18n;
  
  mountPoint.innerHTML = `
    <div style="display: flex; justify-content: flex-end; max-width: 500px; margin: 2rem auto -3rem auto; position: relative; z-index: 10;">
      <button id="lang-switch-btn" class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-color: rgba(99,102,241,0.2);">
        ${i18n.activeLanguage === 'de' ? '🇺🇸 English' : '🇩🇪 Deutsch'}
      </button>
    </div>

    <div class="glass-card" style="max-width: 500px; margin: 4rem auto; text-align: center; display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <h1 style="font-size: 2.25rem; margin-bottom: 0.5rem;">${i18n.t("title")}</h1>
        <p>${i18n.t("login_subtitle")}</p>
      </div>
      
      <form id="login-form" style="display: flex; flex-direction: column; gap: 1.25rem; text-align: left;">
        <div>
          <label for="username" style="display: block; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500;">
            ${i18n.t("username_label")}
          </label>
          <input type="text" id="username" placeholder="z.B. Alex Müller" required autocomplete="off">
        </div>
        
        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem;">
          ${i18n.t("continue_btn")}
        </button>
      </form>

      <div style="border-top: 1px solid var(--glass-border); padding-top: 1.5rem; text-align: left;">
        <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">${i18n.t("restore_title")}</h4>
        <p style="font-size: 0.85rem; margin-bottom: 1rem;">${i18n.t("restore_desc")}</p>
        
        <label class="btn btn-secondary" style="width: 100%; cursor: pointer;">
          ${i18n.t("select_backup")}
          <input type="file" id="import-file-input" accept=".json" style="display: none;">
        </label>
      </div>
      
      <div style="font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--glass-border); padding-top: 1rem; margin-top: 0.5rem;">
        ${i18n.t("auto_save_note")}
      </div>
    </div>
  `;

  // Submit Handler
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    if (username) {
      onLogin(username);
    }
  });

  // Language Switch trigger
  document.getElementById("lang-switch-btn").addEventListener("click", () => {
    const nextLang = i18n.activeLanguage === "de" ? "en" : "de";
    i18n.setLanguage(nextLang);
    onLangChange(); // Request coordinator to reload active view
  });

  // Handle Backup Import
  document.getElementById("import-file-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const data = JSON.parse(evt.target.result);
        if (data.username && Array.isArray(data.history)) {
          onImport(data);
        } else {
          alert("Error: Incorrect file format.");
        }
      } catch (err) {
        alert("Error: Unable to parse file.");
      }
    };
    reader.readAsText(file);
  });
};
