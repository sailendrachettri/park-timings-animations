
gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "+=500",
    scrub: 1,
    pin: true,
    markers: true,
    anticipatePin: 1,
  }
});

tl1.to("#main img", {
  scale: 1.5,
  ease: "none",
  duration: 3,
});

tl1.to("#head", {
  opacity: 0,
  ease: "none",
  duration: 1,
});

tl1.to("#title", {
  opacity: 1,
  ease: "none",
  duration: 1,
});
