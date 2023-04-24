window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  if (window.innerWidth > 992) {
    // Playground Items Move
    // Grid Image Move 1
    $(".playground-item:nth-child(3n+1)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          ease: "linear"
        }
      });
      tl.to(targetElement, {
        y: "-60rem",
        duration: 1
      });
    });

    // Grid Image Move 2
    $(".playground-item:nth-child(3n+2)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          ease: "linear"
        }
      });
      tl.to(targetElement, {
        y: "-40rem",
        duration: 1
      });
    });

    // Grid Image Move 3
    $(".playground-item:nth-child(3n+3)").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          ease: "linear"
        }
      });
      tl.to(targetElement, {
        y: "-60rem",
        duration: 1
      });
    });
  }
});
