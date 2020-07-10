import { resizeResume } from "./resize_resume";
import { contents } from "../contents";

export const toggleActive = (navItem, hash) => {
  const type = navItem.innerText.toLowerCase();
  if (hash === type) {
    toggleHash(type);
  }
};

export const toggleHash = (type) => {
  window.location = `#${type}`;
  if (type === "resume") {
    setTimeout(resizeResume, 500);
  }
};

export const toggleContent = (content, navItems, hash) => {
  content.innerHTML = contents[hash][0];
  navItems.forEach((navItem) => {
    const type = navItem.innerText.toLowerCase();
    if (hash === type) {
      navItem.classList.add(`${type}-active`);
      navItem.classList.remove(type);
    } else {
      navItem.classList.remove(`${type}-active`);
      navItem.classList.add(type);
    }
    if (hash === "resume") {
      setTimeout(resizeResume, 300);
    }
  });
};
