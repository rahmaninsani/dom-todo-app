import { MainElement, SectionElement, DivElement } from "./assets/scripts/components/elements/index.js";
import LeftSideCol from "./assets/scripts/components/LeftSideCol.js";
import RightSideCol from "./assets/scripts/components/RightSideCol.js";

const App = () => {
  const main = new MainElement();
  const section = new SectionElement();
  const mainRow = new DivElement();

  mainRow.addClass(["row"]);
  mainRow.addChild([LeftSideCol, RightSideCol]);

  section.addAttribute({ id: "home" });
  section.addClass(["container-fluid"]);

  section.addChild([mainRow]);
  main.addChild([section]);

  return main.element;
};

export default App();
