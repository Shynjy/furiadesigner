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
  gsap.set('#copy2', { rotationX: 270, autoAlpha: 1 });
  gsap.set('#copy3', { rotationY: 270, autoAlpha: 1 });
  gsap.set('#copy4', { y: 50, autoAlpha: 0 });

  gsap.set('#cta', { y: 50, autoAlpha: 0 });
}

function mouseOver() {
  let banner = document.getElementById('banner');

  function mouseEnter(e) {
    e.preventDefault();
    gsap.to('#cta', 0.3, { scale: 1.1 }, '+=0');
  }

  function mouseLeave(e) {
    e.preventDefault();
    gsap.to('#cta', 0.3, { scale: 1 }, '+=0');
  }

  banner.addEventListener('mouseenter', mouseEnter, false);
  banner.addEventListener('mouseleave', mouseLeave, false);
}

function startAnimation() {
  var a = 0; // Tempo de animação

  //Animação do banner
  a += 2;
  gsap.to('#copy1', 0.75, { rotationX: 90, ease: Quad.easeOut, delay: a });
  a += 0.5;
  gsap.to('#copy1', 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a });

  a += 0.1;
  gsap.to('#copy2', 0.75, { rotationX: 360, ease: Quad.easeOut, delay: a });

  a += 2;
  gsap.to('#copy2', 0.75, { rotationY: 90, ease: Quad.easeOut, delay: a });
  a += 0.5;
  gsap.to('#copy2', 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a });

  a += 0.1;
  gsap.to('#copy3', 1, { rotationY: 360, ease: Quad.easeOut, delay: a });

  a += 1;
  gsap.to('#copy3', 0.5, { autoAlpha: 0, ease: Quad.easeOut, delay: a });

  a += 0.5;
  gsap.to('#copy4', 0.5, { y: 0, autoAlpha: 1, ease: Quad.easeOut, delay: a });
  a += 0.15;
  gsap.to('#cta', 0.5, { y: 0, autoAlpha: 1, ease: Quad.easeOut, delay: a });

  gsap.to('#cta', 0.25, { scale: 1, onComplete: mouseOver, delay: a });

  // if (count <= 1) {
  //   a += 4;

  //   console.log(a);
  //   gsap.to("#banner", 0.25, { autoAlpha: 0, delay: a});

  //   gsap.delayedCall(a + 0.5, function () {
  //     resetBanner();
  //     adVisible();
  //   });
  // }

  // count++;
}
