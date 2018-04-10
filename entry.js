import Navigo from 'navigo';

const contents = {
  home: `
    <div class="home-content">
        <div>
          <img class="portrait" src="./img/matthias-jenny.png" />
          <div>
            <p>Hi, I'm Matthias Jenny, and I'm a full-stack web developer and teacher with a passion for logic. After writing a <a href="http://dspace.mit.edu/handle/1721.1/113731" target="_blank">PhD thesis</a> on computability theory, conditionals, and non-classical logic at MIT, I am now based in New York City, where I work at <a href="https://www.appacademy.io/">App Academy</a>. I get equally excited about writing sophisticated and efficient algorithms as I do about developing beautiful and responsive user interfaces.</p>
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

  setFontSize();
});

window.addEventListener('resize', resizeResume);

window.addEventListener('orientationchange', setFontSize);

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

function isMobile() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

function setFontSize() {
  if (isMobile()) {
    if (window.innerHeight < window.innerWidth) {
      document.getElementsByTagName('html')[0].style.fontSize = '1em';
    } else {
      document.getElementsByTagName('html')[0].style.fontSize = '1.5em';
    }
  }
}
