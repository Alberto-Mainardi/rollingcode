// Menú Desplegable
const toggler = document.querySelector(".sidebar-btn");
toggler.addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("collapsed");
})



// Tema
const colorThemes = document.querySelectorAll('[name="theme"]');

// Guardar Tema
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
};

const retrieveTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme){
            themeOption.checked = true;
        };
    });
};

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
})

document.onload = retrieveTheme();
