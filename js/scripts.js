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

var t1 = gsap.timeline();
/* t1.fromTo("#BritishMap", 
{x: 100, opacity: 0},
{x: -250, opacity: 1, duration: 4}) */

gsap.registerPlugin(ScrollTrigger);

/* gsap.fromTo("#BritishMap", 
{x: -400, opacity: 0},
{x: -250, opacity: 1, duration: 4, scrollTrigger: "#BritishMap"});


gsap.fromTo("#IndiaMap",
{x: 400, opacity: 0},
{x: 50, opacity: 1, duration: 4, scrollTrigger: "#IndiaMap"}); */

gsap.fromTo(
  "#IndiaMap",
  { x: 850, opacity: 0 },
  { x: 50,
    opacity: 1,
    duration: 4,
    scrollTrigger: {
      trigger: "#IndiaMap",
      start: "top center",
      end: "bottom center +=2000%",
      scrub: true,
    },
  }
);

gsap.fromTo(
    
    "#ShipSailer",
    { x: 300, y: -100, opacity: 0 },
    { x: 10, opacity: 1, duration: 8, scrollTrigger: "ShipSailer" 
});

gsap.fromTo(
    "#BritishMap",
    { x: -2000, opacity: 0 },
    { x: -250,
      opacity: 1,
      scrollTrigger: {
        trigger: "#BritishMap",
        start: "top center",
        end: "bottom center +=2000%",
        scrub: true,
    },
});

gsap.fromTo(
    "#IndainMilitary1",
    { x: 300, opacity: 0 },
    { x: 110, opacity: 1,
    scrollTrigger: {
        trigger: "#IndainMilitary1",
        scrub: true,
    },
});
  