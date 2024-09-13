document.addEventListener("mousemove",function(elem){
    gsap.to("#cursor",{
    left:elem.x,
    top:elem.y
})
})