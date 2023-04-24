window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Tribune Page
  // Hero Tribune Movement on Page Load
  let tribuneHero = gsap.timeline({ ease: "power1.inOut" });
  tribuneHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })
    .from(".hero-tribune_heading-span.is_one", {
      opacity: 0,
      x: "-50vw",
      duration: 1.3
    })
    .from(
      ".hero-tribune_heading-span.is_two",
      {
        opacity: 0,
        x: "50vw",
        duration: 1.3
      },
      "<"
    )
    .from(
      ".tag-t3_wrapper",
      {
        x: "150rem",
        stagger: 0.2,
        duration: 1.5
      },
      "<10%"
    )
    .from(
      ".hero-tribune_content-wrapper",
      {
        opacity: 0,
        y: "100%",
        duration: 1
      },
      "-=1.8"
    );

  // Tribune Page
  // Hero Tribune Movement on Scroll OUT
  if (window.innerWidth > 992) {
    let tribuneHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-tribune_hero",
        start: "bottom 60%",
        end: "bottom top",
        scrub: 1
      }
    });
    tribuneHeroOut
      .to(
        ".hero-tribune_heading-span.is_one",
        {
          x: "50vw"
        },
        "first"
      )
      .to(
        ".hero-tribune_heading-span.is_two",
        {
          x: "-50vw"
        },
        "<"
      )
      .to(
        ".hero-tribune_content-wrapper",
        {
          x: "-50vw"
        },
        "<25%"
      )
      .to(
        ".tag-t3_wrapper",
        {
          x: "-150rem",
          stagger: 0.1
        },
        "first=< "
      );
  }
});
