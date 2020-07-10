import { setFontSize } from "./set_font_size";

export const resizeResume = () => {
  setFontSize();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const iframe = document.getElementsByTagName("iframe")[0];
  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const innerHtml = innerDoc.getElementsByTagName("html")[0];
  const openResume = document.getElementById("open-resume");
  const iframeContainer = document.getElementsByClassName(
    "iframe-container"
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
    iframe.style.height = `${Math.floor((multiplier * width * 10.41) / 8)}px`;
    innerHtml.style.fontSize = `${width / factor}em`;
  }
};

