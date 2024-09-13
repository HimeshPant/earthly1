document.addEventListener("mousemove",function(elem){
    gsap.to("#cursor",{
    left:elem.x,
    top:elem.y
})
})
var hi=gsap.timeline()
hi.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:1,
})
hi.from(".loader",{
    rotate:360,
    repeat:-1,

})
gsap.to(".page1",{
    onstart:function(){
        var counter=document.querySelector(".counter h1");
        var grow=0;
        setInterval(()=>{
            if(grow<100){
                grow++;
                counter.innerHTML=grow++;
            }
            else{
                grow=100;
                counter.innerHTML=grow;
            }
        },33);
    }
})
hi.to(".page1",{
    opacity:0,
    // delay to be very carefully used as it will make repeting user experience bad
    // delay:1
})