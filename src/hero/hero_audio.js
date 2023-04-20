
function first_launch_site_sound() {
    if (window.sessionStorage.getItem('firstload') == null) {
        play_audio();
    }
}
