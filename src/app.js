// App Main Coordinator - with Translation Support
(function() {
  const appState = {
    currentView: "LOGIN", // LOGIN, DASHBOARD, TEST
    user: null, // { username: '', history: [] }
    activeTest: null
  };

  const mount = document.getElementById("app");

  function navigate(view) {
    appState.currentView = view;
    render();
  }

  function handleLogin(username) {
    const storedData = localStorage.getItem(`telcb2_${username}`);
    if (storedData) {
      appState.user = JSON.parse(storedData);
    } else {
      appState.user = {
        username: username,
        history: []
      };
      saveUserState();
    }
    navigate("DASHBOARD");
  }

  function handleLogout() {
    appState.user = null;
    appState.activeTest = null;
    navigate("LOGIN");
  }

  function handleStartTest(size) {
    appState.activeTest = window.generateTest(size);
    navigate("TEST");
  }

  function handleFinishTest(testSession) {
    appState.user.history.push(testSession);
    saveUserState();
    appState.activeTest = null;
    navigate("DASHBOARD");
  }

  function handleExport() {
    if (!appState.user) return;
    const filename = `telc_b2_profile_${appState.user.username.replace(/\s+/g, '_')}.json`;
    const jsonStr = JSON.stringify(appState.user, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function handleImport(importedData) {
    appState.user = importedData;
    saveUserState();
    navigate("DASHBOARD");
  }

  function handleLangChange() {
    render(); // Simply trigger re-rendering of active view in the new language
  }

  function saveUserState() {
    if (appState.user) {
      localStorage.setItem(`telcb2_${appState.user.username}`, JSON.stringify(appState.user));
    }
  }

  function render() {
    if (!mount) return;
    
    // Load voices
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }

    switch (appState.currentView) {
      case "LOGIN":
        window.renderLogin(mount, handleLogin, handleImport, handleLangChange);
        break;
      case "DASHBOARD":
        window.renderDashboard(mount, appState.user, handleStartTest, handleLogout, handleExport, handleLangChange);
        break;
      case "TEST":
        window.renderTestSimulator(mount, appState.activeTest, handleFinishTest, () => navigate("DASHBOARD"));
        break;
    }
  }

  // Initial boot
  window.addEventListener("load", () => {
    render();
  });
})();
