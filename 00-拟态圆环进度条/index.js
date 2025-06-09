const circle = document.getElementById("circle")
const input = document.getElementById("percent")
const number = document.querySelector(".card__number")
const tooltip = document.querySelector(".tooltip")
const btn = document.querySelector(".form__btn")

function handleInputBlur(e) {
  const value = e.target.value
  const flag = !isNaN(+value)
  if (flag) {
    tooltip.style.opacity = 0
    tooltip.classList.remove("fade-in")
  } else {
    tooltip.style.opacity = 1
    tooltip.classList.add("fade-in")
  }

  return flag
}

function showCirclePercent () {
  circle.style.strokeDashoffset = 565.2 - 565.2 * input.value / 100
}

function handleBtnClick() {
  if (handleInputBlur({ target: input })) {
    number.innerHTML = Number(input.value) + "%"
    showCirclePercent()
  }
}

window.onload = () => input.value = "50"

input.addEventListener("blur", handleInputBlur)
btn.addEventListener("click", handleBtnClick)