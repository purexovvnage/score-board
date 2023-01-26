import './style.css'


const btnHomeOne = document.getElementById("home-one")
const btnHomeTwo = document.getElementById("home-two")
const btnHomeThree = document.getElementById("home-three")
const btnGuestOne = document.getElementById("guest-one")
const btnGuestTwo = document.getElementById("guest-two")
const btnGuestThree = document.getElementById("guest-three")

const homeEl = document.getElementById("home-score")
const guestEl = document.getElementById("guest-score")

var homeScore = 0
var guestScore = 0

homeEl.textContent = homeScore
guestEl.textContent = guestScore

btnHomeOne.addEventListener('click',addHomeScoreOne)
btnHomeTwo.addEventListener('click',addHomeScoreTwo)
btnHomeThree.addEventListener('click',addHomeScoreThree)
btnGuestOne.addEventListener('click',addGuestScoreOne)
btnGuestTwo.addEventListener('click',addGuestScoreTwo)
btnGuestThree.addEventListener('click',addGuestScoreThree)



function addHomeScoreOne() {
  homeScore += 1
  homeEl.textContent = homeScore
}

function addHomeScoreTwo() {
  homeScore += 2
  homeEl.textContent = homeScore
}

function addHomeScoreThree() {
  homeScore += 3
  homeEl.textContent = homeScore
}

function addGuestScoreOne() {
  guestScore += 1
  guestEl.textContent = guestScore
}

function addGuestScoreTwo() {
  guestScore += 2
  guestEl.textContent = guestScore
}

function addGuestScoreThree() {
  guestScore += 3
  guestEl.textContent = guestScore
}
