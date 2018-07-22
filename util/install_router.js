import contents from '../contents';
import { toggleContent } from './toggle';

export default (navItemTexts, content, navItems) => {
  window.onhashchange = e => {
    const hash = e.newURL.split('#')[1];
    if (navItemTexts.includes(hash)) {
      toggleContent(content, navItems, hash);
    }
  };
};
