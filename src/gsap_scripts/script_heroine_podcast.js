window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // Podcast Page
  // Hero Podcast Movement on Page Load

  let podcastHero = gsap.timeline({ ease: "power1.inOut" });
  podcastHero
    .to("[opacity-null]", {
      opacity: 1,
      duration: 0
    })
    .from(".podcast_tag-pf", {
      y: "400rem",
      stagger: 0.1
    })
    .from(
      "[heading='hero-podcast']",
      {
        x: "500rem"
      },
      "<"
    )
    .from(
      "[texte='hero-podcast']",
      {
        x: "600rem"
      },
      "<"
    )
    .from(
      "[overline='hero-podcast']",
      {
        x: "700rem"
      },
      "<"
    )
    .from(
      "[visual='hero-podcast']",
      {
        x: "-500rem",
        duration: 1.4
      },
      "<"
    );

  // Podcast Page
  // Hero Podcast Movement on Scroll OUT
  if (window.innerWidth > 992) {
    let podcastHeroOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-podcast_hero",
        start: "bottom center",
        end: "bottom top",
        scrub: 1
      }
    });
    podcastHeroOut
      .to("[heading='hero-podcast']", {
        y: "-400rem"
      })
      .to(
        "[texte='hero-podcast']",
        {
          y: "-350rem"
        },
        "<"
      )
      .to(
        "[overline='hero-podcast']",
        {
          y: "-250rem"
        },
        "<"
      )
      .to(
        ".podcast_tag-pf",
        {
          y: "-200rem",
          stagger: 0.1
        },
        "<"
      )
      .to(
        "[visual='hero-podcast']",
        {
          y: "-700rem",
          duration: 1.4
        },
        "<"
      )
      .to(
        "[tag='hero-podcast']",
        {
          y: "-250rem",
          duration: 1.4
        },
        "<10%"
      );
  }

  // -------- Podcast - Latest section --- //
  const podcastLatestIn = gsap.timeline({
    defaults: { duration: 1, ease: "power1.out" },
    scrollTrigger: {
      trigger: ".is_one-latest-podcast",
      start: "top 90%",
      end: "top 30%",
      scrub: 1
    }
  });

  podcastLatestIn.from(
    ".podcast-content_pf-link.is_latest",
    { y: "450rem" },
    0
  );
  podcastLatestIn.from(".podcast_meta-wrapper.is_latest", { y: "500rem" }, 0);
  podcastLatestIn.from(".podcast-latest_image-wrapper", { y: "600rem" }, 0);
  podcastLatestIn.from(".podcast-latest_overline", { y: "100rem" }, 0);
  podcastLatestIn.from(
    ".podcast_speakers-wrapper.is_latest",
    { y: "150rem" },
    0
  );
  podcastLatestIn.from(".podcast-latest_heading", { y: "200rem" }, 0);
  podcastLatestIn.from(".podcast-latest_content", { y: "300rem" }, 0);

  if (window.innerWidth > 992) {
    const podcastLatestOut = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
      scrollTrigger: {
        trigger: ".is_two-latest-podcast",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    podcastLatestOut.to(".podcast-latest_overline", { y: "-500rem" });
    podcastLatestOut.to(
      ".podcast_speakers-wrapper.is_latest",
      { y: "-450rem" },
      0
    );
    podcastLatestOut.to(".podcast-latest_heading", { y: "-400rem" }, 0);
    podcastLatestOut.to(".podcast-latest_content", { y: "-350rem" }, 0);
    podcastLatestOut.to(".podcast-latest_image-wrapper", { y: "-250rem" }, 0);
    podcastLatestOut.to(".podcast_meta-wrapper.is_latest", { y: "-350rem" }, 0);
    podcastLatestOut.to(
      ".podcast-content_pf-link.is_latest",
      { y: "-340rem" },
      0
    );
  }
});
