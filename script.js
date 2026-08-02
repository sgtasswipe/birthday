const unlockDate = new Date(2026, 7, 3, 0, 0, 0);

const message = `
Hvis du læser dette så er ventetiden ovre :D 
Jeg ville lave noget lidt anderledes i år, da du også er blevet en tech snut 

meeen

nu er det tid til at åbne din anden gave... 

`.trim();

const giftButton = document.getElementById("giftButton");
const giftBox = document.getElementById("giftBox");
const giftContent = document.getElementById("giftContent");

const typewriter = document.getElementById("typewriter");

let index = 0;

function typeText() {

    if (index < message.length) {

        typewriter.textContent += message.charAt(index);

        index++;

        setTimeout(typeText, 45);

    }

}


function updateCountdown(){

    const now = new Date();

    const diff = unlockDate - now;

    if(diff <= 0){

        document.getElementById("status").textContent =
            "Gaven er klar <3 ";

        document.getElementById("days").textContent="00";
        document.getElementById("hours").textContent="00";
        document.getElementById("minutes").textContent="00";
        document.getElementById("seconds").textContent="00";

        giftButton.disabled = false;

     document.getElementById("status").textContent =
    "Du må nu åbne gaven ❤️";

clearInterval(timer);

return;

    }

    const days=Math.floor(diff/1000/60/60/24);

    const hours=Math.floor(diff/1000/60/60)%24;

    const minutes=Math.floor(diff/1000/60)%60;

    const seconds=Math.floor(diff/1000)%60;

    document.getElementById("days").textContent=
        String(days).padStart(2,"0");

    document.getElementById("hours").textContent=
        String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent=
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent=
        String(seconds).padStart(2,"0");

}

const timer = setInterval(updateCountdown, 1000);

updateCountdown();

giftButton.addEventListener("click", () => {

    giftButton.disabled = true;

    giftBox.classList.add("open");

    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({

            particleCount: 5,
            startVelocity: 30,
            spread: 360,
            ticks: 80,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

    setTimeout(() => {

        giftContent.classList.add("show");

        // Start the typewriter only now
        index = 0;
        typewriter.textContent = "";
        typeText();

        window.scrollTo({

            top: giftContent.offsetTop - 40,
            behavior: "smooth"

        });

    }, 1400);

});