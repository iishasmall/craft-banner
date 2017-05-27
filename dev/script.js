var ctaBtn;
var container;
var craftCup;
var craftCupResolve;
var craftCopyTxt;
var craftCopy1Txt;
var craftCopy2Txt;
var craftCta;
var bubbleContainer;
var bubble1;
var bubble2;
var bubble3;

bannerInit = function () {

    ctaBtn = document.getElementById("cta-btn");
    container = document.getElementById("container");
    craftCup = document.getElementById("craft-cup");
    craftCupResolve = document.getElementById("craft-cup-resolve");
    craftCopyTxt = document.getElementById("craft-f4-copy");
    craftCopy1Txt = document.getElementById("craft-f5-copy1");
    craftCopy2Txt = document.getElementById("craft-f5-copy2");
    craftCta = document.getElementById("craft-cta");
    bubbleContainer = document.getElementById("bubble-container");
    bubble1 = document.getElementById("bubble1");
    bubble2 = document.getElementById("bubble2");
    bubble3 = document.getElementById("bubble3");

    anim();
}

anim = function () {
    bannerSetUp();
}


function bannerSetUp() {

    TweenMax.set(craftCupResolve, {
        position: "absolute",
        top: "-300px",
        left: "-150px",
        scale: .18,
        opacity: 0,
    });

    TweenMax.set(craftCup, {
        position: "absolute",
        top: "-30px",
        left: "-80px",
        opacity: 1,
    });

    TweenMax.set(craftCopyTxt, {
        position: "absolute",
        top: "-380px",
        left: "-450px",
        scale: .25,
        opacity: 0,
    });

    TweenMax.set(craftCopy1Txt, {
        position: "absolute",
        top: "-130px",
        left: "-310px",
        scale: .5,
        opacity: 1,
    });

    TweenMax.set(craftCopy2Txt, {
        position: "absolute",
        top: "-130px",
        left: "300px",
        scale: .5,
        opacity: 1,
    });

    TweenMax.set(craftCta, {
        position: "absolute",
        top: "170px",
        left: "20px",
        scale: .5,
        opacity: 0

    });

    TweenMax.set(bubble1, {
        position: "absolute",
        top: "80px",
        left: "10px"
    });

    TweenMax.set(bubble2, {
        position: "absolute",
        top: "80px",
        left: "20px",
        scale: .5,
    });

    TweenMax.set(bubble3, {
        position: "absolute",
        top: "80px",
        left: "30px",
        scale: .7,
    });

    initAnimation();

}


function initAnimation() {

    TweenMax.delayedCall(.5, frame1)
    TweenMax.delayedCall(5, frame2);
    TweenMax.delayedCall(7, frame3);
    TweenMax.delayedCall(8, frame4);
    TweenMax.delayedCall(9.5, frame5);
}



function frame1() {
    TweenMax.to(craftCup, 2.5, { scale: .5, bezier: { curviness: 1.25, values: [{ left: "-150px", top: "-370px" }, { left: "-40px", top: "-390px" }] }, delay: 1.1 });
    TweenMax.to(craftCopyTxt, .25, { opacity: 1, delay: 3 });
}

function frame2() {
    TweenMax.to(craftCopyTxt, .25, { opacity: 0 });
    TweenMax.to(craftCup, 1, { scale: .18, left: "-150px", top: "-300px" });
}

function frame3() {
    TweenMax.to(craftCopy1Txt, .25, { left: "-100px" });

}

function frame4() {
    TweenMax.to(craftCopy1Txt, .25, { left: "-155px" });
    TweenMax.to(craftCopy2Txt, .25, { left: "-155px" });
}

function frame5() {
    TweenMax.to(craftCta, .25, { opacity: 1 });
    TweenMax.to(craftCup, .25, { opacity: 0 });
    TweenMax.to(bubbleContainer, .25, { opacity: 1 });

    // fizzy bubbles
    TweenMax.to(bubble1, 2, {
        opacity: 0,
        bezier: {
            curviness: 2,
            values: [{ left: "0px", top: "10px" },
            { left: "-10px", top: "-5px" },
            { left: "-5px", top: "-15px" }]
        },
        repeat: -1, delay: 1
    });

    TweenMax.to(bubble2, 2.75, {
        opacity: 0,
        bezier: {
            curviness: 2,
            values: [{ left: "0px", top: "10px" },
            { left: "-20px", top: "-5px" },
            { left: "55px", top: "-15px" }]
        },
        repeat: -1, delay: 1.5
    });



    TweenMax.to(bubble3, 2.5, {
        opacity: 0,
        bezier: {
            curviness: 3,
            values: [{ left: "0px", top: "10px" },
            { left: "-20px", top: "-5px" },
            { left: "25px", top: "-15px" }]
        },
        repeat: -1, delay: 1.75
    });

    TweenMax.to(craftCupResolve, .25, { opacity: 1 });
}

