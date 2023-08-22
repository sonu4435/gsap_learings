var ani = gsap.timeline();

ani.from(".logo",{
    y:-100,
    duration:.5,
    delay:.5,
    opacity:0,
})
ani.from(".part2 h1",{
    y:-100,
    duration:.5,
    opacity:0,
    stagger: .5,
})
ani.from(".part3 h1,.part3 button",{
    y:-100,
    duration:.5,
    opacity:0,
    stagger: .5,
})
ani.from(".images img",{
    opacity:0,
    duraction:1,
    scale:0,
    stagger:.5,
})
ani.from(".content h1",{
    scale: 0,
    duraction: 1,
    delay: .5,
    stagger: true,
})
ani.to(".scroll_btn",{
    y:40,
    scale: 1,
    duraction: 1,
    delay: .5,
    opacity: 1,
    repeat:-1,
    yoyo:true
})