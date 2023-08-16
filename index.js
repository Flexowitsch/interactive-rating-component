const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgainButton = document.getElementById("rateAgain")
const actualRating = document.getElementById("rating")
const rates = document.querySelectorAll(".rating-button")

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
})

rateAgainButton.addEventListener("click", () => {
  thanksContainer.classList.add("hidden")
  mainContainer.style.display = "block"
})

rates.forEach((rating) => {
    rating.addEventListener("click", () => {
     actualRating.style.background =" #fafafa"
      actualRating.innerHTML = rating.innerHTML
    })
  })