document.addEventListener("mousemove", function(elem) {
    gsap.to("#cursor", {
        left: elem.x,
        top: elem.y
    });
});

var hi = gsap.timeline();

// Animate text appearance
hi.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 1
})
.from(".loader", {
    rotate: 360,
    repeat: -1,
});

// Counter animation
gsap.to(".page1", {
    onStart: function() {
        var counter = document.querySelector(".counter h1");
        var grow = 0;
        setInterval(() => {
            if (grow < 100) {
                grow++;
                counter.innerHTML = grow;
            } else {
                grow = 100;
                counter.innerHTML = grow;
            }
        }, 16);
    }
});

// Animation for .page1
hi.to(".page1", {
    opacity: 0,
    backgroundColor: "#000", // Background color change to black
    //  duration: 1, // Duration should match the opacity transition
    // ease: "power1.inOut" // Optional: Adds easing for smoother transition
});
