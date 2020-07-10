import { handleKeyOrSwipe } from "./event_handlers";

export class Navigator {
  constructor(navItemTexts, navItemIdx) {
    this.navItemTexts = Object.freeze(navItemTexts);
    this.numNavItems = this.navItemTexts.length;
    this.navItemIdx = navItemIdx;
    this.xDown = null;
    this.yDown = null;
    this.navItems = Array.from(document.getElementsByClassName("navitem"));
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleKeydown(e) {
    const key = e.key;
    if (key === "ArrowRight" || key === "ArrowLeft") {
      if (key === "ArrowRight") {
        this.navItemIdx = (this.navItemIdx + 1) % this.numNavItems;
      } else if (key === "ArrowLeft") {
        this.navItemIdx = (this.navItemIdx - 1) % this.numNavItems;
        if (this.navItemIdx === -1) {
          this.navItemIdx = 3;
        }
      }
      const nextLocation = this.navItemTexts[this.navItemIdx];
      handleKeyOrSwipe(this.navItems, nextLocation);
    }
  }
}
