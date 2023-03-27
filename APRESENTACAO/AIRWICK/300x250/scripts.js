window.onload = function () {
  resetBanner();
  adVisible();
};

function adVisible() {
  gsap.to("#banner", 0.25, {
    autoAlpha: 1,
    delay: 0.25,
    onComplete: startAnimation,
  });
}

// Variável para o lopping
let count = 0;

function resetBanner() {
  gsap.set("#bg1", { scale: 1.4, autoAlpha: 1 });
  gsap.set("#bg2", { autoAlpha: 1 });
  gsap.set("#bg3", { autoAlpha: 0 });
  gsap.set("#moldura", { autoAlpha: 0 });

  gsap.set("#copy1", { scale: 1.4, autoAlpha: 0 });
  gsap.set("#copy2", { x: -20, y: -20, scale: 1.2, autoAlpha: 0 });
  gsap.set("#copy3", { autoAlpha: 0 });

  gsap.set("#legal1", { autoAlpha: 0 });
  gsap.set("#legal2", { autoAlpha: 0 });

  gsap.set("#cta", { x:-50, autoAlpha: 0 });

  gsap.set("#logo", { x: 0, y: 0, scale: 1.4, autoAlpha: 0 });

  gsap.set("#selo", { scale: 0.7, rotation: -90, autoAlpha: 0 });
}

function startAnimation() {
  var a = 0; // Tempo de animação

  //Animação do banner
  gsap.to("#bg1", 1.5, { scale: 1, ease: Quad.easeInOut, delay: a, });

  a += 0.25;
  gsap.to("#copy1", 1, { autoAlpha: 1, scale: 1, ease: Quad.easeInOut, delay: a, });
  gsap.to("#moldura", 1, { autoAlpha: 0.6, scale: 1, ease: Quad.easeInOut, delay: a, });

  a += 0.5;
  gsap.to("#logo", 0.75, { autoAlpha: 1, scale: 1, ease: Quad.easeInOut, delay: a, });

  a += 3; //troca de step
  gsap.to("#logo", 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a, });
  gsap.to("#copy1", 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a, });
  gsap.to("#bg1", 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a, });
  gsap.to("#bg3", { autoAlpha: 1, delay: a, });

  a += 0.5;
  gsap.to("#copy2", 1, { x: 0, y: 0, autoAlpha: 1, scale: 1, ease: Quad.easeInOut, delay: a, });
  a += 0.5;
  gsap.to("#selo", 1, { autoAlpha: 0.9, rotation: 1, scale: 1, ease: Quad.easeOut, delay: a, });
  a += 0.25;
  gsap.to("#cta", 0.75, { x: 0, autoAlpha: 1, ease: Quad.easeOut, delay: a, });
  a += 0.25;
  gsap.to("#legal1", 0.75, { autoAlpha: 1, ease: Quad.easeOut, delay: a, });

  gsap.to("#logo", { scale: 1.3, x: -190, y: -145, ease: Quad.easeOut, delay: a, });

  a += 2.5; //troca de step
  gsap.to("#bg2", 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a, });
  gsap.to("#selo", 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a, });
  gsap.to("#copy2", 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a, });
  gsap.to("#legal1", 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a, });

  a += 0.5;
  gsap.to("#legal2", 0.75, { autoAlpha: 1, ease: Quad.easeOut, delay: a, });
  a += 0.25;
  gsap.to("#logo", 0.75, { autoAlpha: 1, scale: 0.95, ease: Quad.easeInOut, delay: a, });
  a += 0.75;
  gsap.to("#copy3", 1, { autoAlpha: 1, ease: Quad.easeOut, delay: a, });


  // if (count <= 1) {
  //   a += 4;

  //   console.log(a);

  //   gsap.delayedCall(a + 0.5, function () {
  //     resetBanner();
  //     adVisible();
  //   });
  // }

  // count++;
}
