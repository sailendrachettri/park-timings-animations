gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "+=100",
    scrub: 1,
    pin: true,
    markers: true,
    anticipatePin: 1,
  },
});

tl1.to("#main img", {
  scale: 1.2,
  ease: "none",
  duration: 3,
});

tl1.to("#head1, #head2", {
  opacity: 0,
  ease: "none",
  duration: 1,
});

tl1.to("#title", {
  opacity: 1,
  ease: "none",
  duration: 1,
});

// page 1 yellow sun
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "+=300",
    pin: true,
    scrub: 1,
    markers: true,
  },
});

tl2.to("#page1", {
  backgroundColor: "#F9C518",
});

tl2.to("#page1 #sun", {
  opacity: 1
});

tl2.to("#page1", {
  backgroundColor: "white",
});

tl2.from("#page1 #sun", {
  scale: 100,
  // duration: 13,
  filter: "blur(10px)"
});
