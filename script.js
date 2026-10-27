gsap.registerPlugin(ScrollTrigger);

gsap.to("#main img", {
  scale: 1.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "+=500",
    scrub: 1,
    markers: true,
    pin: true,
    anticipatePin: 1,
  }
})