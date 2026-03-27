let originalPath = `M 100 80 Q 750 80 1480 80`
let curve = document.querySelector(".curve")

curve.addEventListener("mousemove", (e) => {

    let bounds = curve.getBoundingClientRect()

    let x = e.clientX - bounds.left
    let y = e.clientY - bounds.top

    let newPath = `M 100 80 Q ${x} ${y} 1480 80`

    gsap.to("svg path", {
        attr: { d: newPath },
        duration: 0.15,
        ease: "power2.out",
        overwrite: true,

    })
})

curve.addEventListener("mouseleave", () => {

    gsap.to("svg path", {
        attr: { d: originalPath },
        duration: 1,
        ease: "elastic.out(1,0.1)",

    })

})

function Animation() {
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            gsap.to(".scroll", {
                transform: "translateX(-200%)",
                duration: 4,
                ease: "none",
                repeat: -1,

            })

            gsap.to(".scroll img", {
                rotate: 180,
            })
        }

        else {
            gsap.to(".scroll", {
                transform: "translateX(0%)",
                duration: 4,
                ease: "none",
                repeat: -1,

            })
            gsap.to(".scroll img", {
                rotate: 0,
            })
        }

    })
}

Animation();


function page1Animation() {
    let time = gsap.timeline()
    time.from(".nav .right , .nav .left", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        stagger: 0.4,

    })

    time.from(".left-heading h1", {
        x: -130,
        opacity: 0,
        duration: 0.5,
        delay: 0.4
    })

    time.from(".left-heading p", {
        x: -90,
        opacity: 0,
        duration: 0.4,
        delay: 0.2
    })

    time.from("#btn-2-Book", {
        x: -70,
        opacity: 0,
        duration: 0.4,
        delay: 0.2
    })

    time.from(".right-heading img", {
        x: 170,
        opacity: 0,
        duration: 0.4,
        delay: 0.2
    }, "-=1")

    time.from("#icons img", {

        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        stagger: 0.2,
        ease: "elastic.out(1,0.6)",
    },)


    time.from("#Services h3", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        ease: "elastic.out(1,0.6)",
    }, "start")

    time.from("#Services p", {
        x: 40,
        opacity: 0,
        duration: 0.7,
        ease: "elastic.out(1,0.6)",
    }, "start")

}
page1Animation()

function page2Animation() {
    let time1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#cards",
            scroller: "body",
            start: "top 50%",
            end: "top -50%",
            scrub: 2,

        }
    })

    time1.from(".card-1.left-1", {
        x: -200,
        opacity: 0,
        duration: 1,

    }, "same")

    time1.from(".card-1.right-1", {
        x: 200,
        opacity: 0,
        duration: 1,

    }, "same")
}
page2Animation()


function page3Animation() {
    let time2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            scrub: 2,
            start: "top 50%",
            end: "top 10%"

        }
    })

    time2.from(".contact-lines", {
        x: -200,
        opacity: 0,
    }, "same1")

    time2.from(".contact-img img", {
        x: 200,
        opacity: 0,
    }, "same1")
}
page3Animation()

function page4Animation() {
    let time3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#case-study",
            scrub: 2,
            start: "top 50%",
            end: "top 10%"

        }
    })

    time3.from(".case-study h3", {
        x: -200,
        opacity: 0,
    }, "same3")

    time3.from(".case-study p", {
        x: 200,
        opacity: 0,
    }, "same3")

    time3.from(".contant-2.first", {
        x: -200,
        opacity: 0,

    }, "all")

    time3.from(".contant-2.second", {
        y: 200,
        opacity: 0,

    }, "all")

    time3.from(".contant-2.third", {
        x: 200,
        opacity: 0,

    }, "all")

}
page4Animation()

function page5Animation() {
    let time4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#team",
            scrub: 2,
            start: "top 50%",
            end: "top 10%"
        }
    })

    time4.from(".team-1 h3", {
        x: -200,
        opacity: 0,
    }, "all-1")

    time4.from(".team-1 p", {
        x: 200,
        opacity: 0,
    }, "all-1")


}
page5Animation()


let footer = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        start: "top 85%",
    }
})
footer.from(".logo , .navbar-2, .social-2", {
    y: -40,
    opacity: 0,
    stagger: 0.3,
    duration: 0.8,
    ease: "elastic.out(1,0.8)",

})

let leftFooter = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer-address",
        start: "top 85%",
    }
})

leftFooter.from(".contactUS,.email, .Phone , .address", {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: "elastic.out(1,0.8)",
}, "start")

leftFooter.from(".right-footer", {
    y: -60,
    opacity: 0,
    duration: 0.9,
    ease: "elastic.out(1,0.8)",
}, "start")



