init = function () {
    setTimeout(function () {
        allAnimations();
    }, 200);
}

let cont = 0;

function allAnimations() {
    var setTimer = 250;
    var animCount = 0;
    var animTimer = setInterval(function () { theTimer() }, setTimer),

        fade = document.getElementById('fade'),

        bg1 = document.getElementById('bg1'),
        bg2 = document.getElementById('bg2'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),
        copy4 = document.getElementById('copy4'),
        cta = document.getElementById('cta'),
        legal = document.getElementById('legal'),
        logo = document.getElementById('logo');

    //  timings

    function theTimer() {
        let timer = 0;

        function second(time) {
            let x = Math.floor(time * 4)
            timer = timer + x;
            return timer
        }

        function contTimer(animCount) {
            let total = animCount * setTimer - 1000
            return `Time banner ${total / 1000}s`
        }

        if (animCount == second(0)) {
            // Transition start
            // copy1.setAttribute('class', 'up-1');
            // copy2.setAttribute('class', 'up-1');
            // copy3.setAttribute('class', 'up-1');
            // copy4.setAttribute('class', 'up-1'); 
            cta.setAttribute('class', 'left-1')
            // Transition end

            bg1.setAttribute('class', 'fade-in');
            logo.setAttribute('class', 'fade-in');
            fade.setAttribute('class', 'transition-2 temp05 fade-out');
        } else if (animCount == second(0.25)) {
            copy1.setAttribute('class', 'transition-2 temp05 fade-in');
        } else if (animCount == second(2)) {
            copy1.setAttribute('class', 'transition-2 temp02 fade-out');
        } else if (animCount == second(0.25)) {
            copy2.setAttribute('class', 'transition-2 temp05 fade-in');
        } else if (animCount == second(3)) {
            // bg1.setAttribute('class', 'transition-2 temp02 fade-out');
            bg2.setAttribute('class', 'transition-2 temp02 fade-in');
            copy2.setAttribute('class', 'transition-2 temp02 fade-out');
        } else if (animCount == second(0.25)) {
            copy3.setAttribute('class', 'transition-2 temp05 fade-in');
        } else if (animCount == second(3)) {
            copy3.setAttribute('class', 'transition-2 temp02 fade-out');
        } else if (animCount == second(0.25)) {
            copy4.setAttribute('class', 'transition-2 temp05 fade-in');
        } else if (animCount == second(0.75)) {
            cta.setAttribute('class', 'transition-txt-2 temp05 fade-in');
            legal.setAttribute('class', 'transition-2 temp05 fade-in');
        } else if (animCount == second(4)) { // alterar o tempo para o looping
            clearInterval(animTimer);

            // ativa looping
            // initBanner()
        }
        animCount++;
    }

    initBanner = () => {
        if (cont < 2) {

            allAnimations()
            
            // bg1.setAttribute('class', 'default');
            bg2.setAttribute('class', 'default');
            copy3.setAttribute('class', 'transition-2 temp02 fade-out');
            cta.setAttribute('class', 'transition-2 temp02 fade-out');

            cont++
        } else {
            return
        }
    }
}