window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Conviction Page
  // Hero Conviction Movement on Page Load
  let convictionHero = gsap.timeline({ ease: "power1.inOut" });
  convictionHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })
    .from(".conviction-hero_heading-wrapper.is_one", {
      x: "-50vw",
      duration: 1.3
    })
    .from(
      ".conviction-hero_heading-wrapper.is_two,.conviction-hero_subtitle-wrapper",
      {
        x: "50vw",
        duration: 1.3,
        stagger: 0.2
      },
      "<"
    )
    .from(
      ".conviction-hero_image-wrapper",
      {
        y: "50vh",
        scale: 0.5,
        duration: 1
      },
      "<"
    )
    .to(
      ".conviction-hero_image",
      {
        scale: 1.1,
        duration: 1
      },
      "<"
    );

  // Conviction Page
  // Hero Conviction Movement on Scroll OUT

  if (window.innerWidth > 992) {
    let convictionHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-conviction_hero  ",
        start: "bottom 95%",
        end: "bottom top",
        scrub: 1
      }
    });
    convictionHeroOut
      .to(".conviction-hero_heading-wrapper.is_one", {
        x: "50vw",
        duration: 1.3
      })
      .to(
        ".conviction-hero_heading-wrapper.is_two,.conviction-hero_subtitle-wrapper",
        {
          x: "-50vw",
          duration: 1.3
        },
        "<"
      )
      .to(
        ".conviction-hero_image",
        {
          scale: 1,
          duration: 1
        },
        "<"
      );
  }

  // Conviction Parallax Element On Scroll
  $("[content-conviction]").each(function (index) {
    let triggerContent = $(this),
      overline = $(this).find("[conviction='overline']"),
      heading = $(this).find("[conviction='heading']"),
      subtitle = $(this).find("[conviction='subtitle']"),
      text = $(this).find("[conviction='texte']"),
      card = $(this).find("[conviction='card']");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerContent,
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    });
    tl.from(overline, { y: "150rem", duration: 1 }, "<")
      .from(heading, { y: "250rem", duration: 1 }, "<")
      .from(subtitle, { y: "350rem", duration: 1 }, "<")
      .from(text, { y: "400rem", stagger: { each: "0.08" }, duration: 1 }, "<")
      .from(
        card,
        { y: "450rem", stagger: { each: "0.08" }, duration: 1.3 },
        "<"
      );
    if (window.innerWidth > 992) {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerContent,
          start: "top -20%",
          end: "bottom top",
          scrub: true
        }
      });
      tl2
        .to(overline, { y: "-400rem", duration: 1 }, "<")
        .to(heading, { y: "-300rem", duration: 1 }, "<")
        .to(subtitle, { y: "-200rem", duration: 1 }, "<")
        .to(text, { y: "-100rem", stagger: { each: "0.08" }, duration: 1 }, "<")
        .to(
          card,
          { y: "-200rem", stagger: { each: "0.08" }, duration: 1.3 },
          "<"
        );
    }
  });
});
