import App from "./App.js";
import executeAllEventListener from "./assets/scripts/events/index.js";

const body = document.getElementsByTagName("body")[0];
body.appendChild(App);

executeAllEventListener();
