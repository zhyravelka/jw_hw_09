import refs from "./refs.js";

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function themeSwitch() {
    refs.checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            refs.body.classList.remove(Theme.LIGHT)
            refs.body.classList.add(Theme.DARK)
        } else {
            refs.body.classList.remove(Theme.DARK)
            refs.body.classList.add(Theme.LIGHT);
        }
        localStorage.setItem('theme', refs.body.classList)
        localStorage.setItem('checked', event.target.checked)
    })
}
themeSwitch()


