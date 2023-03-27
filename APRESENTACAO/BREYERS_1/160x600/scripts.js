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
  gsap.set('#bg2', { scale: 1.2, autoAlpha: 0 });
  gsap.set('#bg3', { autoAlpha: 1 });
  gsap.set('#bg4', { autoAlpha: 0 });
  gsap.set('#footer', { autoAlpha: 1 });

  gsap.set('#box', { autoAlpha: 1 });

  gsap.set('#ball', {
    scale: 1.2,
    x: 32,
    y: -110,
    rotation: 1,
    transformOrigin: 'center',
    autoAlpha: 1,
  });
  gsap.set('#spoon', {
    rotation: 90,
    x: 55,
    y: -170,
    scale: 1.3,
    autoAlpha: 1,
  });
  gsap.set('#shadow', {
    rotation: 60,
    x: 55,
    y: -170,
    scale: 1.3,
    autoAlpha: 1,
  });

  gsap.set('#copy1', { autoAlpha: 1 });
  gsap.set('#copy2', { autoAlpha: 0 });
  gsap.set('#copy3', { autoAlpha: 1 });
  gsap.set('#copy4', { autoAlpha: 0 });

  gsap.set('#cta', { autoAlpha: 1 });
  gsap.set('#seta', { x: 0, autoAlpha: 1 });

  gsap.set('#logo', { autoAlpha: 1 });
  gsap.set('#logo2', { autoAlpha: 0 });
}

function startAnimation() {
  var a = 0; // Tempo de animação

  //Animação do banner
  //Step 1
  a += 1.5;
  gsap.to('#bg2', 0.5, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#bg2', 2, {
    scale: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  a += 0.25;
  gsap.to('#copy2', 0.5, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });

  //Step 2
  a += 2;
  gsap.to('#copy2', 0.5, {
    autoAlpha: 0,
    ease: 'power2.easeOut',
    delay: a,
  });
  a += 0.5;
  gsap.to('#ball', 2, {
    scale: 1.45,
    rotation: 90,
    delay: a,
  });
  gsap.to('#ball', 2.75, {
    y: 720,
    delay: a,
  });
  gsap.to('#spoon', 2.75, {
    y: 600,
    delay: a,
  });
  gsap.to('#shadow', 2.75, {
    y: 600,
    delay: a,
  });
  a += 0.25;
  gsap.to('#box', 1.75, {
    css: { height: '600px' },
    delay: a,
  });
  gsap.to('#shadow', 1.5, {
    x: 650,
    delay: a + 1.75,
  });

  //Step 3
  a += 3;
  gsap.to('#bg4', 0.5, {
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
  gsap.to('#copy4', 1, {
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
