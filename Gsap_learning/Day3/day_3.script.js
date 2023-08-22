gsap.from(".page1 .box",{
    scale: 0,
    duration: 2,
    delay: 1,
    rotate:360,
})
gsap.from(".page2 .box",{
    scale: 0,
    duration: 2,
    delay: 1,
    rotate:360,
    scrollTrigger:{
        trigger: ".page2 .box",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub:2,
    }
})
gsap.from(".page3 .box",{
    scale: 0,
    duration: 2,
    delay: 1,
    rotate:360,
    scrollTrigger:{
        trigger: ".page3 .box",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub:2,
    }
})