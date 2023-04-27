var SOUND_PLAYING = false;
var audio_elt, animation_white;

function play_audio() {
  audio_elt.play();
  animation_white.play();
  SOUND_PLAYING = true;
}
function stop_audio() {
  audio_elt.pause();
  animation_white.stop();
  SOUND_PLAYING = false;
}

function activate_audio() {
  play_audio();
}
function deactivate_audio() {
  stop_audio();
}

// Waiting until every element has loaded
var Webflow = Webflow || [];
Webflow.push(function () {
  audio_elt = document.getElementById("page-audio");
  audio_elt.setAttribute("src", SOUND_FILE);
  //const audio_play_button = document.querySelectorAll('[button-sound]');
  audio_elt.load();
  audio_elt.volume = 0.05;

  var lottieWrapper_parent = document.getElementById("lottie-sound_inner");
  var whiteLottieWrapper = document.getElementById(
    "lottie-sound-white_wrapper"
  );

  animation_white = lottie.loadAnimation({
    container: whiteLottieWrapper,
    path:
      "https://uploads-ssl.webflow.com/635804dcb2f8dac9c2128174/6407a3f549610e9030b17094_tugBTXmmQr.json",
    renderer: "canvas",
    loop: true,
    autoplay: SOUND_PLAYING,
    name: "Lottie White Sound Anim"
  });

  lottieWrapper_parent.addEventListener("click", function (event) {
    if (SOUND_PLAYING) {
      stop_audio();
    } else {
      play_audio();
    }
  });
  // Event Listeners
  /*var observerSoundOff = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        activate_audio();
      } else {
        deactivate_audio();
      }
    },
    { threshold: [0.5] }
  );
  document
    .querySelectorAll(".section-home_hero")
    .forEach((element) => observerSoundOff.observe(element));*/

  // HomePage Sound according to Hero Section visibility
  /*let soundActivationHero = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-home_hero",
      start: "bottom 97%",
      end: "bottom 80%",
      scrub: 1
    }
  });*/
  ScrollTrigger.create({
    trigger: ".section-home_hero",
    start: "bottom 97%",
    end: "bottom 80%",
    onLeave: () => {
      stop_audio();
    }
  });
  /*function first_launch_site_sound(){
      lottieWrapper_parent.click();
      audio_elt.play();
      document.removeEventListener("mousemove",first_launch_site_sound);
    }
    // Playing the sound at load of the page
    document.addEventListener("mousemove", first_launch_site_sound);*/
});
