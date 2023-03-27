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
  gsap.set('#footer', { autoAlpha: 0.9 });

  gsap.set('#copy1', { autoAlpha: 0 });
  gsap.set('#copy2', { autoAlpha: 0 });
  gsap.set('#copy3', { autoAlpha: 0 });

  gsap.set('#dulce', { autoAlpha: 1 });
  gsap.set('#mango', { autoAlpha: 1 });
  gsap.set('#strawberry', { autoAlpha: 1 });
  gsap.set('#vanilla', { autoAlpha: 1 });
  gsap.set('#cookies', { autoAlpha: 1 });

  gsap.set('#maodulce', { autoAlpha: 0 });
  gsap.set('#maomango', { autoAlpha: 0 });
  gsap.set('#maostrawberry', { autoAlpha: 0 });
  gsap.set('#maovanilla', { autoAlpha: 0 });
  gsap.set('#maocookies', { autoAlpha: 0 });

  gsap.set('#taca', { x: -300, autoAlpha: 1 });

  gsap.set('#cta', { autoAlpha: 1 });
  gsap.set('#seta', { x: 0, autoAlpha: 1 });

  gsap.set('#logo', { autoAlpha: 1 });
  gsap.set('#logo2', { autoAlpha: 0 });
}

function startAnimation() {
  var a = 0; // Tempo de animação

  //Animação do banner
  //Step 1
  a += 0.25;
  gsap.to('#copy1', 0.5, {
    autoAlpha: 1,
    delay: a,
  });

  //Step 2
  a += 1.5;
  gsap.to('#maodulce', 0.25, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#maomango', 0.25, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#maostrawberry', 0.25, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#maovanilla', 0.25, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#maocookies', 0.25, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });

  //Step 2 movimento
  a += 0.5;
  gsap.to('#maodulce', 0.75, {
    x: -150,
    y: -10,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#dulce', 0.75, {
    x: -150,
    y: -10,
    ease: 'power2.easeOut',
    delay: a,
  });

  gsap.to('#maomango', 0.75, {
    x: 160,
    y: 10,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#mango', 0.75, {
    x: 160,
    y: 10,
    ease: 'power2.easeOut',
    delay: a,
  });

  gsap.to('#maocookies', 1, {
    x: -250,
    y: -10,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#cookies', 1, {
    x: -250,
    y: -10,
    ease: 'power2.easeOut',
    delay: a,
  });

  gsap.to('#maostrawberry', 1.25, {
    x: -150,
    y: -15,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#strawberry', 1.25, {
    x: -150,
    y: -15,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#maovanilla', 1.25, {
    x: 150,
    y: -20,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#vanilla', 1.25, {
    x: 150,
    y: -20,
    ease: 'power2.easeOut',
    delay: a,
  });

  //Step 3
  a += 0.5;
  gsap.to('#copy1', 0.25, {
    autoAlpha: 0,
    ease: 'power2.easeOut',
    delay: a,
  });
  a += 0.5;
  gsap.to('#copy2', 0.5, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#taca', 0.75, {
    x: 0,
    ease: 'power2.easeOut',
    delay: a,
  });

  // Arrumar potes
  gsap.to('#dulce', { autoAlpha: 0, delay: a });
  gsap.to('#mango', { autoAlpha: 0, delay: a });
  gsap.to('#cookies', { autoAlpha: 0, delay: a });
  gsap.to('#vanilla', { autoAlpha: 0, delay: a });
  gsap.to('#strawberry', { autoAlpha: 0, delay: a });

  a += 0.5;
  gsap.to('#dulce', { scale: 1.3, x: 0, y: 0, delay: a });
  gsap.to('#mango', { scale: 1.3, x: 0, y: 0, delay: a });
  gsap.to('#cookies', { scale: 1.3, x: 0, y: 0, delay: a });
  gsap.to('#vanilla', { scale: 1.3, x: 0, y: 0, delay: a });
  gsap.to('#strawberry', { scale: 1.3, x: 0, y: 0, delay: a });

  // Step 4
  a += 2;
  gsap.to('#copy2', 0.25, {
    autoAlpha: 0,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#taca', 0.25, {
    autoAlpha: 0,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#dulce', {
    scale: 1,
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#mango', {
    scale: 1,
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#cookies', {
    scale: 1,
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#vanilla', {
    scale: 1,
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
  gsap.to('#strawberry', {
    scale: 1,
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });

  a += 0.5;
  gsap.to('#logo2', 0.5, {
    autoAlpha: 1,
    ease: 'power2.easeOut',
    delay: a,
  });
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
