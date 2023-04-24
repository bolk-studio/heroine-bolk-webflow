window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Method Page
  // Hero Method Movement on Page Load
  let methodHero = gsap.timeline({ ease: "power1.inOut" });
  methodHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })
    .from("[heading-one='hero-method']", {
      opacity: 0,
      x: "-50vw",
      duration: 1.3
    })
    .from(
      "[heading-two='hero-method']",
      {
        opacity: 0,
        x: "50vw",
        duration: 1.3
      },
      "<"
    )
    .from(
      "[tag='hero-method']",
      {
        x: "50vw",
        duration: 1.5
      },
      "<10%"
    )
    .from(
      "[texte='hero-method']",
      {
        opacity: 0,
        y: "100%",
        duration: 1
      },
      "-=1.8"
    );

  // Hero Method Movement on Scroll OUT
  if (window.innerWidth > 992) {
    let methodHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-tribune_hero",
        start: "bottom 70%",
        end: "bottom 10%",
        scrub: 1
      }
    });
    methodHeroOut
      .to(
        "[heading-one='hero-method']",
        {
          x: "50vw"
        },
        "first"
      )
      .to(
        "[heading-two='hero-method']",
        {
          x: "-50vw"
        },
        "<"
      )
      .to(
        "[texte='hero-method']",
        {
          x: "-50vw"
        },
        "<25%"
      )
      .to(
        "[tag='hero-method']",
        {
          x: "-45vw"
        },
        "<5%"
      );
  }
  // Method - Section Cards on Scroll IN DESKTOP
  if (window.innerWidth > 992) {
    const methodCardIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".section-methode_cards",
        start: "top 70%",
        end: "top 40%",
        scrub: 1
      }
    });

    methodCardIn
      .from("[overline='method-card']", { y: "250rem" }, 0)
      .from("[heading='method-card']", { y: "300rem" }, 0)
      .from("[texte='method-card']", { y: "400rem" }, 0)
      .from(
        "[card='method-card']",
        { y: "500rem", stagger: { each: "0.1" } },
        0
      );
  }

  // Method - Section Cards on Scroll IN MOBILE
  if (window.innerWidth < 991) {
    const methodCardIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".section-methode_cards",
        start: "top 90%",
        end: "bottom bottom",
        scrub: 1
      }
    });

    methodCardIn
      .from("[overline='method-card']", { y: "150rem" }, 0)
      .from("[heading='method-card']", { y: "200rem" }, 0)
      .from("[texte='method-card']", { y: "300rem" }, 0)
      .from(
        "[card='method-card']",
        { y: "400rem", stagger: { each: "0.1" } },
        0
      );
  }
  // Method - Section Cards on Scroll OUT DESKTOP
  if (window.innerWidth > 992) {
    const methodCardOut = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".section-methode_cards",
        start: "bottom 80%",
        end: "bottom top",
        scrub: 1
      }
    });

    methodCardOut
      .to("[overline='method-card']", { y: "-500rem" }, 0)
      .to("[heading='method-card']", { y: "-400rem" }, 0)
      .to("[texte='method-card']", { y: "-300rem" }, 0)
      .to(
        "[card='method-card']",
        { y: "-250rem", stagger: { each: "0.1" } },
        0
      );
  }
  // Method - Cards Hover DESKTOP
  if (window.innerWidth > 992) {
    $("[card='method-card']").on("mouseenter", function () {
      $(this).addClass("is_hover");
      $(this).find(".methode-cards_item-content-source").addClass("is_hover");
      $(this).find(".methode-cards_item-top-line").addClass("is_hover");
    });

    $("[card='method-card']").on("mouseleave", function () {
      $(this).removeClass("is_hover");
      $(this)
        .find(".methode-cards_item-content-source")
        .removeClass("is_hover");
      $(this).find(".methode-cards_item-top-line").removeClass("is_hover");
    });
  }

  // Method - Section Mesure on Scroll IN DESKTOP
  const methodMesureIn = gsap.timeline({
    defaults: { ease: "power1.out" },
    scrollTrigger: {
      trigger: ".section-methode_mesure",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1
    }
  });
  methodMesureIn
    .from("[overline='method-mesure']", { y: "250rem", duration: "1.3" }, 0)
    .from("[heading='method-mesure']", { y: "300rem", duration: "1.3" }, 0)
    .from("[texte='method-mesure']", { y: "350rem", duration: "1.3" }, 0)
    .from("[image='method-mesure']", { y: "450rem", duration: "1.3" }, 0);

  // Method - Section Mesure on Scroll OUT DESKTOP
  if (window.innerWidth > 992) {
    const methodMesureOut = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".section-methode_mesure",
        start: "bottom center",
        end: "bottom top",
        scrub: 1
      }
    });

    methodMesureOut
      .to("[overline='method-mesure']", { y: "-400rem", duration: "1.3" }, 0)
      .to("[heading='method-mesure']", { y: "-350rem", duration: "1.3" }, 0)
      .to("[texte='method-mesure']", { y: "-300rem", duration: "1.3" }, 0)
      .to("[image='method-mesure']", { y: "-450rem", duration: "1.3" }, 0);
  }
  // Method - Section methode pilier on Scroll IN DESKTOP

  /*

  // Pause the timeline when the user clicks on the target element
  target.on("click", () => {
    timeline.pause();
  });

  // Resume the timeline when the user releases the target element
  target.on("mouseup", () => {
    timeline.resume();
  });*/

  // Kill the timeline when the user clicks outside the target element
  /* $(document).on("mouseup", (event) => {
    if (!target.is(event.target) && target.has(event.target).length === 0) {
      gsap.killTweensOf(totem);
    }
  });*/

  // Check the position of the target element on scroll
  /* $(window).on("scroll", () => {
    const rect = target[0].getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;

    if (top >= 0 && bottom <= window.innerHeight) {
      // If the target is fully inside the viewport, resume the timeline
      timeline.resume();
    } else {
      // Otherwise, pause the timeline and animate the element back to its initial position
      timeline.pause();
      gsap.to(totem, { y: "0", duration: 0 });
    }
  });*/

  if (window.innerWidth > 992) {
    const methodpillier = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is--methode-pilier-1",
        start: "top bottom-=200",
        end: "bottom bottom-=200",
        scrub: 1
      }
    });

    methodpillier
      .to("[opacity-null-pillars]", {
        opacity: 1,
        duration: 0
      })
      .from(
        ".method_pillars-link",
        { x: "55.5vw", y: "10vh", stagger: { each: "0.1" } },
        0
      );

    // is totem 1 animation
    /*const target = $("[pillar='trigger1']").parent(
      ".methode-pilier-text-wrapper"
    );
    const totem = $("[pillar='totem1']");

    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.to(totem, { y: "-20rem", duration: 1 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: target,
      start: "top top",
      end: "bottom bottom",
      markers: true,
      onEnter: () => {
        timeline.play();
      },
      onLeave: () => {
        timeline.pause();
        gsap.to(totem, { y: "0", duration: 0 });
      },
      onEnterBack: () => {
        timeline.play();
      },
      onLeaveBack: () => {
        timeline.pause();
        gsap.to(totem, { y: "0", duration: 0 });
      }
    });

    timeline.pause();*/

    // is second animation
    const methodpillier1 = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[pillar='trigger1']",
        start: "top bottom",
        end: "top top",
        scrub: 1
      }
    });

    methodpillier1.to("[pillar='one']", { y: "-40vh" }, 0);
    methodpillier1.from(
      "[pillar='text1']",
      { opacity: 0, y: "200rem", delay: 0.5 },
      0
    );

    // is third animation
    const methodpillier2 = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[pillar='trigger2']",
        sstart: "top bottom",
        end: "top top",
        scrub: 1
      }
    });

    methodpillier2.to("[pillar='one']", { y: "0vh" }, 0);
    methodpillier2.to("[pillar='two']", { y: "-40vh" }, 0);
    methodpillier2.to(".method_pillars-link", { x: "-16.5vw" }, 0);
    methodpillier2.from(
      "[pillar='text2']",
      { opacity: 0, y: "200rem", delay: 0.5 },
      0
    );

    // is third pillier
    const methodpillier3 = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[pillar='trigger3']",
        start: "top bottom",
        end: "top top",
        scrub: 1
      }
    });

    methodpillier3.to("[pillar='two']", { y: "0vh" }, 0);
    methodpillier3.to("[pillar='three']", { y: "-40vh" }, 0);
    methodpillier3.to(".method_pillars-link", { x: "-33vw" }, 0);
    methodpillier3.from(
      "[pillar='text3']",
      { opacity: 0, y: "200rem", delay: 0.5 },
      0
    );

    // is forth pillier
    const methodpillier4 = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[pillar='trigger4']",
        start: "top bottom",
        end: "top top",
        scrub: 1
      }
    });

    methodpillier4.to("[pillar='three']", { y: "0vh" }, 0);
    methodpillier4.to("[pillar='four']", { y: "-40vh" }, 0);
    methodpillier4.to(".method_pillars-link", { x: "-49.5vw" }, 0);
    methodpillier4.from(
      "[pillar='text4']",
      { opacity: 0, y: "200rem", delay: 0.5 },
      0
    );

    // is fifth pillier
    const methodpillier5 = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[pillar='trigger5']",
        start: "top bottom",
        end: "top top",
        scrub: 1
      }
    });

    methodpillier5.to("[pillar='four']", { y: "0vh" }, 0);
    methodpillier5.to("[pillar='five']", { y: "-40vh" }, 0);
    methodpillier5.to(".method_pillars-link", { x: "-66vw" }, 0);
    methodpillier5.from(
      "[pillar='text5']",
      { opacity: 0, y: "200rem", delay: 0.5 },
      0
    );

    // is pillier out
    const methodpillier6 = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is--methode-pillar-last",
        start: "top bottom",
        end: "top top",
        scrub: 1
      }
    });

    methodpillier6.to("[pillar='five']", { y: "0vh" }, 0);
    methodpillier6.to(".method_pillars-link", { x: "-144.5vw" }, 0);
  }
});
