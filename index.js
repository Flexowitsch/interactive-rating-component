const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgainButton = document.getElementById("rateAgain")
const actualRating = document.getElementById("rating")
const rates = document.querySelectorAll(".rating-button")
const inactiveButton = document.getElementById("inactive")
const errorPrompt = document.querySelector(".error")

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
})

inactiveButton.addEventListener("click",() => {
  errorPrompt.style.display = "flex"
})

//logic for the buttons
rates.forEach((rating) => {
    rating.addEventListener("click", () => {
      rating.style.background = "var(--orange)"
      rating.style.color = "var(--white)"
      actualRating.innerHTML = rating.innerHTML
      submitButton.classList.remove("hidden")
      inactiveButton.style.display = "none"
      errorPrompt.style.display = "none"
      //this reverts the style of the selected rating - no idea why it works
      rateAgainButton.addEventListener("click", () => {
        rating.style.background = "#262E38"
        rating.style.color = "var(--medium-grey)"
      })
    })
  })

  //reverts back to the initial state
  rateAgainButton.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
    submitButton.classList.add("hidden")
    inactiveButton.style.display = "block"
  })