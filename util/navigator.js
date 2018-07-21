import { handleKeyOrSwipe } from './event_handlers';

export default class {
  constructor(navItemTexts, navItemIdx) {
    this.navItemTexts = Object.freeze(navItemTexts);
    this.numNavItems = this.navItemTexts.length;
    this.navItemIdx = navItemIdx;
    this.xDown = null;
    this.yDown = null;
    this.navItems = Array.from(document.getElementsByClassName('navitem'));
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  handleKeydown(e) {
    const key = e.key;
    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      if (key === 'ArrowRight') {
        this.navItemIdx = (this.navItemIdx + 1) % this.numNavItems;
      } else if (key === 'ArrowLeft') {
        this.navItemIdx = (this.navItemIdx - 1) % this.numNavItems;
        if (this.navItemIdx === -1) {
          this.navItemIdx = 3;
        }
      }
      const nextLocation = this.navItemTexts[this.navItemIdx];
      handleKeyOrSwipe(this.navItems, nextLocation);
    }
  }

  handleTouchStart(evt) {
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 20) {
        this.navItemIdx = (this.navItemIdx + 1) % this.numNavItems;
      } else if (xDiff < -20) {
        this.navItemIdx = (this.navItemIdx - 1) % this.numNavItems;
        if (this.navItemIdx === -1) {
          this.navItemIdx = 3;
        }
      }
    }
    const nextLocation = this.navItemTexts[this.navItemIdx];
    handleKeyOrSwipe(this.navItems, nextLocation);
    this.xDown = null;
    this.yDown = null;
  }
}
