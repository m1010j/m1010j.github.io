import contents from '../contents';

export default (router, navItems, content) => {
  const routers = {};
  const navItemTexts = navItems.map(navItem => {
    return navItem.innerText.toLowerCase();
  });
  navItemTexts.forEach(navItemText => {
    routers[navItemText] = function() {
      content.innerHTML = contents[navItemText][0];
      navItems.forEach(navItem => {
        const type = navItem.innerText.toLowerCase();
        if (navItemText === type) {
          navItem.classList.add(`${type}-active`);
          navItem.classList.remove(type);
        } else {
          navItem.classList.remove(`${type}-active`);
          navItem.classList.add(type);
        }
      });
    };
  });

  router.on(routers).resolve();
};
