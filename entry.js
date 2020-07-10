import { setFontSize } from "./util/set_font_size";
import { resizeResume } from "./util/resize_resume";
import { Navigator } from "./util/navigator";
import { installRouter } from "./util/install_router";
import { toggleActive, toggleContent } from "./util/toggle";
import { handleClick } from "./util/event_handlers";
import { contents } from "./contents";

window.onload = () => {
  const main = Array.from(document.getElementsByTagName("main"));
  const navItems = Array.from(document.getElementsByClassName("navitem"));
  const content = document.getElementById("content");

  let hash = "home";
  if (window.location.hash.length > 0) {
    hash = window.location.hash.slice(1);
  }
  setTimeout(() => {
    main.forEach((el) => el.setAttribute("style", "opacity: 1"));
    toggleContent(content, navItems, hash);
  }, 100);

  navItems.forEach((navItem) => {
    navItem.onclick = handleClick(navItems, content);
    toggleActive(navItem, hash);
  });

  setFontSize();
  window.onresize = resizeResume;
  window.onorientationchange = setFontSize;

  const navItemTexts = Object.keys(contents).sort((a, b) => {
    return contents[a][1] - contents[b][1];
  });
  installRouter(navItemTexts, content, navItems);

  const navItemIdx = navItemTexts.indexOf(hash);
  const navigator = new Navigator(navItemTexts, navItemIdx);
  document.onkeydown = navigator.handleKeydown;
};
