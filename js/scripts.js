//ID Names;

/* 
#Churchill
#Victoria

#Protest1
#Protest2
#Protest3

//British Military
    
#BritishMilitary1
#BritishMilitary2
#BritishMilitary3

#WestIndiaCompany
#LondonTower
#ShipSailer

//Indian Military

#MilitaryShoot1
#MilitaryShoot2
#MilitaryShoot3

#IndianMilitary4
#IndianMilitary3
#IndianMilitary2
#IndianMilitary1

//Maps

#BritishMap
#IndiaMap 
*/
  
var tl = gsap.timeline();

tl.fromTo("#IndiaMap", 
{ x: -100, y: 100, opacity: 0, duration: 1, scale: 1.5}, 
{ x: -200, y: 0, opacity: 1, duration: 6, scale: 1.5});

ScrollTrigger.create({
  animation: tl,
  trigger: "#IndiaMap",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#BritishMap",
{ x: -850, y: 100, opacity: 0 },
{ x: -250, y: -10, opacity: 1, duration: 5});

ScrollTrigger.create({
  animation: tl,
  trigger: "#BritishMap",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#IndiaMap",
{opacity: 0, duration: 5,});

tl.to("#BritishMap",
{ x: -150, y: -20, opacity: 1, duration: 5, scale: 1.2});

ScrollTrigger.create({
  animation: tl,
  trigger: "#BritishMap",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#IndianMilitary1",
{ x: 800, y: -20 , opacity: 1},
{ x: -100, y: -50 , opacity: 1, duration: 9, scale: 1, ease: "SlowMo.ease"});

ScrollTrigger.create({
  animation: tl,
  trigger: "#IndianMilitary1",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#IndianMilitary2",
{ x: 800, y: -20 , opacity: 1},
{ x: -250, y: -50, opacity: 1, duration: 4, scale: 1, ease: "SlowMo.ease"});

ScrollTrigger.create({
  animation: tl,
  trigger: "#IndianMilitary2",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#IndianMilitary3",
{ x: 100, y: -50000 , opacity: 1},
{ x: -10, y: -50, opacity: 1, duration: 4, scale: 0.5, ease: "SlowMo.ease"});

ScrollTrigger.create({
  animation: tl,
  trigger: "#IndianMilitary3",
  start: "top top +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

document.getElementById("BritishMap").addEventListener("click", function() {
  console.log("arrow clicked");
  gsap.to(".cls-87", { fill: "#c05f2a", duration: 1 });
});

tl.to("#IndianMilitary1, #IndianMilitary2, #IndianMilitary3",
{opacity: 0, duration: 5,});

tl.fromTo("#WestIndiaCompany",
{ x: 400, y: 0 , opacity: 0},
{ x: 170, y: -200 , opacity: 1, duration: 9, ease: "SlowMo.ease"});

ScrollTrigger.create({
  animation: tl,
  trigger: "#WestIndiaCompany",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#WestIndiaCompany",
{ x: 270, y: 0 , opacity: 1,duration: 10, scale: 0.25, ease: "SlowMo.ease"});

tl.fromTo("#LondonTower",
{ x: 400, y: 10 , opacity: 0},
{ x: -150, y: -200 , opacity: 1, duration: 4});

ScrollTrigger.create({
  animation: tl,
  trigger: "#LondonTower",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#LondonTower",
{ x: 100, y: 20 , opacity: 1, duration: 6, scale: 0.5});


tl.to("#BritishMap",
{ x: -350, y: -20, opacity: 1, duration: 5});

tl.to("#LondonTower",
{ x: -100, y: 20, opacity: 1, duration: 5});

tl.to("#WestIndiaCompany",
{ x: 70, y: 0, opacity: 1, duration: 5});

tl.fromTo("#Protest3",
{ x: -100, y: 0 , opacity: 0},
{ x: 150, y: 10 , opacity: 1, duration: 4});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest3",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#Protest2",
{ x: -100, y: 0 , opacity: 0},
{ x: -10, y: 0 , opacity: 1, duration: 4});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest2",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#Protest1",
{ x: -100, y: 0 , opacity: 0},
{ x: 0, y: 0 , opacity: 1, duration: 4});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest1",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#IndiaMap", 
{ x: -100, y: 100, opacity: 0, duration: 1, scale: 1.5}, 
{ x: -200, y: 0, opacity: 1, duration: 6, scale: 1.5});
ScrollTrigger.create({
  animation: tl,
  trigger: "#IndiaMap",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#Protest1, #Protest2, #Protest3",
{ x: 5, scale: 0.75, duration: 5,});

tl.fromTo("#MilitaryShoot1",
{ x: 0, y: 50 , opacity: 0},
{ x: -500, y: 30 , opacity: 1, duration: 4, scale: 1.5, ease: "SlowMo.ease"});
ScrollTrigger.create({
  animation: tl,
  trigger: "#MilitaryShoot1",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});
tl.fromTo("#MilitaryShoot2",
{ x: 0, y: 50 , opacity: 0},
{ x: -350, y: 10 , opacity: 1, duration: 4, scale: 1.5, ease: "SlowMo.ease"});
ScrollTrigger.create({
  animation: tl,
  trigger: "#MilitaryShoot2",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});
tl.fromTo("#MilitaryShoot3",
{ x: 0, y: 50 , opacity: 0},
{ x: -500, y: 0 , opacity: 1, duration: 4, scale: 1.5, ease: "SlowMo.ease"});
ScrollTrigger.create({
  animation: tl,
  trigger: "#MilitaryShoot3",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#Protest1",
{ y: 50 , scale: 0.25, duration: 5,});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest1",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});
tl.to("#MilitaryShoot2",
{ x: -240, y: 50 , scale: 0.75, duration: 5,});
ScrollTrigger.create({
  animation: tl,
  trigger: "#MilitaryShoot2",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#Protest3",
{ y: 110, x: 50, scale: 0.25, duration: 5,});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest3",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});
tl.to("#MilitaryShoot1",
{ x: -280, y: 90 , scale: 0.75, duration: 5,});
ScrollTrigger.create({
  animation: tl,
  trigger: "#MilitaryShoot1",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#Protest2",
{ y: 160, x: 60, scale: 0.25, duration: 5,});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest2",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});
tl.to("#MilitaryShoot3",
{ x: -250, y: 100 , scale: 0.75, duration: 5,});
ScrollTrigger.create({
  animation: tl,
  trigger: "#MilitaryShoot3",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#Protest1, #Protest2, #Protest3, #MilitaryShoot1, #MilitaryShoot2, #MilitaryShoot3",
{opacity: 0, duration: 5,})

tl.fromTo("#Victoria",
{ x: 0, y: 0 , opacity: 0},
{ x: 300, y: 0 , opacity: 1, duration: 4, scale: 0.75});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Victoria",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#Protest2",
{ x: -100, y: 0 , opacity: 0},
{ x: 80, y: -25 , opacity: 1, duration: 4, scale: 0.75});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest2",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#Protest1",
{ x: -100, y: 0 , opacity: 0},
{ x: 110, y: 10 , opacity: 1, duration: 4, scale: 0.75});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest1",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#Protest1, #Protest2, #Protest3, #Victoria",
{opacity: 0, duration: 5});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Protest1, #Protest2, #Protest3, #Victoria",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#MilitaryShoot1,#MilitaryShoot2,#MilitaryShoot3,#IndianMilitary4,#IndianMilitary3,#IndianMilitary2,#IndianMilitary1",
{ x: -350, y: 0 , opacity: 0},
{ x: 200, y: 20 , opacity: 1, duration: 4, scale: 0.5, delay: 3});
ScrollTrigger.create({
  animation: tl,
  trigger: "#MilitaryShoot1,#MilitaryShoot2,#MilitaryShoot3,#IndianMilitary4,#IndianMilitary3,#IndianMilitary2,#IndianMilitary1",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#MilitaryShoot1,#MilitaryShoot2,#MilitaryShoot3,#IndianMilitary4,#IndianMilitary3,#IndianMilitary2,#IndianMilitary1",
{opacity: 0, duration: 5});

tl.to("#WestIndiaCompany",
{ x: 410, y: -70 , opacity: 0, duration: 5, scale: 0.5, delay: 3});
ScrollTrigger.create({
  animation: tl,
  trigger: "#WestIndiaCompany",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.fromTo("#Churchill",
{ x: 100, y: 50 , opacity: 0, scale: 0.5},
{ x: 250, y: -30 , opacity: 1, duration: 4, scale: 1});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Churchill",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#Churchill",
{ x: 420, y: -30 , opacity: 1, duration: 4, scale: 1});
ScrollTrigger.create({
  animation: tl,
  trigger: "#Churchill",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#IndiaMap",
{ x: 420, y: -30 , opacity: 1, duration: 4, scale: 1, delay: 2});
ScrollTrigger.create({
  animation: tl,
  trigger: "#IndiaMap",
  start: "top center +=2000px",
  end: "bottom center +=2000px",
  scrub: 5,
});

tl.to("#LondonTower",
{ opacity: 0});

tl.to("#BritishMap",
{ x: -280, y: -70 , opacity: 1, duration: 4, scale: 1.5,});

tl.to("#Churchill, #BritishMap",
{opacity: 0, duration: 5})