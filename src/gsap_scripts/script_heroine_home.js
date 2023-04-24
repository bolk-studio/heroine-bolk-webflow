window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();

  // ---- animation Text Hero OUT ---- //
  if (window.innerWidth > 992) {
    let heroHomeOut = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-home_hero",
        start: "bottom 70%",
        end: "bottom top",
        scrub: 1
      }
    });
    heroHomeOut
      .to("[overline='home-hero']", { y: "-700rem", duration: 1 }, "<")
      .to("[heading='home-hero']", { y: "-600rem", duration: 1 }, "<")
      .to("[text='home-hero']", { y: "-500rem", duration: 1 }, "<5%");
  }

  // HomePage Hide Lottie Sound After Hero Section

  let lottieSoundVisibility = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-home_hero",
      start: "bottom 97%",
      end: "bottom 80%",
      scrub: 1
    }
  });
  lottieSoundVisibility
    .to("[button-sound='lottie']", {
      opacity: 0
    })
    .set("[button-sound='lottie']", {
      display: "none"
    });

  // ---- animation discover start ---- //
  if (window.innerWidth > 992) {
    let homeNewsIn = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
      scrollTrigger: {
        trigger: "[trigger-one='home-news']",
        start: "top center",
        end: "bottom bottom",
        scrub: 1
      }
    });

    homeNewsIn
      .to("[visual='home-news']", { scale: 1.2 }, 0)
      .from("[visual-inner='home-news']", { scale: 0.5 }, 0)
      .from("[overline='home-news']", { y: "250rem" }, 0)
      .from("[heading='home-news']", { y: "300rem" }, 0)
      .from("[text='home-news']", { y: "350rem" }, 0);

    let homeNewsOut = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
      scrollTrigger: {
        trigger: "[trigger-two='home-news']",
        start: "bottom 70%",
        end: "bottom center",
        scrub: 1
      }
    });

    homeNewsOut

      .to("[visual-inner='home-news']", { y: "-200rem", scale: 0.8 }, 0)
      .to("[overline='home-news']", { y: "-350rem" }, 0)
      .to("[heading='home-news']", { y: "-300rem" }, 0)
      .to("[text='home-news']", { y: "-250rem" }, 0);
  }

  // TEST HP - Set sticky section heights based on inner content width
  // Makes scroll timing feel more natural
  if (window.innerWidth > 992) {
    function setTrackHeights() {
      $("[section='home-scroll-horizontal']").each(function (index) {
        let trackWidth = $(this).find(".track").outerWidth();
        $(this).height(trackWidth);
      });
    }
    setTrackHeights();
    window.addEventListener("resize", function () {
      setTrackHeights();
    });

    // Horizontal scroll
    let tlMain = gsap
      .timeline({
        scrollTrigger: {
          trigger: "[section='home-scroll-horizontal']",
          start: "top center",
          end: "bottom center",
          //end: "102% bottom",
          scrub: 1
        }
      })
      .to(".track", {
        xPercent: -100,
        ease: "none"
      });

    // Yes We Rox
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[panel='home-we-rox']",
          containerAnimation: tlMain,
          start: "left 90%",
          end: "right center",
          scrub: true
        }
      })
      .to("[highlight='home-we-rox']", { x: "-400rem" })
      .fromTo(
        "[first-content='home-we-rox']",
        { x: "150rem" },
        { x: "-380rem" },
        "<"
      )
      .to(
        "[tag='home-we-rox']",
        { x: "-150rem", stagger: { each: "0.1" } },
        "<"
      );

    // Text After Yes We Rox
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[panel='how-we-work']",
          containerAnimation: tlMain,
          start: "left right",
          end: "left 20%",
          scrub: true
        }
      })
      .from("[heading='how-we-work']", { x: "250rem" }, "<")
      .from("[texte='how-we-work']", { x: "350rem" }, "<5%");

    // All Pillars APPEARS
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".how-we-work_panel",
          containerAnimation: tlMain,
          start: "left center",
          end: "left left",
          scrub: true
        }
      })

      .from(
        ".home_pillars-link",
        { y: "20vh", x: "100vw", stagger: { each: "0.5" }, duration: 3 },
        "<"
      );

    // Pillar ONE Animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[trigger-pillar='one']",
          containerAnimation: tlMain,
          start: "left right",
          end: "left left",
          scrub: true
        }
      })

      .to("[pillar='one']", { y: "-30vh", duration: 1.5, ease: "power1.out" })
      .to("[pillar-one='content-wrapper']", { opacity: 1 }, "<50%")
      .from("[pillar-one='content-wrapper']", { y: "35vh" }, "<")
      .from("[pillar-one='description']", { x: "-20rem" }, "<50%")
      .to("[pillar-one='description']", { opacity: 1 }, "<20%")

      .to("[pillar-one='description']", { x: "-20rem" }, "+=1")
      .to("[pillar-one='description']", { opacity: 0 }, "<20%")
      .to("[pillar-one='content-wrapper']", { y: "35vh" })
      .to("[pillar-one='content-wrapper']", { opacity: 0 }, "<5%")
      .to(
        "[pillar='one']",
        { y: "0vh", duration: 1.5, ease: "power1.out" },
        "<25%"
      );

    // Pillar TWO Animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[trigger-pillar='two']",
          containerAnimation: tlMain,
          start: "left right",
          end: "left left",
          scrub: true
        }
      })

      .to("[pillar='two']", { y: "-30vh", duration: 1.5, ease: "power1.out" })
      .to("[pillar-two='content-wrapper']", { opacity: 1 }, "<50%")
      .from("[pillar-two='content-wrapper']", { y: "35vh" }, "<")
      .from("[pillar-two='description']", { x: "-20rem" }, "<50%")
      .to("[pillar-two='description']", { opacity: 1 }, "<20%")

      .to("[pillar-two='description']", { x: "-20rem" }, "+=1")
      .to("[pillar-two='description']", { opacity: 0 }, "<20%")
      .to("[pillar-two='content-wrapper']", { y: "35vh" })
      .to("[pillar-two='content-wrapper']", { opacity: 0 }, "<5%")
      .to(
        "[pillar='two']",
        { y: "0vh", duration: 1.5, ease: "power1.out" },
        "<25%"
      );

    // Pillar THREE Animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[trigger-pillar='three']",
          containerAnimation: tlMain,
          start: "left right",
          end: "left left",
          scrub: true
        }
      })

      .to("[pillar='three']", { y: "-30vh", duration: 1.5, ease: "power1.out" })
      .to("[pillar-three='content-wrapper']", { opacity: 1 }, "<50%")
      .from("[pillar-three='content-wrapper']", { y: "35vh" }, "<")
      .from("[pillar-three='description']", { x: "-20rem" }, "<50%")
      .to("[pillar-three='description']", { opacity: 1 }, "<20%")

      .to("[pillar-three='description']", { x: "-20rem" }, "+=1")
      .to("[pillar-three='description']", { opacity: 0 }, "<20%")
      .to("[pillar-three='content-wrapper']", { y: "35vh" })
      .to("[pillar-three='content-wrapper']", { opacity: 0 }, "<5%")
      .to(
        "[pillar='three']",
        { y: "0vh", duration: 1, ease: "power1.out" },
        "<25%"
      );

    // Pillar FOUR Animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[trigger-pillar='four']",
          containerAnimation: tlMain,
          start: "left right",
          end: "left left",
          scrub: true
        }
      })

      .to("[pillar='four']", { y: "-30vh", duration: 1.5, ease: "power1.out" })
      .to("[pillar-four='content-wrapper']", { opacity: 1 }, "<50%")
      .from("[pillar-four='content-wrapper']", { y: "35vh" }, "<")
      .from("[pillar-four='description']", { x: "-20rem" }, "<50%")
      .to("[pillar-four='description']", { opacity: 1 }, "<20%")

      .to("[pillar-four='description']", { x: "-20rem" }, "+=1")
      .to("[pillar-four='description']", { opacity: 0 }, "<20%")
      .to("[pillar-four='content-wrapper']", { y: "35vh" })
      .to("[pillar-four='content-wrapper']", { opacity: 0 }, "<5%")
      .to(
        "[pillar='four']",
        { y: "0vh", duration: 1, ease: "power1.out" },
        "<25%"
      );

    // Pillar FIVE Animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[trigger-pillar='five']",
          containerAnimation: tlMain,
          start: "left right",
          end: "left left",
          scrub: true
        }
      })

      .to("[pillar='five']", { y: "-30vh", duration: 1.5, ease: "power1.out" })
      .to("[pillar-five='content-wrapper']", { opacity: 1 }, "<50%")
      .from("[pillar-five='content-wrapper']", { y: "35vh" }, "<")
      .from("[pillar-five='description']", { x: "-20rem" }, "<50%")
      .to("[pillar-five='description']", { opacity: 1 }, "<20%")

      .to("[pillar-five='description']", { x: "-20rem" }, "+=1")
      .to("[pillar-five='description']", { opacity: 0 }, "<20%")
      .to("[pillar-five='content-wrapper']", { y: "35vh" })
      .to("[pillar-five='content-wrapper']", { opacity: 0 }, "<5%")
      .to(
        "[pillar='five']",
        { y: "0vh", duration: 1, ease: "power1.out" },
        "<25%"
      );

    // ALL Pillars OUT
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[trigger-pillar='end']",
          containerAnimation: tlMain,
          start: "left 90%",
          end: "left left",
          scrub: true
        }
      })

      .to(".home_pillars-wrapper", { y: "-30vh" }, "<")
      .to(
        ".home_pillars-link",
        { y: "-40vh", x: "-90vw", stagger: { each: "0.2" }, duration: 6 },
        "<5%"
      );
  }

  // ---- animation book start ---- //
  if (window.innerWidth > 992) {
    $("[section='home-book']").each(function (index) {
      let targetElementTop = $(this).find("[visual-top='home-book']");
      let targetElementmiddle = $(this).find("[book='home-book']");
      let targetElementbottom = $(this).find("[visual-bottom='home-book']");
      let targetElementTitle = $(this).find("[overline='home-book']");
      let targetElementHeading = $(this).find("[heading='home-book']");
      let targetElementTag = $(this).find("[tag='home-book']");
      let targetElementParagraph = $(this).find("[texte='home-book']");

      let tl = gsap.timeline({
        defaults: { duration: 1, ease: "power1.out" },
        scrollTrigger: {
          trigger: $(this).find("[trigger-one='home-book']"),
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          pin: true
        }
      });

      let tl2 = gsap.timeline({
        defaults: { duration: 1, ease: "power1.out" },
        scrollTrigger: {
          trigger: $(this).find("[trigger-two='home-book']"),
          start: "bottom 70%",
          end: "bottom top",
          scrub: 1,
          pin: true
        }
      });

      tl.from(targetElementTop, { y: "900rem", rotate: 0 }, 0);
      tl.from(targetElementmiddle, { y: "1400rem" }, 0);
      tl.from(targetElementbottom, { y: "1800rem", rotate: 0 }, 0);
      tl.from(targetElementTitle, { y: "100rem" }, 0);
      tl.from(targetElementHeading, { y: "200rem" }, 0);
      tl.from(targetElementTag, { y: "300rem" }, 0);
      tl.from(targetElementParagraph, { y: "400rem" }, 0);

      tl2.to(targetElementTop, { y: "-400rem", rotate: 0 }, 0);
      tl2.to(targetElementmiddle, { y: "-300rem" }, 0);
      tl2.to(targetElementbottom, { y: "-400rem", rotate: -24 }, 0);
      tl2.to(targetElementTitle, { y: "-150rem" }, 0);
      tl2.to(targetElementHeading, { y: "-130rem" }, 0);
      tl2.to(targetElementTag, { y: "-100rem" }, 0);
      tl2.to(targetElementParagraph, { y: "-100rem" }, 0);
    });
  }
  // ---- animation book finish ---- //

  // Use cases Visuals Animation
  if (window.innerWidth > 992) {
    let useCasesVisuals = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-home_client",
        start: "top 10%",
        end: "bottom top",
        scrub: 1
      }
    });
    useCasesVisuals.to(".home-client_visual-wrapper", {
      y: "-100vh",
      duration: 1.8,
      stagger: { each: "0.1" }
    });
  }

  // Use cases Logo Animation
  let useCasesLogo = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5,
    /*onComplete: function () { // pour Daphne : pour supprimer le délai, supprimer le repeat et ajouter un onComplete fonction restart cg doc greensock /docs/v3/GSAP/Timeline?
      this.restart();
    },*/
    ease: "power2.out"
  });
  useCasesLogo.from(".home-client_logos-item", {
    opacity: "0",
    stagger: "1",
    duration: 0.5
  });

  // ----------------- MOBILE ---------------------- //
  // ---- animation discover start MOBILE ---- //
  if (window.innerWidth < 991) {
    const homeNewsInMobile = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[section='home-news']",
        start: "top bottom",
        end: "top center",
        scrub: 1
      }
    });

    homeNewsInMobile
      .from("[overline='home-news']", { y: "100rem" })
      .from("[heading='home-news']", { y: "150rem" }, 0)
      .from("[text='home-news']", { y: "200rem" }, 0)
      .from("[visual-wrapper='home-news']", { y: "250rem" }, 0);
  }

  // ---- animation Bloc PRESENTATION MOBILE ---- //
  if (window.innerWidth < 991) {
    const blocPresentationMobile = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[section='home-presentation']",
        start: "top bottom",
        end: "top center",
        scrub: 1
      }
    });

    blocPresentationMobile.from("[bloc='home-presentation']", {
      y: "100rem"
    });
  }

  // ---- animation YES WE ROX MOBILE ---- //
  if (window.innerWidth < 991) {
    const yesWeRoxMobile = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[section='home-scroll-horizontal']",
        start: "top 85%",
        end: "top top",
        scrub: 1
      }
    });

    yesWeRoxMobile.fromTo(
      "[highlight='home-we-rox']",
      { x: "80vw" },
      { x: "-100vw" }
    );
  }

  // ---- animation Text Method MOBILE ---- //
  if (window.innerWidth < 991) {
    const homeMethodMobile = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[first-content='home-we-rox']",
        start: "top bottom",
        end: "top center",
        scrub: 1
      }
    });

    homeMethodMobile
      .from("[heading='we-rox']", { y: "100rem" })
      .from("[texte='we-rox']", { y: "150rem" }, 0)
      .from("[button='we-rox']", { y: "200rem" }, 0);
  }

  // ---- animation Text Method Pilliers MOBILE ---- //
  if (window.innerWidth < 991) {
    const homeTextPillierMobile = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[panel='how-we-work']",
        start: "top bottom",
        end: "top center",
        scrub: 1
      }
    });

    homeTextPillierMobile
      .from("[heading='how-we-work']", { y: "100rem" })
      .from("[texte='how-we-work']", { y: "150rem" }, 0);
  }

  // ---- Horizontal Scroll On pillar section Mobile ---- //
  if (window.innerWidth < 991) {
    function setTrackHeights() {
      $("[section='home-scroll-horizontal-mobile']").each(function (index) {
        let trackWidth = $(this).find(".track").outerWidth();
        $(this).height(trackWidth*2);
      });
    }
    setTrackHeights();
    window.addEventListener("resize", function () {
      setTrackHeights();
    });

    // Horizontal scroll
    let tlMain = gsap
      .timeline({
        scrollTrigger: {
          trigger: "[section='home-scroll-horizontal-mobile']",
          start: "top top",
          //end: "bottom bottom",
          end: "bottom 130%",
          scrub: 1
        }
      })
      .to(".track", {
        xPercent: -100,
        ease: "none"
      });
  }

  // ---- animation Book Section MOBILE ---- //
  if (window.innerWidth < 991) {
    const homeBookMobile = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: "[section='home-book']",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1
      }
    });

    homeBookMobile
      .from("[overline='home-book']", { y: "100rem" })
      .from("[heading='home-book']", { y: "150rem" }, 0)
      .from("[tag='home-book']", { y: "120rem" }, 0)
      .from("[texte='home-book']", { y: "250rem" }, 0)
      .from("[visual-top='home-book']", { y: "400rem" }, 0)
      .from("[book='home-book']", { y: "600rem" }, 0)
      .from("[visual-bottom='home-book']", { y: "800rem" }, 0)
      .from("[button='home-book']", { y: "900rem" }, 0);
  }

  // Use cases Logo Animation MOBILE
  if (window.innerWidth < 991) {
    let useCasesVisualsMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-home_client",
        start: "top 30%",
        end: "bottom center",
        scrub: 1
      }
    });
    useCasesVisualsMobile.to(".home-client_visual-wrapper", {
      y: "-100vh",
      duration: 1.8,
      stagger: { each: "0.2" }
    });
  }
});
