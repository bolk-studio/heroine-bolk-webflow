const NB_TOT_IMG = document.querySelector('[marquee-element="content"]').childElementCount;
const nb_top_row = NB_TOT_IMG/2;
const nb_bottom_row = NB_TOT_IMG - nb_top_row;
// TOP ROW
document.querySelectorAll('[marquee-element="parent"][marquee-anime=""]').forEach(function(marquee_parent) {
    marquee_parent.querySelectorAll('[marquee-element="content"]').forEach(function(marquee_content) {
        for (let i=0; i<nb_top_row;i++) {
            marquee_content.removeChild(marquee_content.lastChild);
        }
    });
    console.log("fin d'un parent")
});
document.querySelectorAll('[marquee-element="parent"][marquee-anime="reverse"]').forEach(function(marquee_parent) {
    marquee_parent.querySelectorAll('[marquee-element="content"]').forEach(function(marquee_content) {
        for (let i=0; i<nb_bottom_row;i++) {
            marquee_content.removeChild(marquee_content.firstChild);
        }
    });
    console.log("fin d'un parent")
})