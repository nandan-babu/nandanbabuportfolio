const fs = require('fs');
let html = fs.readFileSync('public/landing-pages/kage.html', 'utf8');

const replacements = [
  ['<title>Kage — Where stillness reveals the unseen</title>', '<title>Nandan Babu — Full Stack Developer</title>'],
  ['Chapter 00 — The Hidden Gate', 'Chapter 00 — Profile'],
  [
    `<span class="mask-line"><span>Where stillness</span></span>
      <span class="mask-line"><span>reveals the</span></span>
      <span class="mask-line"><span>unseen.</span></span>`,
    `<span class="mask-line"><span>Nandan Babu</span></span>
      <span class="mask-line"><span>Full Stack</span></span>
      <span class="mask-line"><span>Developer</span></span>`
  ],
  [
    `Enter Kyoto through its quiet thresholds, where ritual,
      craft, and memory shape the path.`,
    `Enthusiastic Computer Applications student with hands-on experience in Angular, Node.js, and Python. Skilled in building responsive frontends and efficient backend systems.`
  ],
  ['<b class="jp">山門</b><i>Sanmon — before the bell</i>', '<b>Profile</b><i>About Me</i>'],
  ['<span class="v jp">影の道</span>', '<span class="v jp">開発者</span>'],
  [
    `<span class="tx"><b>Thresholds</b><p>Discover the hidden gates that open on to deeper paths.</p></span>`,
    `<span class="tx"><b>Work Experience</b><p>Internships and professional dev work.</p></span>`
  ],
  [
    `<span class="tx"><b>Still Gardens</b><p>Witness the courts where silence gently unfolds.</p></span>`,
    `<span class="tx"><b>Projects</b><p>Personal and academic full-stack projects.</p></span>`
  ],
  [
    `<span class="tx"><b>Sacred Craft</b><p>Embrace the hands and heritage that shape devotion.</p></span>`,
    `<span class="tx"><b>Skills</b><p>Technical abilities and soft skills.</p></span>`
  ],
  [
    `<span class="tx"><b>Night Rituals</b><p>Explore the rites that awaken when the day is done.</p></span>`,
    `<span class="tx"><b>Education</b><p>Academic background & Contact.</p></span>`
  ],
  [
    `<span class="k"><b>01</b> — The Sanmon</span><span class="rule"></span><span class="k jp">山門</span>`,
    `<span class="k"><b>01</b> — Work Experience</span><span class="rule"></span><span class="k jp">職歴</span>`
  ],
  [
    `<h2 class="display h-sec" data-rv="up">Charred cypress, worn stone, one gate left open.</h2>`,
    `<h2 class="display h-sec" data-rv="up">Professional Experience & Internships</h2>`
  ],
  [
    `<p class="lead" data-rv="up">Kage begins where the city stops: a mountain gate of cedar burned black,
        standing in its own weather. The soot is not decoration. It is how a board is taught to survive a
        hundred rainy seasons, and the first thing this place asks you to understand.</p>
      <p class="body" data-rv="up">Climb the worn steps and the worship hall lifts out of the mist, its paper
        screens lit from inside like a lantern the size of a house. Above the eaves a vermilion moon holds
        its place, patient, half hidden. Nothing here is in a hurry. Neither, for the next ninety minutes,
        are you.</p>`,
    `<p class="lead" data-rv="up"><b>UFS Technologies</b> — Full Stack Developer Intern And Software Developer (02/2026 – Present, Infopark, Kochi)<br/>
        • Developing and maintaining live web applications using Angular and Node.js, improving performance and user experience.<br/>
        • Collaborating on full stack solutions, handling both frontend development and backend integration for production-level projects.</p>
      <p class="body" data-rv="up"><b>Zoople Technologies</b> — Python Full Stack Internship (06/2025 – 12/2025, Kochi)<br/>
        • Contributed to web development projects, building responsive applications using modern technologies.<br/>
        • Applied full stack development methodologies to develop and deploy end-to-end solutions.</p>`
  ],
  [
    `<span>Cross the threshold</span>`,
    `<span>View Projects</span>`
  ],
  [
    `<div class="gate-stats" data-rv="up">
    <div><b>05</b><span>Chapters</span></div>
    <div><b>92</b><span>Minutes</span></div>
    <div><b>1611</b><span>Hall raised</span></div>
    <div><b>∞</b><span>Stillness</span></div>
  </div>`,
    `<div class="gate-stats" data-rv="up">
    <div><b>2</b><span>Roles</span></div>
    <div><b>1</b><span>Year+ Exp</span></div>
    <div><b>2026</b><span>Current</span></div>
    <div><b>∞</b><span>Passion</span></div>
  </div>`
  ],
  [
    `<span class="k"><b>02</b> — Still Gardens</span><span class="rule"></span><span class="k jp">庭園</span>`,
    `<span class="k"><b>02</b> — Projects</span><span class="rule"></span><span class="k jp">事業</span>`
  ],
  [
    `<div class="card-lab"><b>Approach</b><span class="jp">参道</span></div>
      </div>
      <div class="card-meta"><span>The long climb</span><span>01 / 03</span></div>`,
    `<div class="card-lab"><b>CRM App</b><span class="jp">Angular</span></div>
      </div>
      <div class="card-meta"><span>Sarathy Motors</span><span>Node.js / MySQL</span></div>`
  ],
  [
    `<div class="card-lab"><b>Lanterns</b><span class="jp">灯籠</span></div>
      </div>
      <div class="card-meta"><span>Lantern court</span><span>02 / 03</span></div>`,
    `<div class="card-lab"><b>Villa System</b><span class="jp">Django</span></div>
      </div>
      <div class="card-meta"><span>Real Estate</span><span>MySQL / REST</span></div>`
  ],
  [
    `<div class="card-lab"><b>Moonwater</b><span class="jp">月影</span></div>
      </div>
      <div class="card-meta"><span>The wet court</span><span>03 / 03</span></div>`,
    `<div class="card-lab"><b>Medi plus</b><span class="jp">Python</span></div>
      </div>
      <div class="card-meta"><span>Appointments</span><span>SQLite3 / Bootstrap</span></div>`
  ],
  [
    `<span class="k"><b>03</b> — Sacred Craft</span><span class="rule"></span><span class="k jp">手業</span>`,
    `<span class="k"><b>03</b> — Skills & Tech</span><span class="rule"></span><span class="k jp">技術</span>`
  ],
  [
    `<h2 class="display h-sec" data-rv="up">Five chapters. Ninety minutes. One quiet mind.</h2>
    <p class="body-lg" data-rv="up">Each chapter is a walk, not a lecture. You arrive at the gate, climb the
      steps, sit with the lantern, and leave with one thing worth keeping.</p>`,
    `<h2 class="display h-sec" data-rv="up">Languages. Frameworks. Databases.</h2>
    <p class="body-lg" data-rv="up">A comprehensive stack covering both frontend user experiences and reliable backend architectures.</p>`
  ],
  [
    `<h3>The Hidden Gate<em class="jp">山門</em></h3>
      <p>Why a gate is a sentence, and what you agree to when you walk under one.</p>
      <span class="t">14 min</span>`,
    `<h3>Frontend<em class="jp">フロント</em></h3>
      <p>HTML5, CSS3, Bootstrap 5, JavaScript, Angular.</p>
      <span class="t">Expert</span>`
  ],
  [
    `<h3>Borrowed Scenery<em class="jp">借景</em></h3>
      <p>Shakkei: composing with a mountain you will never own.</p>
      <span class="t">18 min</span>`,
    `<h3>Backend & APIs<em class="jp">バック</em></h3>
      <p>Node.js, Django, REST API, DRF, MVT, DTL.</p>
      <span class="t">Advanced</span>`
  ],
  [
    `<h3>Charred Cypress<em class="jp">焼杉</em></h3>
      <p>Yakisugi: burning a board black so the weather will let it live.</p>
      <span class="t">21 min</span>`,
    `<h3>Databases & ORM<em class="jp">データ</em></h3>
      <p>MySQL, SQLite3, ORM integration.</p>
      <span class="t">Advanced</span>`
  ],
  [
    `<h3>Lantern Light<em class="jp">灯籠</em></h3>
      <p>How a single ember decides the scale of everything around it.</p>
      <span class="t">17 min</span>`,
    `<h3>Soft Skills<em class="jp">ソフト</em></h3>
      <p>Communication, Time Management, Decision Making, Problem Solving.</p>
      <span class="t">Strong</span>`
  ],
  [
    `<h3>The Vermilion Moon<em class="jp">朱月</em></h3>
      <p>Why the moon burns red over the valley, and what the garden does with it.</p>
      <span class="t">22 min</span>`,
    `<h3>Additional<em class="jp">その他</em></h3>
      <p>Positive attitude, Leadership, Web page design, Jinja2.</p>
      <span class="t">Proficient</span>`
  ],
  [
    `<div class="eyebrow" data-rv="fade">Chapter 04 — Afterlight</div>
  <h2 class="display" data-rv="up">Afterlight</h2>
  <p class="body-lg" data-rv="up">The gate does not close behind you. Take the walk whenever the noise
    gets loud — it is always the same path, and never the same light.</p>
  <a class="cta" href="#top" data-rv="fade" data-cursor>
    <i></i><span>Begin the walk</span>`,
    `<div class="eyebrow" data-rv="fade">Chapter 04 — Education & Connect</div>
  <h2 class="display" data-rv="up">Education</h2>
  <p class="body-lg" data-rv="up"><b>Bachelor Of Computer Applications (Kerala University)</b><br/>2022 – 2025<br/><br/>
  Get in touch:<br/>nandanbabu2003@gmail.com | 8129025108 | Alappuzha<br/>
  LinkedIn: linkedin.com/in/nandan-babu-832137243 | GitHub: github.com/nandan-babu</p>
  <a class="cta" href="#top" data-rv="fade" data-cursor>
    <i></i><span>Back to Top</span>`
  ],
  [
    `<p>A five-chapter night walk through a Kyoto mountain temple. Three illustrated garden field notes
        sit inside a live Three.js sanctuary.</p>`,
    `<p>Portfolio of Nandan Babu — Full Stack Developer. Enthusiastic Computer Applications student with hands-on experience in Angular, Node.js, and Python.</p>`
  ],
  [
    `<li><a href="#gate" data-cursor>The Sanmon</a></li>
      <li><a href="#pathways" data-cursor>Still Gardens</a></li>
      <li><a href="#lessons" data-cursor>Sacred Craft</a></li>`,
    `<li><a href="#gate" data-cursor>Work Experience</a></li>
      <li><a href="#pathways" data-cursor>Projects</a></li>
      <li><a href="#lessons" data-cursor>Skills & Tech</a></li>`
  ]
];

replacements.forEach(([search, replace]) => {
  html = html.replace(search, replace);
});

fs.writeFileSync('public/landing-pages/kage.html', html);
