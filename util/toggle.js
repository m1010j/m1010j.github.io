import resizeResume from './resize_resume';

export const toggleActive = (navItem, hash) => {
  const type = navItem.innerText.toLowerCase();
  if (hash === type) {
    toggleContent(type);
  }
};

export const toggleContent = type => {
  window.location = `#${type}`;
  if (type === 'resume') {
    setTimeout(resizeResume, 500);
  }
};
