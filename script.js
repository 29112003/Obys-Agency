// loader 
function loader(){
    gsap.from(".loader .load h1",{
        y : 140,
        duration:1,
        delay:0.4,
        stagger:0.2,
    })

    console.log(Math.floor(Math.random()*10));

var timer = document.querySelector(".timer h4")

var counter = 0;
var interval = setInterval(function(){
    if(counter <= 100){
        counter+= Math.floor(Math.random()*10);
        console.log(counter);
        timer.innerHTML = counter;
    }else{
        timer.innerHTML = 100;

            clearInterval(interval);
    }
},50)

}


loader();