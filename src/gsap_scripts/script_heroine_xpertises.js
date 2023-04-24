window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Hero Expertise Movement on Page Load

  let expertiseHero = gsap.timeline({ ease: "power1.inOut" });
  expertiseHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })
    .from("[expertise='hero-visual']", {
      y: "1000rem",
      duration: 1.3,
      stagger: { each: "0.1" }
    })
    .from(
      "[expertise='hero-tag']",
      {
        y: "1050rem",
        duration: 1.3,
        stagger: { each: "0.1" }
      },
      "<"
    )
    .from("[expertise='hero-overline']", { y: "300rem", duration: 1 }, "<")
    .from("[expertise='hero-heading']", { y: "500rem", duration: 1 }, "<")
    .from("[expertise='hero-subtitle']", { y: "700rem", duration: 1 }, "<5%");

  // Expertises Page
  // Expertises Hero Movement on Scroll OUT On desktop ONLY

  if (window.innerWidth > 992) {
    let expertiseHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-expertise_hero",
        start: "bottom 95%",
        end: "bottom top",
        scrub: 1
      }
    });
    expertiseHeroOut
      .to("[expertise='hero-visual']", {
        y: "-200rem",
        stagger: { each: "0.05" }
      })
      .to(
        "[expertise='hero-tag']",
        {
          y: "-250rem",
          stagger: { each: "0.05" }
        },
        "<"
      )
      .to("[expertise='hero-overline']", { y: "-500rem", duration: 1 }, "<")
      .to("[expertise='hero-heading']", { y: "-400rem", duration: 1 }, "<")
      .to("[expertise='hero-subtitle']", { y: "-300rem", duration: 0.8 }, "<");
  }

  // Expertises Details Movement on Scroll IN On desktop ONLY
  if (window.innerWidth > 992) {
    $(".expertise-detail_component").each(function (index) {
      let triggerContent = $(this),
        overline = $(this).find("[expertise='detail-overline']"),
        heading = $(this).find("[expertise='detail-heading']"),
        subtitle = $(this).find("[expertise='detail-subtitle']"),
        text = $(this).find("[expertise='detail-text']"),
        visual = $(this).find("[expertise='detail-visual']");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerContent,
          start: "top 80%%",
          end: "top 30%",
          scrub: 1
        }
      });
      tl.from(overline, { y: "100rem", duration: 1 }, "<")
        .from(heading, { y: "150rem", duration: 1 }, "<")
        .from(subtitle, { y: "200rem", duration: 1 }, "<")
        .from(text, { y: "500rem", duration: 1 }, "<")
        .from(visual, { y: "600rem", rotate: 20, duration: 1.3 }, "<");

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerContent,
          start: "bottom 80%",
          end: "bottom top",
          scrub: 1
        }
      });
      tl2
        .to(overline, { y: "-400rem", duration: 1 }, "<")
        .to(heading, { y: "-350rem", duration: 1 }, "<")
        .to(subtitle, { y: "-200rem", duration: 1 }, "<")
        .to(text, { y: "-250rem", duration: 1 }, "<")
        .to(visual, { y: "-500rem", rotate: -10, duration: 1.3 }, "<");
    });
  }

  // Expertises Offre Adaptee Movement on Scroll IN Desktop Only
  if (window.innerWidth > 992) {
    const expertiseOfferIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_one-expertise",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1
      }
    });

    expertiseOfferIn
      .from(
        "[expertise='content-left']",
        { x: "-50vw", opacity: 0, stagger: { each: "0.1" } },
        0
      )
      .from(
        "[expertise='content-right']",
        { x: "50vw", opacity: 0, stagger: { each: "0.1" } },
        0
      )
      .from("[expertise='r-letter']", { y: "300rem", rotate: 12 }, ">5%")
      .from("[expertise='o-letter']", { y: "300rem", rotate: -6 }, "<10%")
      .from("[expertise='x-letter']", { y: "300rem", rotate: -14 }, "<10%");
  }

  // Expertises Offre Adaptee Movement on Scroll IN Mobile Only
  if (window.innerWidth < 991) {
    const expertiseOfferIn = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_one-expertise",
        start: "top 80%",
        end: "top top",
        scrub: 1
      }
    });

    expertiseOfferIn
      .from(
        "[expertise='content-left']",
        { x: "-50vw", opacity: 0, stagger: { each: "0.1" } },
        0
      )
      .from(
        "[expertise='content-right']",
        { x: "50vw", opacity: 0, stagger: { each: "0.1" } },
        0
      )
      .from("[expertise='r-letter']", { y: "300rem", rotate: 12 }, ">5%")
      .from("[expertise='o-letter']", { y: "300rem", rotate: -6 }, "<10%")
      .from("[expertise='x-letter']", { y: "300rem", rotate: -14 }, "<10%");
  }
  // Expertises Offre Adaptee Movement on Scroll OUT Desktop only
  if (window.innerWidth > 992) {
    const expertiseOfferOut = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_two-expertise",
        start: "top 40%",
        end: "bottom top",
        scrub: 1
      }
    });

    expertiseOfferOut
      .to("[expertise='r-letter']", {
        y: "-300rem",
        rotate: -12
      })
      .to(
        "[expertise='o-letter']",
        {
          y: "-300rem",
          rotate: 14
        },
        "<1%"
      )
      .to(
        "[expertise='x-letter']",
        {
          y: "-300rem",
          rotate: -12
        },
        "<1%"
      );
  }
});
