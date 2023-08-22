//GSAP : greensock animtion
//GSAP : can hold multiple css properties we can do multiple works with the help of css properties in GSAP  
//Animation to : to move a object into its initial position to final position it cald animation and we are use "To" for this .

// gsap.to("#box",{
//     x:900,
//     duration:2,
//     delay:1,
//     background:"linear-gradient(crimson,orange)",
//     rotate:360,
//     scale: .5
// })

//GSAP : "from" is also used in the from of GSAP "to" Function.
//Animations from : to move a object from its final position to initial position is called animation "from".

// gsap.from("#box",{
//     x:900,
//     duration:2,
//     delay:1,
//     background:"linear-gradient(crimson,orange)",
//     rotate:360,
//     scale: .5
// })

//If there are multiple objects of same type then we can use stagger to do time steping .

// gsap.to("h1",{
//         x:900,
//         duration:1,
//         delay:.5,
//         color:"orange",
//         // stagger:.5,
//         repeat:-1,
//         yoyo:true,
//     })

//To do things synchronously we need to use Time Line in GSAP.
// if we doesnt use Time Line then we need to use gsap.to which in not asynchronously or not perfrom in exact time.

var ts = gsap.timeline();

ts.to("h1",{
    x:900,
    duration:1,
})
ts.to("h2",{
    x:900,
    duration:1,
})
ts.to("h3",{
    x:900,
    duration:1,
})