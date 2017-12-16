const homeContent = `
  Hello
`;

document.addEventListener("DOMContentLoaded", function() {
  const main = Array.from(document.getElementsByTagName('main'));
  setTimeout(() => {
    main.forEach((el) => el.setAttribute("style", "opacity: .85"));
  }, 100 );
});
