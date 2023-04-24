window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin();
  /*// Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }*/

  // Code for text animations
  // Split text into spans
  let typeSplit_chars = new SplitType("[text-split='chars']", {
    types: "chars,words",
    tagName: "span"
  });
  let typeSplit_words = new SplitType("[text-split='words']", {
    types: "words",
    tagName: "span"
  });
  let typeSplit_lines = new SplitType("[text-split='lines']", {
    types: "lines",
    tagName: "span"
  });
  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });

  // Define Text Animation
  // Text Animation 1 - Letters Slide UP/Label
  /*if (window.innerWidth > 992) {
    $("[letters-slide-up]").each(function (index) {
      let lettersSlideUp = gsap.timeline({
        scrollTrigger: {
          trigger: $(this).closest("section"),
          start: "top center",
          end: "top top",
          scrub: 1
        }
      });
      lettersSlideUp.from($(this).find(".char"), {
        yPercent: 150,
        ease: "power1.out",
        stagger: { amount: 0.4 }
      });
    });
  }

  if (window.innerWidth < 991) {
    $("[letters-slide-up]").each(function (index) {
      let lettersSlideUp = gsap.timeline({
        scrollTrigger: {
          trigger: $(this).closest("section"),
          start: "top 90%",
          end: "top center",
          scrub: 1
        }
      });
      lettersSlideUp.from($(this).find(".char"), {
        yPercent: 150,
        ease: "power1.out",
        stagger: { amount: 0.4 }
      });
    });
  }*/

  // Text Animation 2 - Fill text with color (by char)
  $("[scrub-each-word]").each(function (index) {
    let wordAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        end: "bottom bottom",
        scrub: 1
      }
    });
    wordAnimation.to($(this).find(".char"), {
      color: "black",
      duration: 0.2,
      ease: "power1.out",
      stagger: { each: 0.4 }
    });
  });

  // Text Animation 3 - Parallax Overline / Heading / Text
  $("[layout='overline'][parallax]").each(function (index) {
    let parallaxOverline = gsap.timeline({
      scrollTrigger: {
        trigger: $(this).closest("section"),
        start: "top 75%",
        end: "top top",
        duration: 1,
        scrub: 0.8
      }
    });
    parallaxOverline.from($(this), { y: "8rem" });
  });

  $("[layout='heading'][parallax]").each(function (index) {
    let parallaxHeading = gsap.timeline({
      scrollTrigger: {
        trigger: $(this).closest("section"),
        start: "top 75%",
        end: "top top",
        duration: 1,
        scrub: 0.8
      }
    });
    parallaxHeading.from($(this), { y: "16rem" });
  });

  $("[layout='text'][parallax]").each(function (index) {
    let parallaxText = gsap.timeline({
      scrollTrigger: {
        trigger: $(this).closest("section"),
        start: "top center",
        end: "top top",
        duration: "0,5",
        scrub: 0.8
      }
    });
    parallaxText.from($(this), { y: "32rem" });
  });

  // NavBar TOP Dark to Light Color Change
  $("[navbar='light']").each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 1%",
      end: "bottom 10%",
      onEnter: () => {
        $(".w-nav").addClass("is_navbar-light");
      },
      onEnterBack: () => {
        $(".w-nav").addClass("is_navbar-light");
      }
    });
  });

  $("[navbar='no-gradient']").each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 1%",
      end: "bottom 10%",
      onEnter: () => {
        $(".w-nav").addClass("is_no-gradient");
        $(".w-nav").removeClass("is_navbar-light");
      },
      onEnterBack: () => {
        $(".w-nav").addClass("is_no-gradient");
        $(".w-nav").removeClass("is_navbar-light");
      }
    });
  });

  $("[navbar='dark']").each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 1%",
      end: "bottom 10%",
      onEnter: () => {
        $(".w-nav").removeClass("is_navbar-light");
        $(".w-nav").removeClass("is_no-gradient");
      },
      onEnterBack: () => {
        $(".w-nav").removeClass("is_navbar-light");
        $(".w-nav").removeClass("is_no-gradient");
      }
    });
  });

  // NavBar BOTTOM Dark to Light Color Change
  $("[navbar='light']").each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 90%",
      end: "bottom 90%",
      onEnter: () => {
        $(".navbottom_component,.contact_wrapper").addClass("is_navbar-light");
      },
      onEnterBack: () => {
        $(".navbottom_component,.contact_wrapper").addClass("is_navbar-light");
      }
    });
  });

  $("[navbar='dark']").each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 90%",
      end: "bottom 90%",
      onEnter: () => {
        $(".navbottom_component,.contact_wrapper").removeClass(
          "is_navbar-light"
        );
      },
      onEnterBack: () => {
        $(".navbottom_component,.contact_wrapper").removeClass(
          "is_navbar-light"
        );
      }
    });
  });

  $("[navbar='no-gradient']").each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 90%",
      end: "bottom 90%",
      onEnter: () => {
        $(".navbottom_component,.contact_wrapper").removeClass(
          "is_navbar-light"
        );
      },
      onEnterBack: () => {
        $(".navbottom_component,.contact_wrapper").removeClass(
          "is_navbar-light"
        );
      }
    });
  });
  //}

  // Change Mouse on Hover On desktop ONLY
  // Mouse with Text
  if (window.innerWidth > 992) {
    $("[cursor-text]").on("mouseenter", function () {
      // Lines 120 & 123 > rotation cursor
      //let randomNumber = gsap.utils.random(-10, 10);
      //$(".cursor_default").css("transform", `rotate(${randomNumber}deg)`);
      let cursorText = $(this).attr("cursor-text");
      $(".cursor_text").text(cursorText);
      //$(".cursor").css("opacity", "1");
      $(".cursor_default").addClass("is_big-cursor");
      $(".cursor_text").addClass("is_cursor-text");
    });

    $("[cursor-text]").on("mouseleave", function () {
      //$(".cursor").css("opacity", "0");
      $(".cursor_default").removeClass("is_big-cursor");
      $(".cursor_text").removeClass("is_cursor-text");
    });

    // Mouse with Player
    $("[cursor-player]").on("mouseenter", function () {
      $(".cursor_default").addClass("is_medium-cursor");
      $(".cursor_player").addClass("is_cursor-player");
    });

    $("[cursor-player]").on("mouseleave", function () {
      $(".cursor_default").removeClass("is_medium-cursor");
      $(".cursor_player").removeClass("is_cursor-player");
    });

    // Mouse with Arrow
    $("[cursor-arrow]").on("mouseenter", function () {
      $(".cursor_default").addClass("is_medium-cursor");
      $(".cursor_arrow").addClass("is_cursor-arrow");
    });

    $("[cursor-arrow]").on("mouseleave", function () {
      $(".cursor_default").removeClass("is_medium-cursor");
      $(".cursor_arrow").removeClass("is_cursor-arrow");
    });

    // Mouse On NavBar Open Dropdown
    $("[nav-cursor]").on("mouseenter", function () {
      $(".cursor_default").addClass("is_nav-cursor");
      $(".cursor_arrow-nav").addClass("is_nav-cursor");
      $(".cursor_dot").addClass("is_nav-cursor");
    });

    $("[nav-cursor]").on("mouseleave", function () {
      $(".cursor_default").removeClass("is_nav-cursor");
      $(".cursor_arrow-nav").removeClass("is_nav-cursor");
      $(".cursor_dot").removeClass("is_nav-cursor");
    });

    // Mouse Cursor Top
    $("[cursor-top]").on("mouseenter", function () {
      $(".cursor_default").addClass("is_big-cursor");
      $(".cursor-top_wrapper").addClass("is_cursor-top");
    });

    $("[cursor-top]").on("mouseleave", function () {
      $(".cursor_default").removeClass("is_big-cursor");
      $(".cursor-top_wrapper").removeClass("is_cursor-top");
    });
  }

  //Contact Animation
  if (window.innerWidth > 992) {
    let handsAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-home_contact",
        start: "top 55%",
        end: "bottom bottom-=60",
        ease: "power1.inOut",
        scrub: 1
      }
    });
    handsAnimation
      .from(
        ".contact_right-hand-wrapper",
        { x: "50vw", duration: 1.8 },
        "rightHand"
      )
      .from(".contact_left-hand-wrapper", { x: "-50vw", duration: 1.8 }, 0)
      .fromTo(
        ".contact_top-content-component",
        {
          width: "0rem",
          height: "0rem"
        },
        {
          width: "350vw",
          height: "350vw",
          duration: 6
        }
      )
      .from("[contact='heading-left']", { x: "-80vw", duration: 1.8 }, "<-=70%")
      .from("[contact='tag-right']", { x: "60vw", duration: 1.8 }, "<")
      .from("[contact='heading-right']", { x: "60vw", duration: 1.8 }, "<15%");
  }
  if (window.innerWidth < 991) {
    let handsAnimationMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-home_contact",
        start: "top 60%",
        end: "bottom 55%",
        ease: "power1.inOut",
        scrub: 1
      }
    });
    handsAnimationMobile
      .from(
        ".contact_right-hand-wrapper",
        { x: "50vw", duration: 2 },
        "rightHand"
      )
      .from(".contact_left-hand-wrapper", { x: "-50vw", duration: 2 }, 0)
      .fromTo(
        ".contact_top-content-component",
        {
          width: "0rem",
          height: "0rem"
        },
        {
          width: "350vw",
          height: "350vw",
          duration: 6
        }
      )
      .from(
        "[contact='heading-left']",
        { x: "-100vw", duration: 1.8 },
        "<-=70%"
      )
      .from("[contact='tag-right']", { x: "80vw", duration: 1.8 }, "<")
      .from("[contact='heading-right']", { x: "80vw", duration: 1.8 }, "<15%");
  }
});
