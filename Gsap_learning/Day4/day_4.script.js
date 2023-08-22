var ani = gsap.timeline();

ani.from("nav",{
    y:-100,
    opacity: 0,
    duration:1
})

ani.from("nav .logo",{
    y:-100,
    opacity: 0,
    duration:1
})
ani.from("nav ul li",{
    y:-100,
    opacity: 0,
    duration:1,
    stagger:.5
})

ani.from("nav #signup",{
    y:-100,
    opacity: 0,
    duration:1,
})

ani.from(".left h1",{
    x:-800,
    opacity: 0,
    duration:1,
    stagger:.5,
})
ani.from(".left h1 img",{
    scale:0,
    opacity: 0,
    duration:1,
    stagger:.5,
})
ani.from(".right img",{
    x:100,
    scale:0,
    opacity: 0,
    duration:1,
    stagger:.5,
})
ani.from(".page2 .textbox",{
    scale:0,
    opacity: 0,
    duration:1,
})
ani.from(".page2 .textbox h1",{
    scale:0,
    opacity: 0,
    duration:1,
    stagger:.5,
})
ani.from(".page2 .textcontent h4",{
    opacity: 0,
    duration:1,
})
ani.from(".page2 .textcontent button",{
    scale: 0,
    duration:1,
    stagger:.5,
        scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 4,
    }
})
ani.from(".page2 .box1,.box2,.box3",{
    x:100,
    opacity: 0,
    scale:0,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 4,
    }
})
