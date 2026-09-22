function pageone(){
    var tl=gsap.timeline()

tl.from("nav h1,nav h4 ,nav button",{
    y:-40,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.2

})
tl.from(".center-part1 h1",{
    x:-600,
    opacity:0,
    duration:0.4
},"cs")
tl.from(".center-part1 p",{
    x:-600,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 button",{
     x:-600,
    opacity:0,
    duration:0.6
})
tl.from(".center-part2",{
     x:600,
    opacity:0,
    duration:0.6,
    
},"cs")


}
pageone()

function pagetwo(){
    gsap.from(".section1bottom",{
    y:-30,
    opacity:0,
    duration:3,
     scrollTrigger:{
    trigger:".section1bottom",
    scroller:"body",
     start: "top 80%",
      scrub:2
    
    }
 
})



var t2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
       
        start:"top 90%",
        end:'top 0',
        scrub:2
    }
})

t2.from(".servise",{
    y:70,
    opacity:0,
    duration:0.4,
})
t2.from(".elem.line1.left",{
    x:-100,
    opacity:0,
    duration:1
},"sd")
t2.from(".elem.line1.right",{
    x:100,
    opacity:0,
    duration:1
},"sd")
t2.from(".elem.black.line2.left",{
    x:-100,
    opacity:0,
    duration:1
},"ss")
t2.from(".elem.line2.right",{
    x:100,
    opacity:0,
    duration:1
},"ss")
}
pagetwo()
gsap.to("#pagethree h1",{
    transform:"translateX(-190%)",
    scrollTrigger:{
        trigger:"#pagethree h1",
        scroller:'body',
        start:"top 0%",
      
    },
    duration:2,
    repeat:-1
})