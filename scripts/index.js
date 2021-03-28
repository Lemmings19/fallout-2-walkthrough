;(function() {
  "use strict";

  var body = document.body;
  var localStorage = window.localStorage;
  /**
   * @type HTMLButtonElement
   */
  var button = document.querySelector("#themeButton");

  var theme = localStorage.getItem("theme");

  button.addEventListener("click", toggleTheme);

  // init theme if there is entry in localStorage
  theme && initTheme(theme);

  /**
   * @param {string} theme 
   */
  function initTheme(theme) {
    // theme isn't dark or light
    // probably corrupted entry
    if (theme !== "dark" && theme !== "light") {
      // clear the entry
      localStorage.removeItem("theme");
    }

    if (theme === "dark") {
      body.classList.add("dark");
      button.innerHTML = "use light theme";
    }
  }

  function toggleTheme() {

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        button.innerHTML = "use dark theme";
    } else {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        button.innerHTML = "use light theme";
    }

  }
})();

