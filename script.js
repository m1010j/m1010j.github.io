!function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const a=()=>{var e,t;t=!1,e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t&&(window.innerHeight<window.innerWidth?document.getElementsByTagName("html")[0].style.fontSize="1em":document.getElementsByTagName("html")[0].style.fontSize="1.5em")};const n=()=>{a();const e=window.innerWidth,t=window.innerHeight,i=document.getElementsByTagName("iframe")[0],o=i.contentDocument||i.contentWindow.document,s=o.getElementsByTagName("html")[0],r=document.getElementById("open-resume"),c=document.getElementsByClassName("iframe-container")[0];if(i&&o&&s&&r&&c){let a,n;e>=t?(a=.5,n=1684):(a=.75,n=1115),c.style.opacity=1,i.style.width=Math.floor(a*e)+"px",i.style.height=Math.floor(a*e*10.41/8)+"px",s.style.fontSize=e/n+"em"}else setTimeout(n,100)},o={home:['\n    <div class="home-content">\n        <div>\n          <img class="portrait" src="./img/matthias-jenny.png" />\n          <div>\n            <p>Hi, I\'m Matthias Jenny, and I\'m a software engineer. After writing a <a href="http://dspace.mit.edu/handle/1721.1/113731" target="_blank">PhD thesis</a> on computability theory, conditionals, and non-classical logic at MIT, I am now based in New York City, where I work at <a href="https://evenfinancial.com">Even Financial</a>.</p>\n            <p>In addition to writing software, I also like <a href="https://500px.com/m1010j">taking photos</a>.<p>\n          </div>\n        </div>\n      </div>   \n  ',0],projects:['\n    <div class="project-item">\n      <h1><a href="https://github.com/m1010j/github-jira-link">GitHub-Jira Link</a> <a href="https://github.com/m1010j/github-jira-link"><i class="fab fa-github"></i></a></h1>\n      <div class="project-item-detail">\n        <div class="github-jira-link-png project-image"></div>\n        <div class="project-item-description">\n          <div>A <a href="https://chrome.google.com/webstore/detail/github-jira-link/npfkglcfelgebbampcngijkklhocgfia">Chrome</a> and <a href="https://addons.mozilla.org/en-US/firefox/addon/github-jira-link/">Firefox</a> extension that links GitHub pull requests with their corresponding Jira tickets.</div>\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="https://www.matthiasjenny.com/stress-hooks/">Stress Testing React Hooks</a> <a href="https://github.com/m1010j/stress-hooks"><i class="fab fa-github"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://www.matthiasjenny.com/stress-hooks/"><div class="stress-hooks-gif project-image"></div></a>\n        <div class="project-item-description">\n          <div>A tool to benchmark different ways of writing stateful functional components using React Hooks . I detail how to write performant React Hooks components  <a href="https://medium.com/@_m1010j_/how-to-avoid-this-react-hooks-performance-pitfall-28770ad9abe0">here</a>.</div>\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="https://async.matthiasjenny.com/">Explorations in Asynchronicity</a> <a href="https://github.com/m1010j/async-explorations"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/async-explorations-cli"><i class="fab fa-npm"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://async.matthiasjenny.com/"><div class="async-explorations-gif project-image"></div></a>\n        <div class="project-item-description">\n          <div>A benchmark and analysis tool for asynchronous recursive functions. I discuss some of the most surprising results <a href="https://medium.com/@_m1010j_/async-recursion-promising-surprising-but-foremost-confusing-5e13aa8bbc06">here</a>.</div>\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="https://www.pumpkintime.app/">Pumpkin Time</a> <a href="https://github.com/m1010j/pumpkin-time"><i class="fab fa-github"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://www.pumpkintime.app/"><div class="pumpkin-time-gif project-image"></div></a>\n        <div class="project-item-description">\n          <div>A progressive web app commissioned by an Assistant Director of the Directors Guild of America to calculate set restrictions for underage actors. Built with Vue.js and service workers.</div>\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="http://www.andor.fun/">Andor</a></h1>\n      <div class="project-item-detail">\n        <a href="http://www.andor.fun/"><div class="andor-gif project-image"></div></a>\n        <div class="project-item-description">\n          An original logic game that teaches players the rules of the Boolean connectives. Built with React, Redux, Cordova, and my boolean-logic library (see below).<br />\n          <div class="play-links">\n            <a href=\'https://play.google.com/store/apps/details?id=io.cordova.andor\' class="badge">\n              <img alt=\'Get Andor on Google Play\' src=\'img/google.svg\'/>\n            </a>\n            <a href=\'https://itunes.apple.com/us/app/andor-learn-logic/id1339495044\' class="badge">\n              <img alt=\'Download Andor on the App Store\' src=\'img/apple.svg\'/>\n            </a>\n            <a href=\'https://www.amazon.com/dp/B079FM48R9/ref=sr_1_1?ie=UTF8&qid=1517356419\' class="badge">\n              <img alt=\'Download Andor on the App Store\' src=\'img/amazon.svg\'/>\n            </a>\n          </div>\n        </div>\n    </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="http://www.matthiasjenny.com/sat-zoo">Sat Zoo</a> <a href="https://github.com/m1010j/sat-zoo"><i class="fab fa-github"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://github.com/m1010j/sat-zoo"><div class="sat-zoo-gif project-image"></div></a>\n        <div class="project-item-description">\n          A benchmarking tool for Boolean satisfiability, powered by my boolean-logic library (see below).\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="https://github.com/m1010j/boolean-logic">boolean-logic</a> <a href="https://github.com/m1010j/boolean-logic"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/boolean-logic"><i class="fab fa-npm"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://github.com/m1010j/boolean-logic"><div class="boolean-logic-png project-image"></div></a>\n        <div class="project-item-description">\n          A lightweight JavaScript library for evaluating formulas of Boolean logic.\n        </div>\n      </div>\n    </div>\n  ',1],resume:['\n  <div class="resume">\n    <div class="iframe-container">\n      <a href="resume/Matthias_Jenny_Resume.pdf" target="_blank" id="open-resume"><i class="fas fa-external-link-alt"></i></a>\n      <iframe src="resume/index.html"></iframe>\n    </div>\n  </div>\n  ',2],contact:['\n    <div class="contact-content">\n      <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>\n      <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>\n      <p><a href="https://twitter.com/_m1010j_"><i class="fab fa-twitter"></i> twitter.com/_m1010j_</a></p>\n      <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>\n      <p><a href="https://angel.co/m1010j"><i class="fab fa-angellist"></i> angel.co/m1010j</a></p>\n    </div>\n  ',3]},s=(e,t)=>{const i=e.innerText.toLowerCase();t===i&&r(i)},r=e=>{window.location="#"+e,"resume"===e&&setTimeout(n,500)},c=(e,t,i)=>{e.innerHTML=o[i][0],t.forEach(e=>{const t=e.innerText.toLowerCase();i===t?(e.classList.add(t+"-active"),e.classList.remove(t)):(e.classList.remove(t+"-active"),e.classList.add(t)),"resume"===i&&setTimeout(n,300)})};class m{constructor(e,t){this.navItemTexts=Object.freeze(e),this.numNavItems=this.navItemTexts.length,this.navItemIdx=t,this.xDown=null,this.yDown=null,this.navItems=Array.from(document.getElementsByClassName("navitem")),this.handleKeydown=this.handleKeydown.bind(this)}handleKeydown(e){const t=e.key;if("ArrowRight"===t||"ArrowLeft"===t){"ArrowRight"===t?this.navItemIdx=(this.navItemIdx+1)%this.numNavItems:"ArrowLeft"===t&&(this.navItemIdx=(this.navItemIdx-1)%this.numNavItems,-1===this.navItemIdx&&(this.navItemIdx=3));const e=this.navItemTexts[this.navItemIdx];((e,t)=>{e.forEach(e=>{s(e,t)})})(this.navItems,e)}}}window.onload=()=>{const e=Array.from(document.getElementsByTagName("main")),t=Array.from(document.getElementsByClassName("navitem")),i=document.getElementById("content");let r="home";window.location.hash.length>0&&(r=window.location.hash.slice(1)),setTimeout(()=>{e.forEach(e=>e.setAttribute("style","opacity: 1")),c(i,t,r)},100),t.forEach(e=>{e.onclick=((e,t)=>t=>{e.forEach(e=>{const i=t.target.innerText.toLowerCase();s(e,i)})})(t),s(e,r)}),a(),window.onresize=n,window.onorientationchange=a;const l=Object.keys(o).sort((e,t)=>o[e][1]-o[t][1]);((e,t,i)=>{window.onhashchange=a=>{const n=a.newURL.split("#")[1];e.includes(n)&&c(t,i,n)}})(l,i,t);const d=l.indexOf(r),h=new m(l,d);document.onkeydown=h.handleKeydown}}]);
//# sourceMappingURL=script.js.map