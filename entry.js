import Navigo from 'navigo';

const contents = {
  home: `
    <p><img class="portrait" src="./img/matthias-jenny.png" />Hi, I'm Matthias Jenny, and I'm a full-stack web developer and teacher with a passion for logic. I'm based in New York City and I work at <a href="https://www.appacademy.io/">App Academy</a>. I also like <a href="https://500px.com/m1010j">photography</a>.<p>
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
  <div class="resume"><p><a href="./Matthias_Jenny_Resume.pdf"><i class="fa fa-download" aria-hidden="true"></i> Download resume</a></p>
    <iframe src="./resume/index.html"></iframe>
  </div>
  `,
  contact: `
    <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>
    <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>
    <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>
    <p><a href="https://twitter.com/_m1010j_"><i class="fab fa-twitter"></i> twitter.com/_m1010j_</a></p>

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
  }, 100);

  navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleActive(navItems, content));
    const type = navItem.innerText.toLowerCase();
    if (hash === type) {
      navItem.classList.add(`${type}-active`);
      navItem.classList.remove(type);
      window.location = `#${type}`;
      if (type === 'resume') {
        asyncResizeResume();
      }
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
  const iframe = document.getElementsByTagName('iframe')[0];
  iframe.style.width = `${Math.floor(0.5 * width)}px`;
  iframe.style.height = `${Math.floor(0.5 * width * 10.85 / 8)}px`;
  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const innerHtml = innerDoc.getElementsByTagName('html')[0];
  innerHtml.style.fontSize = `${width / 1650}em`;
}

function asyncResizeResume() {
  const iframe = document.getElementsByTagName('iframe')[0];
  if (!iframe) {
    setTimeout(asyncResizeResume, 10);
  } else {
    const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (innerDoc.readyState === 'complete') {
      resizeResume();
    } else {
      setTimeout(asyncResizeResume, 10);
    }
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
          asyncResizeResume();
        }
      } else {
        navItem.classList.remove(`${type}-active`);
        navItem.classList.add(type);
      }
    });
  };
};
// width="100%"
// height="100%"
