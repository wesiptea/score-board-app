// button click event signals an event - and event listeners...
// functions that add points indiceated on each button when click occurs
// change to the score above
// possible additional features: new match; store game scores; message when a player reaches 10 pts

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

let countHome = 0;
let countGuest = 0;

// home count
function add1() {
    console.log("clicked +1 Home")
    countHome += 1;
    homeEl.textContent = countHome;
};

function add2() {
    console.log("clicked +2 Home")
    countHome += 2;
    homeEl.textContent = countHome;
};

function add3() {
    console.log("clicked +3 Home")
    countHome += 3;
    homeEl.textContent = countHome;
};

// guest count
function add1guest() {
    console.log("clicked +1 Guest")
    countGuest += 1;
    guestEl.textContent = countGuest;
};

function add2guest() {
    console.log("clicked +2 Guest")
    countGuest += 2;
    guestEl.textContent = countGuest;
};

function add3guest() {
    console.log("clicked +3 Guest")
    countGuest += 3;
    guestEl.textContent = countGuest;
};

function resetBtn() {
    console.log("clicked Reset")
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    homeCount = 0;
    guestCount = 0;
}