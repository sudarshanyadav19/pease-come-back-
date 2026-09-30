const app = document.getElementById("app");

const toast = document.getElementById("toast");


/* =========================================
   WEBSITE STATE
========================================= */

const state = {

  page: 1,

  noClicks: 0,

  teddy: 0,

  yesClicks: JSON.parse(
    localStorage.getItem(
      "sorry_yes_clicks"
    ) || "[]"
  )

};


/* =========================================
   TEDDY IMAGES
========================================= */

const teddies = Array.from(
  { length: 20 },

  (_, i) =>
    `teddy${i + 1}.jpg`
);


/* =========================================
   100 EMOTIONAL MESSAGES
========================================= */

const noLines = [

  "plzz na bacha mani halna , aafno bhutku ko maya lagdaina .",

  "malai aafno mistake reliase vai hale ko xa meri jaan .",

  "matrw timi mani halna duniya tw mani nai hal xa .",

  "yrr sab vanda importent yo xa ni hami sangai hunu parxa pahila .",

  "plzz na yrr 😔😭.",

  "plzz ramrari sochna na yrr jaaan  .",

  "bachaa aafno jaan ko kura mandainas ?..😢.",

  "ma pahila vandaa dherai badli haleko xu plzzz....na 😞.",

  "If I could explain my heart properly, I would.",

  "yeuta wrong decision liyerw paxi paxtaunu parxa .",

  "One more chance to make it ?",

  "ek baar ramrai sochi hal .",

  "yrr tero bacha din raat rui rah ko xa .",

  "hami yeti thulo prblm ma ta sath xodenas ek dusra ko ",

  "I know trust takes time. I am willing to earn it.",

  "I don't expect everything to become perfect instantly.",

  "I just want the chance to try again.",

  "Your feelings matter to me.",

  "Can we talk without anger, just honestly?",

  "Maybe this isn't the end of our chapter.",

  "I would rather rebuild slowly than give up.",

  "I am learning from what happened.",

  "Please let me show you, not just tell you.",

  "I miss laughing with you.",

  "I miss the simple moments.",

  "I am sorry. Truly.",

  "Could we take one small step toward each other?",

  "I don't want to win an argument; I want to fix this.",

  "I hope you can see that I am trying.",

  "I know apologies need actions behind them.",

  "I want to make better memories with you.",

  "Maybe we can forgive without forgetting the lesson.",

  "I am ready to be patient.",

  "I will respect whatever you feel.",

  "But if there is a little hope, I want to protect it.",

  "Can I have one more honest chance?",

  "I promise to communicate better.",

  "I want peace between us.",

  "I want us to smile again.",

  "You deserve a sincere apology.",

  "I should have understood you better.",

  "I am sorry for not listening enough.",

  "Let's not let one bad moment define everything.",

  "Maybe we can start fresh, carefully.",

  "I want to rebuild the trust I damaged.",

  "I am not perfect, but I can grow.",

  "Please judge me by what I do next too.",

  "I will take responsibility for my part.",

  "I hope we can talk when you're ready.",

  "I don't want to pressure you.",

  "I just wanted you to know I care.",

  "I still value what we shared.",

  "Thank you for reading this far.",

  "Maybe your heart needs time.",

  "I'll respect that time.",

  "I just hope there is still a tiny possibility.",

  "Can we try being kind to each other again?",

  "I am sorry for the hurt.",

  "I wish I could undo that moment.",

  "I can't undo it, but I can learn from it.",

  "I want my actions to speak louder.",

  "No excuses—just a genuine apology.",

  "I hope someday this feels lighter.",

  "I want to be someone you can trust again.",

  "I know forgiveness is a gift, not a demand.",

  "So I am only asking, gently.",

  "Could we talk one more time?",

  "Could we listen to each other?",

  "Could we understand each other again?",

  "I miss the comfort of our friendship.",

  "I miss the silly conversations.",

  "I miss the little things.",

  "I am sorry for making things harder.",

  "I should have handled it differently.",

  "I am learning.",

  "I am growing.",

  "I want to do better.",

  "I want to be better.",

  "I want to treat your feelings with more care.",

  "Let's make the next chapter healthier.",

  "Let's make it slower and more honest.",

  "Let's communicate instead of assuming.",

  "Let's listen instead of reacting.",

  "Let's forgive only if your heart is ready.",

  "I will not pretend nothing happened.",

  "I want us to learn from it.",

  "Maybe we can turn a mistake into a lesson.",

  "Maybe we can find our smile again.",

  "Maybe there is still something worth rebuilding.",

  "I hope this reaches your heart gently.",

  "I am sorry.",

  "Really, really sorry.",

  "One more chance, if you feel comfortable.",

  "No pressure. Just honesty.",

  "I care about you.",

  "I respect your choice.",

  "And I hope we can talk.",

  "Maybe we can write a better chapter.",

  "Would you let me try?",

  "I will wait for your answer.",

  "Thank you for hearing me."

];


/* =========================================
   PAGE 4 QUOTES
========================================= */

const comebackQuotes = [

  "Some stories need a pause, not a goodbye.",

  "bas ek chance bacha pkkaa ma aafno mistake repeate gardina ☺️.",

  "yo tw vandina ki paxi problem aaudaina but ma timro sath hunxu chahe problem jasto pani hos ."

];


/* =========================================
   COLLEGE BACKGROUND
========================================= */

function college() {

  return `

    <div class="college" aria-hidden="true">

      <div class="building b1"></div>

      <div class="building b2"></div>

      <div class="building b3"></div>

      <div class="building b4"></div>

      <div class="path"></div>

    </div>


    <div class="doodle d1">
      🌸
    </div>

    <div class="doodle d2">
      ♡
    </div>

    <div class="doodle d3">
      ✦
    </div>

    <div class="doodle d4">
      🌷
    </div>

  `;

}


/* =========================================
   TEDDY HTML
========================================= */

function teddyMarkup() {

  return `

    <div class="teddy">

      <img
        id="teddyImg"
        src="images/${teddies[state.teddy]}"
        alt="Cute teddy"

        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='block';
        "
      >

      <span style="display:none">
        🧸
      </span>

    </div>

  `;

}


/* =========================================
   PAGE DOTS
========================================= */

function dots() {

  return `

    <div class="progress">

      ${

        [1,2,3,4,5,6]

        .map(

          n => `

            <span
              class="dot ${
                n === state.page
                  ? "active"
                  : ""
              }"
            ></span>

          `

        )

        .join("")

      }

    </div>

  `;

}


/* =========================================
   PAGE SHELL
========================================= */

function pageShell(content) {

  app.innerHTML = `

    <section class="page">

      ${college()}

      <div class="card">

        ${content}

      </div>

      ${dots()}

    </section>

  `;

}


/* =========================================
   RENDER
========================================= */

function render() {

  if (state.page === 1) {

    render1();

  }

  if (state.page === 2) {

    render2();

  }

  if (state.page === 3) {

    render3();

  }

  if (state.page === 4) {

    render4();

  }

  if (state.page === 5) {

    render5();

  }

  if (state.page === 6) {

    render6();

  }


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}


/* =========================================
   PAGE 1
========================================= */

function render1() {

  pageShell(`

    ${teddyMarkup()}

    <div class="eyebrow">

      A little message for you

    </div>


    <h1>

      Hey, listen…

    </h1>


    <p class="message">

 timi lai DHerai important kura haru vannu xa plzz na mero bachaa ek baar suni halna 😥
😞 . plzz continue 😩 naa ......
. 💗

    </p>


    <div class="next-wrap">

      <button
        class="cute-btn"
        onclick="go(2)"
      >

        Continue 🌷

      </button>

    </div>

  `);

}


/* =========================================
   PAGE 2
========================================= */

function render2() {

  pageShell(`

    ${teddyMarkup()}

    <div class="eyebrow">

      From my heart

    </div>


    <h2>

      I owe you a real apology…😔

    </h2>


    <p class="message">

I know I made mistakes, and I know  simple “sorry” le ke pani hudai na 
ma timi lai dherai hurt gare ko xu  😞 , tiyo sabai mero mistake thiyo i know ,ma lai thaxa ki ma timi lai time dina sake na , but esko mkatalb yo thiyena ki mka timi sanga maya grthiyena or malai timro kadr thiyena , but ma dherai naraamro manxe xu malai thaxa , but yrr jasto pani xu timro bcahai xu ni yrr... malai aafno galti ko ehsaas vaihalyo yrr , ma ali late relise grxu sab kura 😞 
but you know naaa how much i love uhh ...   thaxa bhutku ma proove tw grna sakena aafno maarks le , bcha malai pahila laagthiyo ki ma rich and scucessful vai halxu ani timi tw automatically mi halxas but ma yo realise nai garena ki timi bina scucess kun kaam ko .... but i tried my best yrr .... but jun freedom malai chaiyeko thiyo mili halyo ab malai time ab koi aaudaina hamro beech na yrr 🥹:
I am sorry. thah xa bacha ki timi bina aajkal din raat rui rah ko xu 😢 ❤️

    </p>


    <button
      class="cute-btn"
      onclick="go(3)"
    >

      Next 💌

    </button>

  `);

}


/* =========================================
   PAGE 3
========================================= */

function render3() {

  pageShell(`

    ${teddyMarkup()}

    <div class="eyebrow">

      One honest question

    </div>


    <p class="message">

Aba pahila jasto khehi pani repeat hudaina yrr, ma aba lesson siki hale aba same mistake repeat gardina 😩.
this time ma tmro original asli wala 10 th cass wa sudarhan bane rw aako xu yrrr, main kura tw mistake reliase grnu honi yrr jun ma realise gari hale ko xu bchaaa, sooo

    </p>


    <div class="question">

      Can you forgive me? 🥺

    </div>


    <p
      id="noLine"
      class="small-note fade-text"
    >

      ${
        noLines[
          state.noClicks %
          noLines.length
        ]
      }

    </p>


    <div class="no-area">

      <button
        class="cute-btn green"
        onclick="yes(3)"
      >

        YES ❤️

      </button>


      <button
        id="noBtn"
        class="cute-btn secondary"
        onclick="noClick(3)"
      >

        NO 🥺

      </button>

    </div>


    <div class="counter">

      A tiny interactive apology •
      ${state.noClicks}
      little “no”s so far

    </div>

  `);

}


/* =========================================
   PAGE 4
========================================= */

function render4() {

  pageShell(`

    ${teddyMarkup()}


    <div class="eyebrow">

      One more chapter?

    </div>


    <div class="quote-list">

      ${

        comebackQuotes

        .map(

          q => `

            <div class="quote">

              ${q}

            </div>

          `

        )

        .join("")

      }

    </div>


    <div class="question">

      Can we be together once again? 💗

    </div>


    <p
      id="noLine"
      class="small-note fade-text"
    >

      ${
        noLines[
          (state.noClicks + 17)
          % noLines.length
        ]
      }

    </p>


    <div class="no-area">

      <button
        class="cute-btn green"
        onclick="yes(4)"
      >

        YES ❤️

      </button>


      <button
        id="noBtn"
        class="cute-btn secondary"
        onclick="noClick(4)"
      >

        NO 🥺

      </button>

    </div>

  `);

}


/* =========================================
   PAGE 5
========================================= */

function render5() {

  pageShell(`

    <div class="eyebrow">

      A little happy moment

    </div>


    <h2>

      yo hamro beech new chapter ho yr 🌸

    </h2>


    <div class="photo-grid">

      <div class="photo">

        Your Photo 1
        <br>
        📷

      </div>


      <div class="photo">

        College Photo
        <br>
        🏫

      </div>


      <div class="photo">

        Your Photo 2
        <br>
        📷

      </div>

    </div>


    <p class="message">

Thank you for hearing me bachaa. 
Aba pkkaa hamro beech ksailai ni aauna didina bacha .
Aba timro saaath kahile pani xordina bachaa.
now u see how much your bchaa love u.
we are together one again bachaa .
now time is to make memories without rushing.
I have learned from what happened.
Let's choose kindness.
Let's grow together.
And let's make this next chapter beautiful. 💗

    </p>


    <button
      class="cute-btn"
      onclick="go(6)"
    >

      Next ✨

    </button>

  `);

}


/* =========================================
   PAGE 6
========================================= */

function render6() {

  pageShell(`

    <div class="eyebrow">

      The last little message

    </div>


    <h2>

      Thank you for coming this far. 🌷

    </h2>


    <p class="message">

If you are smiling even a little,
then this tiny website has done its job.
I don't need a perfect answer.
I just want one honest conversation.
So… can we call?
Please call me when you're ready. ❤️

    </p>


    <a
      class="cute-btn call"
      href="tel:+9779706700764"
    >

      📞 Call Me

    </a>


   

   

  `);

}


/* =========================================
   NORMAL PAGE NAVIGATION
========================================= */

function go(n) {

  state.page = n;

  render();

}


/* =========================================
   YES BUTTON
========================================= */

function yes(fromPage) {

  const record = {

    page: fromPage,

    time: new Date().toISOString()

  };


  state.yesClicks.push(record);


  localStorage.setItem(

    "sorry_yes_clicks",

    JSON.stringify(
      state.yesClicks
    )

  );


  showToast(
    "YES clicked ❤️"
  );


  setTimeout(

    () => {

      go(fromPage + 1);

    },

    350

  );

}


/* =========================================
   NO BUTTON
========================================= */

function noClick(fromPage) {

  /*
    Every NO click:

    1. Increase NO count
    2. Change teddy
    3. Change emotional message
    4. Re-render page
    5. Move NO button
  */


  state.noClicks++;


  state.teddy =
    (state.teddy + 1) % 20;


  render();


  const btn =
    document.getElementById(
      "noBtn"
    );


  if (!btn) return;


  const area =
    btn.parentElement;


  const maxX =
    Math.max(
      0,
      area.clientWidth -
      btn.offsetWidth
    );


  const maxY =
    Math.max(
      0,
      area.clientHeight -
      btn.offsetHeight
    );


  let x =
    Math.random() *
    maxX;


  let y =
    Math.random() *
    maxY;


  /*
    Try not to put
    NO directly over YES.
  */

  if (
    Math.abs(
      x -
      area.clientWidth * 0.5
    ) < 80
  ) {

    x =
      (x + 160) %
      Math.max(1, maxX);

  }


  btn.style.left =
    `${x}px`;


  btn.style.top =
    `${y}px`;

}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(text) {

  toast.textContent =
    text;


  toast.classList.add(
    "show"
  );


  setTimeout(

    () => {

      toast.classList.remove(
        "show"
      );

    },

    1200

  );

}


/* =========================================
   MAKE FUNCTIONS AVAILABLE
   TO HTML ONCLICK
========================================= */

window.go = go;

window.yes = yes;

window.noClick = noClick;


/* =========================================
   START WEBSITE
========================================= */

render();
