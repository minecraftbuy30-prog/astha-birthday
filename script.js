/* =========================
   PARTICLES
========================= */

const particles =
    document.getElementById("particles");

for (let i = 0; i < 120; i++) {

    const p =
        document.createElement("div");

    p.className = "particle";

    p.style.left =
        Math.random() * 100 + "%";

    p.style.animationDuration =
        6 + Math.random() * 14 + "s";

    p.style.animationDelay =
        Math.random() * 10 + "s";

    p.style.opacity =
        Math.random();

    particles.appendChild(p);
}


/* =========================
   CURSOR / TOUCH LIGHT
========================= */

const cursor =
    document.getElementById("cursorGlow");

document.addEventListener(
    "mousemove",
    function(e) {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

    }
);

document.addEventListener(
    "touchmove",
    function(e) {

        const touch =
            e.touches[0];

        cursor.style.left =
            touch.clientX + "px";

        cursor.style.top =
            touch.clientY + "px";

    }
);


/* =========================
   GOLD PARTICLE EXPLOSION
========================= */

function explosion(x, y) {

    for (let i = 0; i < 35; i++) {

        const p =
            document.createElement("div");

        p.style.position = "fixed";

        p.style.left = x + "px";
        p.style.top = y + "px";

        p.style.width = "4px";
        p.style.height = "4px";

        p.style.borderRadius = "50%";

        p.style.background =
            i % 2 === 0
                ? "#d8a83e"
                : "#ffe9a6";

        p.style.boxShadow =
            "0 0 12px #d8a83e";

        p.style.pointerEvents =
            "none";

        p.style.zIndex = "500";

        document.body.appendChild(p);

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            60 +
            Math.random() * 180;

        const x2 =
            Math.cos(angle) *
            distance;

        const y2 =
            Math.sin(angle) *
            distance;

        p.animate(
            [
                {
                    transform:
                        "translate(0,0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x2}px,${y2}px)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    700 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.1,.8,.3,1)"
            }
        ).onfinish = () => {
            p.remove();
        };
    }
}


/* =========================
   CLICK EFFECT
========================= */

document.addEventListener(
    "click",
    function(e) {

        explosion(
            e.clientX,
            e.clientY
        );

    }
);


/* =========================
   INTRO
========================= */

const enter =
    document.getElementById("enterBtn");

const intro =
    document.getElementById("intro");

const main =
    document.getElementById("main");

enter.addEventListener(
    "click",
    function() {

        intro.classList.add("hide");

        main.classList.add("show");

        startMusic();

        setTimeout(
            () => intro.remove(),
            1300
        );

    }
);


/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {

    const now =
        new Date();

    let year =
        now.getFullYear();

    let birthday =
        new Date(
            year,
            9,
            15,
            0,
            0,
            0
        );

    if (now > birthday) {

        birthday =
            new Date(
                year + 1,
                9,
                15
            );

    }

    const difference =
        birthday - now;

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60) % 24
        );

    const minutes =
        Math.floor(
            difference /
            (1000 * 60) % 60
        );

    const seconds =
        Math.floor(
            difference /
            1000 % 60
        );

    document.getElementById("days")
        .textContent =
        String(days).padStart(2,"0");

    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2,"0");

    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2,"0");
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================
   TYPEWRITER
========================= */

const message =
    "May this new chapter of your life bring you countless beautiful moments, unforgettable memories and reasons to smile. Keep shining, keep growing and enjoy every moment of your special day.";

let messageIndex = 0;

function typeMessage() {

    if (
        messageIndex <
        message.length
    ) {

        document.getElementById(
            "typing"
        ).textContent +=
            message.charAt(
                messageIndex
            );

        messageIndex++;

        setTimeout(
            typeMessage,
            35
        );
    }
}


/* =========================
   SCROLL REVEALS
========================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },
        {
            threshold: .15
        }
    );

revealElements.forEach(
    element =>
        observer.observe(element)
);


/* =========================
   GIFT
========================= */

function openGift() {

    const x =
        window.innerWidth / 2;

    const y =
        window.innerHeight / 2;

    for (let i = 0; i < 8; i++) {

        setTimeout(
            function() {

                explosion(
                    Math.random() *
                    window.innerWidth,

                    Math.random() *
                    window.innerHeight *
                    .7
                );

            },
            i * 150
        );

    }

    document.getElementById(
        "finalReveal"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   MAKE A WISH
========================= */

function birthdaySurprise() {

    for (let i = 0; i < 12; i++) {

        setTimeout(
            function() {

                explosion(
                    Math.random() *
                    window.innerWidth,

                    Math.random() *
                    window.innerHeight *
                    .7
                );

            },
            i * 120
        );
    }

    document.getElementById(
        "message"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   FINAL EXPLOSION
========================= */

function finalExplosion() {

    for (let i = 0; i < 30; i++) {

        setTimeout(
            function() {

                explosion(
                    Math.random() *
                    window.innerWidth,

                    Math.random() *
                    window.innerHeight
                );

            },
            i * 80
        );

    }
}


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById(
        "musicButton"
    );

let playing = false;

function startMusic() {

    music.play()
        .then(function() {

            playing = true;

        })
        .catch(function() {

            playing = false;

        });

}

musicButton.addEventListener(
    "click",
    function() {

        if (playing) {

            music.pause();

            playing = false;

        } else {

            music.play();

            playing = true;

        }

    }
);


/* =========================
   START TYPING
========================= */

setTimeout(
    typeMessage,
    1800
);


/* =========================
   RANDOM AMBIENT BURSTS
========================= */

setInterval(
    function() {

        if (
            document.visibilityState ===
            "visible"
        ) {

            explosion(
                Math.random() *
                window.innerWidth,

                Math.random() *
                window.innerHeight
            );

        }

    },
    7000
); 