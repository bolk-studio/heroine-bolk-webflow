import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import Hero from "./Hero";

gsap.registerPlugin(SplitText);

function createCanvas() {
  let isFirstSession = true;

  function first_launch_site_sound() {
    if (isFirstSession) {
      play_audio();
    }
  }

  gsap.set('.hero-ct', { height: window.innerHeight });
  gsap.set('html,body', { overflow: 'hidden' });

  window.addEventListener('resize', () => {
    gsap.set('.hero-ct', { height: window.innerHeight });
  });

  //SCENE
  const scene = new Hero({
    dom: document.getElementById('hero-canvas'),
  });
  scene.start();

  let currentUrl = window.location.origin

  if (window.sessionStorage.getItem('firstload') == null || currentUrl == 'https://webflow.com') {
    isFirstSession = true;

    var tl = gsap.timeline();
    tl.to(".hero-loader__txt span", { height: '100%', duration: 2 });
    tl.to('.hero-loader', { opacity: 0, duration: .5 });
    tl.add('endload')
    tl.to(scene.ringMesh.material, { opacity: .5, delay: 1, duration: 2 }, 'endload')
    tl.to(scene.ringMesh.position, { y: 0, duration: 2 }, 'endload')
    tl.to(scene.clouds.material, { opacity: 1, duration: 2 }, 'endload-=0.5')
      .add(() => {
        for (let i = 0; i < 10; i++) {
          scene.updateSingleCloud(2.5, i, i * 0.3, 2);
        }

        for (let i = 10; i < 20; i++) {
          scene.updateSingleCloud(2.5, i, (i - 10) * 0.2, 2);
        }

        for (let i = 20; i < 30; i++) {
          scene.updateSingleCloud(2.5, i, (i - 20) * 0.1, 2);
        }
      }, 'endload-=0.5');


    window.sessionStorage.setItem('firstload', 'done');

  } else {
    isFirstSession = false;

    gsap.set('.hero-loader', { opacity: 0 })

    gsap.set('html,body', { overflow: 'initial' });

    scene.circle.init();
    scene.cone.init();
    scene.donut.init();
    scene.halfcircle.init();

    for (let i = 0; i < 10; i++) {
      scene.updateSingleCloud(8, i, i * 0.05, 3);
    }

    for (let i = 10; i < 20; i++) {
      scene.updateSingleCloud(8, i, (i - 10) * 0.05, 3);
    }

    for (let i = 20; i < 30; i++) {
      scene.updateSingleCloud(8, i, (i - 20) * 0.05, 3);
    }

    gsap.to(scene.clouds.material, { opacity: 0, duration: 1, delay: 2.2, ease: "power2.inOut" });
    gsap.to(scene.ringMesh.material, { opacity: 0, duration: 2 })
    gsap.to(scene.backgroundMesh.material, { opacity: 0, duration: 2, delay: .125, ease: "power2.inOut" })
    gsap.to(scene.clouds.position, { y: "+=200", duration: 3, ease: "power2.inOut" });
    gsap.to(scene.mainscene.position, {
      y: window.innerHeight,
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => {
        scene.clouds.material.dispose();
        scene.backgroundMesh.material.dispose();
      }
    });
    gsap.to(scene.gmaterial.uniforms.alpha, { value: 0, ease: "power2.inOut", delay: 2, duration: 2 })
    gsap.to(scene.materialTemple, { opacity: 1, duration: 3, delay: 2 })
    gsap.set('.hero-enter', { display: 'none' });

    let heroHome = gsap.timeline({ delay: 0.5, ease: "power1.inOut" });
    heroHome
      .to("[opacity-null]", {
        opacity: 1,
        duration: 1
      })
      .to("[logo='home-loader']", {
        opacity: 0,
        duration: 0.5
      })
      .from("[overline='home-hero']", { y: "300rem", duration: 1 }, "<50%")
      .from("[heading='home-hero']", { y: "500rem", duration: 1 }, "<")
      .from("[text='home-hero']", { y: "700rem", duration: 1 }, "<5%");

    //HERO TEXT
    let spTitle = new SplitText('.hero-bottom__title', { type: "chars" });
    let spSub = new SplitText('.hero-bottom__sub', { type: "chars" });
    let spText = new SplitText('.hero-bottom__text', { type: "lines" });


    let heroTextTL = gsap.timeline({
      onStart: () => {
        gsap.set('.hero-bottom', { opacity: '1', pointerEvents: 'all' });
      }
    });

    heroTextTL
      .add('start')
      .from(spTitle.chars, {
        delay: 2.5,
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.05
        }
      }, 'start')
      .from(spSub.chars, {
        delay: 2.5,
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.05
        }
      }, 'start')
      .from(spText.lines, {
        delay: 3.5,
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.05
        }
      }, 'start');
  }

  var tlHover = gsap.timeline({
    paused: true,

  });

  tlHover.to(scene.circleMesh.scale, {
    x: () => {
      return scene.ringWidth;
    },
    y: () => {
      return scene.ringWidth;
    },
  });

  document.querySelector('.hero-enter').addEventListener('mouseenter', () => {
    tlHover.play()
  });

  document.querySelector('.hero-enter').addEventListener('mouseleave', () => {
    tlHover.reverse()
  });

  window.addEventListener('resize', () => {
    tlHover.invalidate();
  });

  document.querySelector('.hero-enter').addEventListener('click', () => {
    first_launch_site_sound();

    gsap.set('html,body', { overflow: 'initial' });

    scene.circle.init();
    scene.cone.init();
    scene.donut.init();
    scene.halfcircle.init();

    for (let i = 0; i < 10; i++) {
      scene.updateSingleCloud(8, i, i * 0.05, 3);
    }

    for (let i = 10; i < 20; i++) {
      scene.updateSingleCloud(8, i, (i - 10) * 0.05, 3);
    }

    for (let i = 20; i < 30; i++) {
      scene.updateSingleCloud(8, i, (i - 20) * 0.05, 3);
    }

    gsap.to(scene.clouds.material, { opacity: 0, duration: 1, delay: 2.2, ease: "power2.inOut" });
    gsap.to(scene.ringMesh.material, { opacity: 0, duration: 2 })
    gsap.to(scene.backgroundMesh.material, { opacity: 0, duration: 2, delay: .125, ease: "power2.inOut" })
    gsap.to(scene.clouds.position, { y: "+=200", duration: 3, ease: "power2.inOut" });
    gsap.to(scene.mainscene.position, {
      y: window.innerHeight,
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => {
        scene.clouds.material.dispose();
        scene.backgroundMesh.material.dispose();
      }
    });
    gsap.to(scene.gmaterial.uniforms.alpha, { value: 0, ease: "power2.inOut", delay: 2, duration: 2 })
    gsap.to(scene.materialTemple, { opacity: 1, duration: 3, delay: 2 })
    gsap.set('.hero-enter', { display: 'none' });

    let heroHome = gsap.timeline({ delay: 0.5, ease: "power1.inOut" });
    heroHome
      .to("[opacity-null]", {
        opacity: 1,
        duration: 1
      })
      .to("[logo='home-loader']", {
        opacity: 0,
        duration: 0.5
      })
      .from("[overline='home-hero']", { y: "300rem", duration: 1 }, "<50%")
      .from("[heading='home-hero']", { y: "500rem", duration: 1 }, "<")
      .from("[text='home-hero']", { y: "700rem", duration: 1 }, "<5%");

    //HERO TEXT
    let spTitle = new SplitText('.hero-bottom__title', { type: "chars" });
    let spSub = new SplitText('.hero-bottom__sub', { type: "chars" });
    let spText = new SplitText('.hero-bottom__text', { type: "lines" });


    let heroTextTL = gsap.timeline({
      onStart: () => {
        gsap.set('.hero-bottom', { opacity: '1', pointerEvents: 'all' });
      }
    });


    heroTextTL
      .add('start')
      .from(spTitle.chars, {
        delay: 2.5,
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.05
        }
      }, 'start')
      .from(spSub.chars, {
        delay: 2.5,
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.05
        }
      }, 'start')
      .from(spText.lines, {
        delay: 3.5,
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.05
        }
      }, 'start')

  });

}
export default createCanvas
