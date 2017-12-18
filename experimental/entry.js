const contents = {
  home: `
    <p><img class="portrait" src="matthias-jenny.png" />Hi, I'm Matthias Jenny, and I'm a full-stack web developer and teacher with a passion for logic. I'm located in New York City and I work at <a href="https://www.appacademy.io/">App Academy</a>.<p>
    <p>Favorite technologies:</p>
    <p>
      <center>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img class="icon" src="./icons/javascript.png" /></a>
        <a href="https://github.com/facebook/react"><img class="icon" src="./icons/react.png" /></a>
        <a href="https://www.ruby-lang.org/en/"><img class="icon" src="./icons/ruby.png" /></a>
        <a href="http://rubyonrails.org/"><img class="icon" src="./icons/rails.png" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img class="icon" src="./icons/html5.png" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img class="icon" src="./icons/css3.png" /></a>
      </center>
    </p>
  `,
  projects: `
    <a href="mailto:matthiascjenny@gmail.com">Hello Projects</a>
  `,
  resume: `
  <p><a href="./Matthias_Jenny_Resume.pdf"><i class="fa fa-download" aria-hidden="true"></i> Download resume</a></p>
  <center><iframe
  src="https://docs.google.com/presentation/d/e/2PACX-1vSvbIgZ_s_z-P2f-WrCXbGA4-nrTgCfU6Zr7ozlHnoViAZ92P2syQZyh22_ZTlmtW2dCbyRHFdcNotw/embed?start=false&loop=false&delayms=1000"
  frameborder="0"
  allowfullscreen="true"
  mozallowfullscreen="true"
  webkitallowfullscreen="true">
  </iframe></center>
  `,
  contact: `
    <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>
    <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>
    <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>

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
// width="100%"
// height="100%"
