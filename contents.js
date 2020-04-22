const contents = {
  home: [
    `
    <div class="home-content">
        <div>
          <img class="portrait" src="./img/matthias-jenny.png" />
          <div>
            <p>Hi, I'm Matthias Jenny, and I'm a software engineer. After writing a <a href="http://dspace.mit.edu/handle/1721.1/113731" target="_blank">PhD thesis</a> on computability theory, conditionals, and non-classical logic at MIT, I am now based in New York City, where I work at <a href="https://evenfinancial.com">Even Financial</a>. I get equally excited about writing sophisticated and efficient algorithms as I do about developing beautiful and responsive user interfaces.</p>
            <p>In addition to writing software, I also like <a href="https://500px.com/m1010j">taking photos</a>.<p>
          </div>
        </div>
      </div>   
  `,
    0,
  ],
  projects: [
    `
    <div class="project-item">
      <h1><a href="https://github.com/m1010j/github-jira-link">GitHub-Jira Link</a> <a href="https://github.com/m1010j/github-jira-link"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <div class="github-jira-link-png project-image"></div>
        <div class="project-item-description">
          <div>A <a href="https://chrome.google.com/webstore/detail/github-jira-link/npfkglcfelgebbampcngijkklhocgfia">Chrome</a> and <a href="https://addons.mozilla.org/en-US/firefox/addon/github-jira-link/">Firefox</a> extension that links GitHub pull requests with their corresponding Jira tickets.</div>
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="/stress-hooks/">Stress Testing React Hooks</a> <a href="https://github.com/m1010j/stress-hooks"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="/stress-hooks/"><div class="stress-hooks-gif project-image"></div></a>
        <div class="project-item-description">
          <div>A tool to benchmark different ways of writing stateful functional components using React Hooks . I detail how to write performant React Hooks components  <a href="https://medium.com/@_m1010j_/how-to-avoid-this-react-hooks-performance-pitfall-28770ad9abe0">here</a>.</div>
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="https://async.matthiasjenny.com/">Explorations in Asynchronicity</a> <a href="https://github.com/m1010j/async-explorations"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/async-explorations-cli"><i class="fab fa-npm"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://async.matthiasjenny.com/"><div class="async-explorations-gif project-image"></div></a>
        <div class="project-item-description">
          <div>A benchmark and analysis tool for asynchronous recursive functions. I discuss some of the most surprising results <a href="https://medium.com/@_m1010j_/async-recursion-promising-surprising-but-foremost-confusing-5e13aa8bbc06">here</a>.</div>
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="https://www.pumpkintime.app/">Pumpkin Time</a> <a href="https://github.com/m1010j/pumpkin-time"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://www.pumpkintime.app/"><div class="pumpkin-time-gif project-image"></div></a>
        <div class="project-item-description">
          <div>A progressive web app commissioned by an Assistant Director of the Directors Guild of America to calculate set restrictions for underage actors. Built with Vue.js and service workers.</div>
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="http://www.andor.fun/">Andor</a></h1>
      <div class="project-item-detail">
        <a href="http://www.andor.fun/"><div class="andor-gif project-image"></div></a>
        <div class="project-item-description">
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
      <h1><a href="/sat-zoo">Sat Zoo</a> <a href="https://github.com/m1010j/sat-zoo"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://github.com/m1010j/sat-zoo"><div class="sat-zoo-gif project-image"></div></a>
        <div class="project-item-description">
          A benchmarking tool for Boolean satisfiability, powered by my boolean-logic library (see below).
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="https://github.com/m1010j/boolean-logic">boolean-logic</a> <a href="https://github.com/m1010j/boolean-logic"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/boolean-logic"><i class="fab fa-npm"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://github.com/m1010j/boolean-logic"><div class="boolean-logic-png project-image"></div></a>
        <div class="project-item-description">
          A lightweight JavaScript library for evaluating formulas of Boolean logic.
        </div>
      </div>
    </div>
  `,
    1,
  ],
  resume: [
    `
  <div class="resume">
    <div class="iframe-container">
      <a href="resume/Matthias_Jenny_Resume.pdf" target="_blank" id="open-resume"><i class="fas fa-external-link-alt"></i></a>
      <iframe src="resume/index.html"></iframe>
    </div>
  </div>
  `,
    2,
  ],
  contact: [
    `
    <div class="contact-content">
      <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>
      <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>
      <p><a href="https://twitter.com/_m1010j_"><i class="fab fa-twitter"></i> twitter.com/_m1010j_</a></p>
      <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>
      <p><a href="https://angel.co/m1010j"><i class="fab fa-angellist"></i> angel.co/m1010j</a></p>
    </div>
  `,
    3,
  ],
};

export default contents;
