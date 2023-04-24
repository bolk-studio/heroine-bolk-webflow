window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Livre Page
  // Hero Livre Movement on Page Load

  let livreHero = gsap.timeline({ ease: "power1.inOut" });
  livreHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })
    .from(
      ".livre-hero_image-top, .livre-hero_video-wrapper, .livre-hero_image-bottom",
      {
        y: "1000rem",
        duration: 1.3,
        stagger: 0.1
      }
    )
    .from("[overline='hero-book']", { y: "300rem", duration: 1 }, "<")
    .from("[heading='hero-book']", { y: "500rem", duration: 1 }, "<")
    .from("[tag='hero-book']", { y: "700rem", duration: 1 }, "<5%");

  // Livre Page
  // Hero Livre Movement on Scroll OUT On desktop ONLY

  if (window.innerWidth > 992) {
    let livreHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-livre_hero",
        start: "bottom 98%",
        end: "bottom top",
        scrub: 1
      }
    });
    livreHeroOut
      .to(
        ".livre-hero_image-top, .livre-hero_video-wrapper, .livre-hero_image-bottom",
        {
          y: "-200rem"
        }
      )
      .to("[overline='hero-book']", { y: "-700rem", duration: 1 }, "<")
      .to("[heading='hero-book']", { y: "-500rem", duration: 1 }, "<")
      .to("[tag='hero-book']", { y: "-300rem", duration: 1 }, "<5%");
  }
  // Livre Page
  // Livre - Section Intro on Scroll IN
  const bookIntroIn = gsap.timeline({
    defaults: { ease: "power1.out" },
    scrollTrigger: {
      trigger: ".is_one-intro-book",
      start: "top 70%",
      end: "top 15%",
      scrub: 1
    }
  });

  bookIntroIn
    .from(
      "[tag='book-intro-left']",
      { x: "-50vw", opacity: 0, stagger: { each: "0.1" } },
      0
    )
    .from(
      "[tag='book-intro-right']",
      { x: "50vw", opacity: 0, stagger: { each: "0.1" } },
      0
    )
    .from(".livre-intro_img-wrapper", { y: "100rem" }, "<5%");

  // Livre - Section Intro on Scroll OUT On desktop ONLY
  if (window.innerWidth > 992) {
    const bookIntroOut = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_two-intro-book",
        start: "top 90%",
        end: "bottom top",
        scrub: 1
      }
    });

    bookIntroOut
      .to(".livre-intro_content-wrapper", {
        y: "-400rem"
      })
      .to(
        ".livre-intro_img-wrapper",
        {
          y: "-500rem",
          scale: 1.1,
          rotate: 6
        },
        "<"
      );
  }

  // Livre - Section Intro on Scroll OUT On Mobile ONLY
  if (window.innerWidth < 991) {
    const bookIntroOut = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_two-intro-book",
        start: "top 80%",
        end: "bottom top",
        scrub: 1
      }
    });

    bookIntroOut
      .to(".livre-intro_content-wrapper", {
        y: "-200rem"
      })
      .to(
        ".livre-intro_img-wrapper",
        {
          y: "-300rem",
          scale: 1.2,
          rotate: 6
        },
        "<"
      );
  }
});
