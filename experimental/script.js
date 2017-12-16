const contents = {
  home: `
    Hello Home
  `,
  projects: `
    <a href="mailto:matthiascjenny@gmail.com">Hello Projects</a>
  `,
  contact: `
    Hello Contact
  `,
  resume: `
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSvbIgZ_s_z-P2f-WrCXbGA4-nrTgCfU6Zr7ozlHnoViAZ92P2syQZyh22_ZTlmtW2dCbyRHFdcNotw/embed?start=false&loop=false&delayms=1000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  `,
};

document.addEventListener('DOMContentLoaded', function() {
  const main = Array.from(document.getElementsByTagName('main'));
  const navItems = Array.from(document.getElementsByClassName('navitem'));
  const content = document.getElementById('content');
  setTimeout(() => {
    main.forEach((el) => el.setAttribute('style', 'opacity: .85'));
    content.innerHTML = contents.home;
  }, 100 );

  navItems.forEach((navItem) => {
    navItem.addEventListener('click', toggleActive(navItems, content));
  });
});

const toggleActive = (navItems, content) => {
  return (e) => {
    navItems.forEach((navItem) => {
      const type = navItem.innerText.toLowerCase();
      if (e.target === navItem) {
        navItem.classList.add(`${type}-active`);
        navItem.classList.remove(type);
        content.innerHTML = contents[type];
      } else {
        navItem.classList.remove(`${type}-active`);
        navItem.classList.add(type);
      }
    });
  };
};
