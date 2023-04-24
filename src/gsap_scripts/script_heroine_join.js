window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Join Page
  // Join Hero Movement on Page Load
  let joinHero = gsap.timeline({ ease: "power1.inOut" });
  joinHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })

    .from("[heading='hero-join']", { y: "100rem", duration: 1.3 }, "<")
    .from("[tag='hero-join']", { y: "200rem", duration: 1.3 }, "<")
    .from("[text='hero-join']", { y: "300rem", duration: 1.3 }, "<")
    .from("[visuel='hero-join']", { y: "500rem", duration: 1.3 }, "<")
    .from("[meta-grid='hero-join']", { y: "400rem", duration: 1.3 }, "<");

  // Join Page
  // Hero Join Movement on Scroll OUT
  if (window.innerWidth > 992) {
    let joinHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-join_hero",
        start: "bottom 30%",
        end: "bottom top",
        scrub: 1
      }
    });
    joinHeroOut
      .to("[heading='hero-join']", { y: "-400rem", duration: 1.3 }, "<")
      .to("[tag='hero-join']", { y: "-350rem", duration: 1.3 }, "<")
      .to("[text='hero-join']", { y: "-200rem", duration: 1.3 }, "<")
      .to("[visuel='hero-join']", { y: "-300rem", duration: 1.3 }, "<")
      .to("[meta-grid='hero-join']", { y: "-150rem", duration: 1.3 }, "<20%");
  }

  // -------- Join - Search section IN --- //
  const joinSearchIn = gsap.timeline({
    defaults: { duration: 1, ease: "power1.out" },
    scrollTrigger: {
      trigger: ".is_one-latest-podcast",
      start: "top 80%",
      end: "top 20%",
      scrub: 1
    }
  });

  joinSearchIn
    .from("[overline='search-join']", { y: "100rem" }, 0)
    .from("[heading='search-join']", { y: "200rem" }, 0)
    .from("[subtitle='search-join']", { y: "300rem" }, 0)
    .from("[texte='search-join']", { y: "450rem" }, 0)
    .from("[visuel='search-join']", { y: "500rem" }, 0)
    .from("[tag='search-join']", { y: "550rem" }, 0);

  // -------- Join - Search section OUT --- //
  if (window.innerWidth > 992) {
    const joinSearchOut = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_two-latest-podcast",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    joinSearchOut
      .to("[overline='search-join']", { y: "-450rem" }, 0)
      .to("[heading='search-join']", { y: "-400rem" }, 0)
      .to("[subtitle='search-join']", { y: "-300rem" }, 0)
      .to("[texte='search-join']", { y: "-250rem" }, 0)
      .to("[visuel='search-join']", { y: "-500rem" }, 0)
      .to("[tag='search-join']", { y: "-450rem" }, 0);
  }
});
