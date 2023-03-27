window.onload = function () {
  resetBanner();
  adVisible();
};

function adVisible() {
  gsap.to('#banner', 0.25, {
    autoAlpha: 1,
    delay: 0.25,
    onComplete: startAnimation,
  });
}

// Variável para o lopping
let count = 0;

function resetBanner() {
  gsap.set('#bg1', { autoAlpha: 1 });
  gsap.set('#bg2', { autoAlpha: 1 });
  gsap.set('#bg3', { autoAlpha: 0 });
  gsap.set('#footer', { autoAlpha: 1 });

  gsap.set('#box', { width: 0, autoAlpha: 1 });

  gsap.set('#ball', {
    x: -180,
    y: 60,
    scale: 1.1,
    rotation: 1,
    transformOrigin: 'center',
    autoAlpha: 1,
  });
  gsap.set('#spoon', { x: -200, y: 65, scale: 1.1, autoAlpha: 1 });
  gsap.set('#shadow', { x: -200, y: 75, scale: 1.1, autoAlpha: 0.9 });

  gsap.set('#pack', { x: -37, autoAlpha: 1 });

  gsap.set('#copy1', { autoAlpha: 1 });
  gsap.set('#copy2', { autoAlpha: 1 });
  gsap.set('#copy3', { y: 20, autoAlpha: 0 });

  gsap.set('#cta', { autoAlpha: 1 });
  gsap.set('#seta', { x: 0, autoAlpha: 1 });

  gsap.set('#logo', { autoAlpha: 1 });
  gsap.set('#logo2', { autoAlpha: 0 });

  gsap.set('#smoke-wrap1', { autoAlpha: 0 });
  gsap.set('#smoke-wrap2', { autoAlpha: 0 });
}

function startAnimation() {
  var a = 0; // Tempo de animação

  //Animação do banner
  //Step 1
  a += 0.75;
  gsap.to('#pack', 0.5, {
    x: 300,
    ease: 'power2.easeOut',
    delay: a,
  });

  // //Step 2
  a += 2;
  gsap.to('#copy1', 0.5, {
    autoAlpha: 0,
    ease: 'power2.easeOut',
    delay: a,
  });
  a += 0.5;
  gsap.to('#ball', 2, {
    scale: 1.4,
    rotation: 90,
    delay: a,
  });
  gsap.to('#ball', 2.75, {
    x: 400,
    y: 50,
    delay: a,
  });
  gsap.to('#spoon', 2.5, {
    x: 320,
    y: 55,
    delay: a,
  });
  gsap.to('#shadow', 2.5, {
    x: 320,
    y: 55,
    delay: a,
  });
  a += 0.5;
  gsap.to('#box', 1.75, {
    css: { width: '350px' },
    delay: a,
  });
  gsap.to('#shadow', 1.5, {
    x: 370,
    delay: a + 1.75,
  });

  // // //Step 3
  a += 3;
  gsap.to('#smoke-wrap1', 0.25, {
    autoAlpha: 0.5,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#smoke-wrap2', 0.25, {
    autoAlpha: 0.5,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#bg3', 0.5, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#logo2', 0.5, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  a += 0.25;
  gsap.to('#copy3', 1, {
    y: 0,
    autoAlpha: 1,
    delay: a,
  });
  a += 0.75;
  gsap.to('#seta', 0.2, { x: 5, ease: 'power2.easeOut', delay: a });
  a += 0.2;
  gsap.to('#seta', 0.2, { x: 0, ease: 'power2.easeOut', delay: a });
  a += 0.2;
  gsap.to('#seta', 0.2, { x: 5, ease: 'power2.easeOut', delay: a });
  a += 0.2;
  gsap.to('#seta', 0.2, { x: 0, ease: 'power2.easeOut', delay: a });

  // if (count <= 1) {
  //   a += 4;

  //   console.log(a);
  //   gsap.to('#banner', 0.25, { autoAlpha: 0, delay: a });

  //   gsap.delayedCall(a + 0.5, function () {
  //     resetBanner();
  //     adVisible();
  //   });
  // }

  // count++;
}
