
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
    tl.from(".text h1", {
        y: 200,
        opacity: 0,
        stagger: {
            amount: 0.5
        },
        duration:0.8    
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


Shery.imageEffect(".images",{
    style:6,
    debug:true,
    gooey:true,
    config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.793129423618648},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}}
})