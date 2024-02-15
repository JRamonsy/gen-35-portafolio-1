import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import updateCopyrightYear from "./helpers/date_updater.js";
import resetToHome from "./helpers/reload_page.js";


parallax()

activeMenu()

resetToHome()

updateCopyrightYear()







/*Hace falta exportar a archivos independientes de js y importarlas a el archivo main.js*/
//darkmode 
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkmode-toggle')
  const body = document.getElementById('body')

  darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
})

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (prefersLight) {
        body.classList.remove('dark-mode') 
    }
})

//language
document.addEventListener('DOMContentLoaded', function () {
  const languageToggle = document.getElementById('language-toggle')

  if (window.location.pathname === '/index1.html') {
    languageToggle.checked = true
  } else {
    languageToggle.checked = false
  }

  languageToggle.addEventListener('change', function () {
    if (languageToggle.checked && window.location.pathname !== '/index1.html') {
        window.location.href = 'index1.html'
    } else if (!languageToggle.checked && window.location.pathname !== '/index.html') {
        window.location.href = 'index.html'
    }
  })
})
