import Navigo from 'navigo';

const contents = {
  home: `
    <div class="home-content">
      <div>
        <img class="portrait" src="./img/matthias-jenny.png" />
        <div>
          <p>Hi, I'm Matthias Jenny, and I'm a full-stack web developer and teacher with a passion for logic. After writing a <a href="http://dspace.mit.edu/handle/1721.1/113731" target="_blank">PhD thesis</a> on computability theory, conditionals, and non-classical logic at MIT, I am now based in New York City, where I work at <a href="https://www.appacademy.io/">App Academy</a>.</p>
          <p>In addition to writing software, I also like <a href="https://500px.com/m1010j">taking photos</a>.<p>
        </div>
      </div>
    </div>
    <div class="home-technologies">
      <p>Favorite technologies:</p>
      <div class="home-technologies-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img class="icon" src="./icons/javascript.png" /></a>
        <a href="https://github.com/facebook/react"><img class="icon" src="./icons/react.png" /></a>
        <a href="https://www.ruby-lang.org/en/"><img class="icon" src="./icons/ruby.png" /></a>
        <a href="http://rubyonrails.org/"><img class="icon" src="./icons/rails.png" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img class="icon" src="./icons/html5.png" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img class="icon" src="./icons/css3.png" /></a>
      </div>
    </div>
  `,
  projects: `
    <div class="project-item">
      <h1><a href="http://www.andor.fun/">Andor</a></h1>
      <div class="project-item-detail">
        <a href="http://www.andor.fun/"><div class="andor-gif"></div></a>
        <div>
          An original logic game that teaches players the rules of the Boolean connectives. Built with React, Redux, Cordova, and my boolean-logic library (see below).<br />
          <div class="play-links">
            <a href='https://play.google.com/store/apps/details?id=io.cordova.andor' class="badge">
              <img alt='Get Andor on Google Play' src='img/google.svg'/>
            </a>
            <a href='https://itunes.apple.com/us/app/andor-learn-logic/id1339495044' class="badge">
              <img alt='Download Andor on the App Store' src='img/apple.svg'/>
            </a>
            <a href='https://www.amazon.com/dp/B079FM48R9/ref=sr_1_1?ie=UTF8&qid=1517356419' class="badge">
              <img alt='Download Andor on the App Store' src='img/amazon.svg'/>
            </a>
          </div>
        </div>
    </div>
    </div>
    <div class="project-item">
      <h1><a href="https://github.com/m1010j/boolean-logic">boolean-logic</a> <a href="https://github.com/m1010j/boolean-logic"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/boolean-logic"><i class="fab fa-npm"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://github.com/m1010j/boolean-logic"><div class="boolean-logic-png"></div></a>
        <div>
          A lightweight JavaScript library for evaluating formulas of Boolean logic.
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="http://www.livepoll.info/">LivePoll</a> <a href="https://github.com/m1010j/LivePoll"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="http://www.livepoll.info/"><div class="livepoll-gif"></div></a>
        <div>
          A Poll Everywhere clone built with Rails, React, Redux, Pusher, and AWS.
        </div>
      </div>
    </div>
  `,
  resume: `
  <div class="resume">
    <div class="iframe-container">
      <a href="./Matthias_Jenny_Resume.pdf" target="_blank" id="open-resume"><i class="fas fa-external-link-alt"></i></a>
      <iframe src="${location.origin}/resume/index.html"></iframe>
    </div>
  </div>
  `,
  contact: `
    <div class="contact-content">
      <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>
      <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>
      <p><a href="https://twitter.com/_m1010j_"><i class="fab fa-twitter"></i> twitter.com/_m1010j_</a></p>
      <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>
      <p><a href="https://angel.co/m1010j"><i class="fab fa-angellist"></i> angel.co/m1010j</a></p>
    </div>
  `,
};

var root = null;
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);

document.addEventListener('DOMContentLoaded', function() {
  const main = Array.from(document.getElementsByTagName('main'));
  const navItems = Array.from(document.getElementsByClassName('navitem'));
  const content = document.getElementById('content');
  let hash = 'home';
  if (window.location.hash.length > 0) {
    hash = window.location.hash.slice(1);
  }
  setTimeout(() => {
    main.forEach(el => el.setAttribute('style', 'opacity: 1'));
    content.innerHTML = contents[hash];
    if (hash === 'resume') {
      setTimeout(resizeResume, 300);
    }
  }, 100);

  navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleActive(navItems, content));
    const type = navItem.innerText.toLowerCase();
    if (hash === type) {
      navItem.classList.add(`${type}-active`);
      navItem.classList.remove(type);
      window.location = `#${type}`;
    } else {
      navItem.classList.remove(`${type}-active`);
      navItem.classList.add(type);
    }
  });

  const navItemTexts = navItems.map(navItem => {
    return navItem.innerText.toLowerCase();
  });

  installRouter(navItemTexts, content);
});

window.addEventListener('resize', resizeResume);

const installRouter = (navItemTexts, content) => {
  const routers = {};
  navItemTexts.forEach(navItemText => {
    routers[navItemText] = function() {
      content.innerHTML = contents[navItemText];
    };
  });

  router.on(routers).resolve();
};

function resizeResume() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const iframe = document.getElementsByTagName('iframe')[0];
  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const innerHtml = innerDoc.getElementsByTagName('html')[0];
  const openResume = document.getElementById('open-resume');
  const iframeContainer = document.getElementsByClassName(
    'iframe-container'
  )[0];
  if (!iframe || !innerDoc || !innerHtml || !openResume || !iframeContainer) {
    setTimeout(resizeResume, 100);
  } else {
    let multiplier;
    let factor;
    if (width >= height) {
      multiplier = 0.5;
      factor = 1684;
    } else {
      multiplier = 0.75;
      factor = 1115;
    }
    iframeContainer.style.opacity = 1;
    iframe.style.width = `${Math.floor(multiplier * width)}px`;
    iframe.style.height = `${Math.floor(multiplier * width * 10.41 / 8)}px`;
    innerHtml.style.fontSize = `${width / factor}em`;
  }
}

const toggleActive = (navItems, content) => {
  return e => {
    navItems.forEach(navItem => {
      const type = navItem.innerText.toLowerCase();
      if (e.target === navItem) {
        navItem.classList.add(`${type}-active`);
        navItem.classList.remove(type);
        window.location = `#${type}`;
        if (type === 'resume') {
          setTimeout(resizeResume, 500);
        }
      } else {
        navItem.classList.remove(`${type}-active`);
        navItem.classList.add(type);
      }
    });
  };
};
