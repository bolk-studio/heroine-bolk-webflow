var SOUND_PLAYING = false;
const SOUND_FILE = "https://yy4684.csb.app/sound.mp3";

// Waiting until every element has loaded
var Webflow = Webflow || [];
Webflow.push(function () {
    var audio_elt;

    audio_elt = document.getElementById("page-audio");
    audio_elt.setAttribute("src", SOUND_FILE);
    //const audio_play_button = document.querySelectorAll('[button-sound]');
    audio_elt.load();
    var lottieWrapper_parent = document.getElementById("lottie-sound_inner");
    var whiteLottieWrapper = document.getElementById(
        "lottie-sound-white_wrapper"
    );

    var animation_white = lottie.loadAnimation({
        container: whiteLottieWrapper,
        path:
            "https://uploads-ssl.webflow.com/635804dcb2f8dac9c2128174/6407a3f549610e9030b17094_tugBTXmmQr.json",
        renderer: "canvas",
        loop: true,
        autoplay: SOUND_PLAYING,
        name: "Lottie White Sound Anim"
    });

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
    // Event Listeners
    lottieWrapper_parent.addEventListener("click", () => {
        if (SOUND_PLAYING) {
            stop_audio();
            SOUND_PLAYING = false;
        } else {
            play_audio();
            SOUND_PLAYING = true;
        }
    });

    function first_launch_site_sound() {
        play_audio();
        //lottieWrapper_parent.click();
        //audio_elt.play();
    }
});
