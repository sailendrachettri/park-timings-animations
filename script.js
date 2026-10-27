gsap.registerPlugin(ScrollTrigger);

gsap.to("#main img", {
  scale: 1.3,
  ease: "none",

  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "+=100",
    scrub: 1,
    pin: true,
    markers: true,
    anticipatePin: 1
  }
});