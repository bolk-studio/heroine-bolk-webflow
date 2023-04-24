window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Projet Page
  // Project Hero Cover Image Movement on Page Load
  let projectHeroIn = gsap.timeline();
  projectHeroIn
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })

    .from(
      "[heading='hero-project']",
      {
        x: "-50vw",
        duration: 1.3
      },
      "<"
    )
    .from(
      "[texte='hero-project']",
      {
        x: "50vw",
        duration: 1.3
      },
      "<"
    )
    .from(
      "[meta='hero-project']",
      {
        y: "100%",
        duration: 1,
        opacity: 0
      },
      "<0.5"
    );
  // Project Hero Cover Image Movement on Scroll IN

  let projectHeroImgIn = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-projet_hero-img",
      start: "top center",
      end: "top 10%",
      scrub: 1
    }
  });

  projectHeroImgIn
    .to(".projet_hero-img-padding", {
      paddingRight: 0,
      paddingLeft: 0
    })
    .to(
      "[wrapper='hero-project']",
      {
        borderRadius: 0
      },
      "<"
    )
    .to(
      "[visual='hero-project']",
      {
        scale: 1.1
      },
      "<"
    );

  // Project Parallax Element On Scroll
  if (window.innerWidth > 992) {
    $("[content-project]").each(function (index) {
      let triggerContent = $(this),
        overline = $(this).find("[overline]"),
        heading = $(this).find("[heading]"),
        subtitle = $(this).find("[subtitle]"),
        text = $(this).find("[texte]"),
        visual = $(this).find("[visual]");

      let tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: triggerContent,
          start: "top 90%",
          end: "bottom 80%",
          scrub: true
        }
      });
      tl.from(overline, { y: "150rem", duration: 1 }, "<")
        .from(heading, { y: "200rem", duration: 1 }, "<")
        .from(subtitle, { y: "250rem", duration: 1 }, "<")
        .from(text, { y: "300rem", duration: 1 }, "<")
        .from(
          visual,
          { y: "300rem", stagger: { each: "0.10" }, duration: 1 },
          "<"
        );

      let tl2 = gsap.timeline({
        defaults: { ease: "power2.in" },
        scrollTrigger: {
          trigger: triggerContent,
          start: "top -7%",
          end: "bottom top",
          scrub: true
        }
      });
      tl2
        .to(overline, { y: "-400rem", duration: 1 }, "<")
        .to(heading, { y: "-300rem", duration: 1 }, "<")
        .to(subtitle, { y: "-200rem", duration: 1 }, "<")
        .to(text, { y: "-100rem", duration: 1 }, "<")
        .to(
          visual,
          { y: "-100rem", stagger: { each: "0.08" }, duration: 1.3 },
          "<"
        );
    });
  }

  // Section Images Superposees
  // SCROLL IN

  const projectDoubleImagesIn = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
    scrollTrigger: {
      trigger: ".section-projet_img-superposees",
      start: "top center",
      end: "bottom bottom",
      scrub: 1
    }
  });

  projectDoubleImagesIn.from("[projet='img-top']", { y: "250rem" });

  // SCROLL OUT

  const projectDoubleImagesOut = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
    scrollTrigger: {
      trigger: ".section-projet_img-superposees",
      start: "bottom center",
      end: "bottom top",
      scrub: 1
    }
  });

  projectDoubleImagesOut.to("[projet='img-top']", { y: "-150rem" });
  //.from("[projet='img-top']", { y: "250rem" });

  // Section Activation
  // Activation SCROLL IN
  if (window.innerWidth > 992) {
    const projectActivationIn = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_one-activation-project",
        start: "top center",
        end: "bottom bottom",
        scrub: 1
      }
    });

    projectActivationIn
      .from("[activation='overline']", { y: "150rem" })
      .from("[activation='heading']", { y: "200rem" }, "<")
      .from("[activation='subtitle']", { y: "250rem" }, "<")
      .from(
        "[activation='item']",
        { y: "300rem", stagger: { each: "0.08" } },
        "<"
      )
      .from("[activation='visual']", { y: "500rem" }, "<")
      .from("[activation='book']", { y: "600rem", rotate: -12 }, "<")
      .from("[activation='letter']", { y: "600rem", rotate: 12 }, "<");
  }

  // Activation SCROLL OUT
  const projectActivationOut = gsap.timeline({
    defaults: { duration: 1, ease: "power1.out" },
    scrollTrigger: {
      trigger: ".is_two-activation-project",
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });

  projectActivationOut
    .to("[activation='overline']", { y: "-400rem" })
    .to("[activation='heading']", { y: "-350rem" }, "<")
    .to("[activation='subtitle']", { y: "-300rem" }, "<")
    .to("[activation='item']", { y: "-350rem", stagger: { each: "0.08" } }, "<")
    .to("[activation='visual']", { y: "-150rem" }, "<")
    .to("[activation='book']", { y: "-200rem", rotate: 6 }, "<")
    .to("[activation='letter']", { y: "-200rem", rotate: -6 }, "<");
});
