function loco(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();

// var clutter = "";

// document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
//     clutter += `<span> ${dets} </span>`

//     document.querySelector("page2>h2").innerHTML = "clutter";
// })

var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


// gsap.to("#page2>h1>span",){
//     ScrollTrigger : {
//         trigger : `#page2>h1>span`,
//         start :`top bottom`,
//         end : `bottom top`,
//         scrub: .5
//         markers : true
//     }
//     stagger ; .2,
//     color ; white
// }

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})


function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./images/bridges00007.png
  ./images/bridges00010.png
  ./images/images/brides00013.png
  ./images/bridges00019.png
  ./images/bridges00022.png
  ./images/bridges00025.png
  ./images/bridges00028.png
  ./images/bridges00031.png
  ./images/bridges00034.png
  ./images/bridges00037.png
  ./images/bridges00040.png
  ./images/bridges00043.png
  ./images/bridges00046.png
  ./images/bridges00049.png
  ./images/bridges00052.png
  ./images/bridges00055.png
  ./images/bridges00058.png
  ./images/bridges00061.png
  ./images/bridges00064.png
  ./images/bridges00067.png
  ./images/bridges00070.png
  ./images/bridges00073.png
  ./images/bridges00076.png
  ./images/bridges00079.png
  ./images/bridges00082.png
  ./images/bridges00085.png
  ./images/bridges00088.png
  ./images/bridges00091.png
  ./images/bridges00094.png
  ./images/bridges00097.png
  ./images/bridges00100.png
  ./images/bridges00103.png
  ./images/bridges00106.png
  ./images/bridges00109.png
  ./images/bridges00112.png
  ./images/bridges00115.png
  ./images/bridges00118.png
  ./images/bridges00121.png
  ./images/bridges00124.png
  ./images/bridges00127.png
  ./images/bridges00130.png
  ./images/bridges00133.png
  ./images/bridges00136.png
  ./images/bridges00139.png
  ./images/bridges00142.png
  ./images/bridges00145.png
  ./images/bridges00148.png
  ./images/bridges00151.png
  ./images/bridges00154.png
  ./images/bridges00157.png
  ./images/bridges00160.png
  ./images/bridges00163.png
  ./images/bridges00166.png
  ./images/bridges00169.png
  ./images/bridges00172.png
  ./images/bridges00175.png
  ./images/bridges00178.png
  ./images/bridges00181.png
  ./images/bridges00184.png
  ./images/bridges00187.png
  ./images/bridges00190.png
  ./images/bridges00193.png
  ./images/bridges00196.png
  ./images/bridges00199.png
  ./images/bridges00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()

var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
    scrollTrigger:{
        trigger:`#page4>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})


