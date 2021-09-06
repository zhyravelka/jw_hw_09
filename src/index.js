import "./styles.css"
import "./images/sprite.svg"
import menu from "./menu.json"
import refs from "./js/refs.js"
import  template  from "./templates/menu-template.handlebars"
import "./js/list.js"

const markup = template(menu);

refs.jsMenu.innerHTML = markup;