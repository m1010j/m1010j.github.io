import Navigo from 'navigo';
import contents from './contents';
import setFontSize from './util/set_font_size';
import resizeResume from './util/resize_resume';
import Navigator from './util/navigator';
import installRouter from './util/install_router';
import { toggleActive } from './util/toggle';
import { handleClick } from './util/event_handlers';

document.addEventListener('DOMContentLoaded', function() {
  const main = Array.from(document.getElementsByTagName('main'));
  const navItems = Array.from(document.getElementsByClassName('navitem'));
  const boxShadow = document.getElementById('box-shadow');
  const content = document.getElementById('content');

  const router = new Navigo(null, true, '#');
  installRouter(router, navItems, content);

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
    navItem.addEventListener('click', handleClick(navItems, content));
    toggleActive(navItem, hash);
  });

  setFontSize();
  document.addEventListener('resize', resizeResume);
  document.addEventListener('orientationchange', setFontSize);

  const navItemTexts = Object.keys(contents).sort((a, b) => {
    return contents[a][1] - contents[b][1];
  });
  const navItemIdx = navItemTexts.indexOf(hash);
  const navigator = new Navigator(navItemTexts, navItemIdx);
  document.onkeydown = navigator.handleKeydown;
  document.addEventListener('touchstart', navigator.handleTouchStart, false);
  document.addEventListener('touchmove', navigator.handleTouchMove, false);
});
