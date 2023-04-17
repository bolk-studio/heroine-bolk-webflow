import {gsap} from 'gsap';
import {SplitText} from "gsap/SplitText";
gsap.registerPlugin(SplitText);

gsap.set('.hero-ct',{height:window.innerHeight});
gsap.set('html,body',{overflow:'hidden'});

window.addEventListener('resize', () => {
  gsap.set('.hero-ct',{height:window.innerHeight});
});

function createCanvas() {

  console.log('test');

}
export default createCanvas
