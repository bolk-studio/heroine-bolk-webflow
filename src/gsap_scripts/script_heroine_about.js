window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // About Page
  // About Hero Movement on Page Load
  let aboutHero = gsap.timeline({ ease: "power1.inOut" });
  aboutHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })

    .from("[overline='hero-about']", { y: "300rem", duration: 1 }, "<")
    .from("[heading='hero-about']", { y: "500rem", duration: 1 }, "<")
    .from("[text='hero-about']", { y: "700rem", duration: 1 }, "<5%");

  // About Page
  // Hero About Movement on Scroll OUT

  if (window.innerWidth > 992) {
    let aboutHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-about_hero",
        start: "bottom 70%",
        end: "bottom top",
        scrub: 1
      }
    });
    aboutHeroOut
      .to("[overline='hero-about']", { y: "-700rem", duration: 1 }, "<")
      .to("[heading='hero-about']", { y: "-600rem", duration: 1 }, "<")
      .to("[text='hero-about']", { y: "-500rem", duration: 1 }, "<5%")

      .to(
        "[video='hero-about']",
        {
          scale: 0.8,
          duration: 2,
          borderRadius: 20
        },
        "<10%"
      );
  }
  // About - Section Genese on Scroll IN DESKTOP
  if (window.innerWidth > 992) {
    const aboutIntroIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_one-genese-about",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1
      }
    });

    aboutIntroIn
      .from("[overline='about-genese']", { y: "250rem" }, 0)
      .from("[heading='about-genese']", { y: "300rem" }, 0)
      .from("[subtitle='about-genese']", { y: "400rem" }, 0)
      .from("[text='about-genese']", { y: "500rem" }, 0)
      .from("[video='about-genese']", { y: "600rem" }, 0)
      .from(
        "[keyword='about-genese']",
        { y: "500rem", stagger: { each: "0.05" } },
        0
      )
      .from(
        "[keyword_tag='about-genese']",
        { y: "520rem", stagger: { each: "0.05" } },
        0
      );
  }

  if (window.innerWidth < 991) {
    const aboutIntroIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_one-genese-about",
        start: "top center",
        end: "top top",
        scrub: 1
      }
    });

    aboutIntroIn
      .from("[overline='about-genese']", { y: "100rem" }, 0)
      .from("[heading='about-genese']", { y: "150rem" }, 0)
      .from("[subtitle='about-genese']", { y: "200rem" }, 0)
      .from("[text='about-genese']", { y: "250rem" }, 0)
      //.from("[video='about-genese']", { y: "150rem" }, 0)
      .from(
        "[keyword='about-genese']",
        { y: "300rem", stagger: { each: "0.05" } },
        0
      )
      .from(
        "[keyword_tag='about-genese']",
        { y: "310rem", stagger: { each: "0.05" } },
        0
      );
  }
  // About - Section Genese on Scroll OUT
  if (window.innerWidth > 992) {
    const aboutIntroOut = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_two-genese-about",
        start: "top 60%",
        end: "bottom top",
        scrub: 1
      }
    });

    aboutIntroOut
      .to("[overline='about-genese']", { y: "-400rem" }, 0)
      .to("[heading='about-genese']", { y: "-350rem" }, 0)
      .to("[subtitle='about-genese']", { y: "-300rem" }, 0)
      .to("[text='about-genese']", { y: "-250rem" }, 0)
      .to("[keyword='about-genese']", { y: "-200rem" }, "<")
      .to("[keyword_tag='about-genese']", { y: "-190rem" }, "<")
      .to("[video='about-genese']", { y: "-200rem" }, "<50%");
  }
  // About Page
  // About - Section Video on Scroll IN DESKTOP
  if (window.innerWidth > 992) {
    const aboutVideoIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_one-video-about",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1
      }
    });

    aboutVideoIn.from(
      "[video='about-video']",
      { y: "100rem", scale: 0.9, borderRadius: 20 },
      0
    );
  }
  // About - Section Video on Scroll IN Tablet & Mobile
  if (window.innerWidth < 991) {
    const aboutVideoIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_one-video-about",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1
      }
    });

    aboutVideoIn.from(
      "[video='about-video']",
      { y: "150rem", scale: 0.9, borderRadius: 20 },
      0
    );
  }
  // About - Section Video on Scroll OUT DESKTOP
  if (window.innerWidth > 992) {
    const aboutVideoOut = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_two-video-about",
        start: "top 60%",
        end: "bottom center",
        scrub: 1
      }
    });

    aboutVideoOut
      .to("[video='about-video']", { y: "-100rem" })
      .to(
        "[video='about-video']",
        { scale: 0.9, borderRadius: 20, duration: 0.8 },
        "<"
      );
  }
});
