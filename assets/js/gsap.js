gsap.registerPlugin(ScrollTrigger);


gsap.set('.main__intro--text p', {
    opacity: 0,
});

const introMotion = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__intro',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        scrub: 0,
    },
});
introMotion
.addLabel('a')
.to('.main__intro--text p:nth-child(1)', {opacity: 1}, 'a')
.to('.main__intro .bg', {opacity: 1}, 'a')
.to('.main__intro--text p:nth-child(1)', {opacity: 0})
.to('.main__intro--text p:nth-child(2)', {opacity: 1})
.to('.main__intro--text p:nth-child(2)', {opacity: 0})
.to('.main__intro--text p:nth-child(3)', {opacity: 1})
.to('.main__intro--text p:nth-child(3)', {opacity: 0})
.to('.main__intro--text p:nth-child(4)', {opacity: 1})
.to('.main__intro--text p:nth-child(4)', {opacity: 0})



const showCaseMotion = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__showcase',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        scrub: 0,
    },
});
showCaseMotion
.addLabel('a')
.to('.main__showcase .bg', {opacity: 1}, 'a')
.to('.main__showcase .text1', {opacity: 1}, 'a')
.addLabel('b')
.to('.main__showcase .bg', {opacity: 0}, 'b')
.to('.main__showcase .text1 p:nth-child(1)', {xPercent: 100}, 'b')
.to('.main__showcase .text1 p:nth-child(3)', {xPercent: -100}, 'b')
.to('.main__showcase .text1', {opacity: 0})
.to('.main__showcase .item1', {height: 0})
.to('.main__showcase .item2', {height: 0})
.addLabel('c')
.to('.main__showcase .bg', {opacity: 1}, 'c')
.to('.main__showcase .text2', {opacity: 1}, 'c')


ScrollTrigger.create({
    trigger: '.header-black1',
    start: '0% 50%',
    end: '100% 20%',
    // markers: true,
    toggleClass: {targets: '.header', className: 'black'},
})



gsap.set('.main__prove .box.right', {xPercent: 100});
gsap.set('.main__prove .box.left', {xPercent: -100});

const prove1Motion = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__prove.prove1',
        start: '0% 80%',
        end: '100% 80%',
        // markers: true,
        scrub: 1,
    },
});
prove1Motion
.addLabel('a')
.to('.prove1 .main__prove--text p:nth-child(1) span', {xPercent: -172}, 'a')
.to('.prove1 .main__prove--text p:nth-child(3) span', {xPercent: 134}, 'a')
.to('.prove1 .box.right', {xPercent: 0}, 'a')
.to('.prove1 .box.left', {xPercent: 0}, 'a')



ScrollTrigger.create({
    trigger: '.theme-dark',
    start: '0% 50%',
    end: '100% 20%',
    // markers: true,
    toggleClass: {targets: 'body', className: 'dark'},
})



// 첫번째 가로스크롤 부분
const slideMotion = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__slide',
        start: '0% 0%',
        end: '100% 100%',
        scrub: true,
        invalidateOnRefresh: true,
    },
})
slideMotion.to('.main__slide--inner',{
   xPercent: -100,
   x: () => {
    return window.innerWidth;
   },
   ease: 'none'
});



gsap.set('.main__feature--title', {
    opacity: 0
});

const featureMotion = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__feature',
        start: '0 90%',
        end: '100% 30%',
        // markers: true,
        scrub: 1,
    },
});
featureMotion
.to('.main__feature--item', {x: 0, xPercent: 0})
.addLabel('a')
.to('.main__feature--title', {opacity: 1}, 'a')
.to('.main__feature', {'--afterOpacity': 1}, 'a')


// 두번째 가로스크롤 부분
gsap.set('.main__service--content1 .line-color img:nth-child(2)', {
    opacity: 0
});

const serviceMotion1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__service--content1',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        scrub: true,
        invalidateOnRefresh: true,
    },
});

serviceMotion1
.to('.main__service--content1 .sticky-content', {
    x: () => {
        return -$('.main__service--content1 .left-text').outerWidth()-100;
    }
})
.addLabel('a')
.to('.main__service--content1 .item:nth-child(1)', {x: 100}, 'a')
.to('.main__service--content1 .item:nth-child(2)', {xPercent: -100, x: 100-40}, 'a')
.to('.main__service--content1 .item:nth-child(3)', {xPercent: -100*2, x: 100-(40*2)}, 'a')
.to('.main__service--content1 .item:nth-child(4)', {xPercent: -100*3, x: 100-(40*3)}, 'a')
.to('.main__service--content1 .line-color img:nth-child(1)', {opacity: 0}, 'a')
.to('.main__service--content1 .line-color img:nth-child(2)', {opacity: 1}, 'a+2')
.to('.main__service--content1 .line-color img:nth-child(2)', {opacity: 0}, 'a+4')

const serviceMotion2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__service--content2',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        scrub: true,
        invalidateOnRefresh: true,
        toggleClass:{targets:'.main__service', className:'show1'}
    },
});

const serviceMotion3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__service--content3',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        scrub: true,
    },
});
serviceMotion3
.addLabel('a')
.to('.main__service--content3 .item:nth-child(1)', {xPercent: -100, x: -40}, 'a')
.to('.main__service--content3 .item:nth-child(2)', {xPercent: -100*2, x: -40*2}, 'a')
.to('.main__service--content3 .item:nth-child(3)', {xPercent: -100*3, x: -40*3}, 'a')
.to('.main__service--content3 .last-text', {opacity: 1})



ScrollTrigger.create({
    trigger: '.header-black2',
    start: '0% 50%',
    end: '100% 20%',
    // markers: true,
    toggleClass: {targets: '.header', className: 'black'},
})



const prove2Motion = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__prove.prove2',
        start: '0% 80%',
        end: '100% 80%',
        // markers: true,
        scrub: 1,
        // toggleClass: {targets: '.main__prove.prove1', className: 'active'},
    },
});
prove2Motion
.addLabel('a')
.to('.prove2 .main__prove--text p:nth-child(1) span', {xPercent: -100}, 'a')
.to('.prove2 .main__prove--text p:nth-child(3) span', {xPercent: 100}, 'a')
.to('.prove2 .box.right', {xPercent: 0}, 'a')
.to('.prove2 .box.left', {xPercent: 0}, 'a')



gsap.set('.main__creator--text', {
    opacity: 0
});

const creatorMotion = gsap.timeline({
    scrollTrigger: {
        trigger: '.main__creator',
        start: '0% 0%',
        end: '100% 0%',
        // markers: true,
        scrub: 1,
    },
});
creatorMotion
.to('.main__creator--text', {opacity: 1})
.to('.main__creator--text', {opacity: 0})



ScrollTrigger.create({
	trigger: '.main__join',
	start: '0% 80%',
    end: '100% 0',
    // markers: true,
    toggleClass: {targets: '.main__join', className: 'active'},
    // onEnter: function(){
    //     $('.main__join').addClass('active');
    // },
    // onEnterBack: function(){
    //     $('.main__join').removeClass('active');
    // }
});