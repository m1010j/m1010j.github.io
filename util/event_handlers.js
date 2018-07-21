import { toggleActive } from './toggle';

export const handleKeyOrSwipe = (navItems, nextLocation) => {
  navItems.forEach(navItem => {
    toggleActive(navItem, nextLocation);
  });
};

export const handleClick = (navItems, content) => {
  return e => {
    navItems.forEach(navItem => {
      const hash = e.target.innerText.toLowerCase();
      toggleActive(navItem, hash);
    });
  };
};
