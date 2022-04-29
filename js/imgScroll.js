const peon = document.querySelector('#hoverPEON');
const stoneskin = document.querySelector('#hoverSS');
const undead = document.querySelector('#hoverUD');
const synth = document.querySelector('#hoverSYNTH');

const aidan = document.querySelector('#hoverAIDAN');
const angvs = document.querySelector('#hoverANGVS');
const tom = document.querySelector('#hoverTOM');

//pictures change as top passes 3/4 up the view window
let scrollAmount = -3*window.innerHeight/4;

//update height on resize
window.addEventListener("resize", function() {
    scrollAmount = -3*window.innerHeight/4;
}, false);

window.addEventListener('scroll', (event) => {
    const peonPOSITION = peon.getBoundingClientRect();
    peon.style.opacity = peonPOSITION.top - window.innerHeight < scrollAmount ? 1 : 0;
    
    const stoneskinPOSITION = stoneskin.getBoundingClientRect();
    stoneskin.style.opacity = stoneskinPOSITION.top - window.innerHeight < scrollAmount ? 1 : 0;
    
    const undeadPOSITION = undead.getBoundingClientRect();
    undead.style.opacity = undeadPOSITION.top - window.innerHeight < scrollAmount ? 1 : 0;
    
    const synthPOSITION = synth.getBoundingClientRect();
    synth.style.opacity = synthPOSITION.top - window.innerHeight < scrollAmount ? 1 : 0;
    
    const aidanPOSITION = aidan.getBoundingClientRect();
    aidan.style.opacity = aidanPOSITION.top - window.innerHeight < scrollAmount ? 1 : 0;
    
    const angvsPOSITION = angvs.getBoundingClientRect();
    angvs.style.opacity = angvsPOSITION.top - window.innerHeight < scrollAmount ? 1 : 0;
    
    const tomPOSITION = tom.getBoundingClientRect();
    tom.style.opacity = tomPOSITION.top - window.innerHeight < scrollAmount ? 1 : 0;
});