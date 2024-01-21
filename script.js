
var tl = gsap.timeline();

tl.from(".timer",{
    opacity : 0,
    delay:0.4
})
tl.from(".loader .load h1,.load h2",{
        y : 140,
        opacity : 0,
        duration:1,
        stagger:0.2,
    })
    tl.to(".load",{
        opacity:0,
        delay:1.6,
        stagger:-0.2
    })
    tl.to(".loader",{
        top:"-100%",
        duration:1,
        ease:"power4.out"
    })

var timer = document.querySelector(".timer h4")

var counter = 0;
var interval = setInterval(function(){
    if(counter <= 100){
        counter++;
        timer.innerHTML = counter;
    }else{
        timer.innerHTML = 100;
            clearInterval(interval);
    }
},30)



Shery.mouseFollower();