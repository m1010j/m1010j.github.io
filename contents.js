const contents = {
  home: [
    `
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
    0,
  ],
  projects: [
    `
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
      <h1><a href="http://www.matthiasjenny.com/sat-zoo">Sat Zoo</a> <a href="https://github.com/m1010j/sat-zoo"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://github.com/m1010j/sat-zoo"><div class="sat-zoo-gif"></div></a>
        <div>
          A benchmarking tool for Boolean satisfiability, powered by my boolean-logic library (see below).
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
    1,
  ],
  resume: [
    `
  <div class="resume">
    <div class="iframe-container">
      <a href="https://www.matthiasjenny.com/resume/Matthias_Jenny_Resume.pdf" target="_blank" id="open-resume"><i class="fas fa-external-link-alt"></i></a>
      <iframe src="https://www.matthiasjenny.com/resume/index.html"></iframe>
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
