// grab everything we need
const priceInput = document.querySelector("[name=price]");
const quantityInput = document.querySelector("[name=quantity]");
const total = document.querySelector(".total");
const label = document.querySelector(".badge");

// create our function
function calculatePieCost() {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;
  total.innerText = `$` + cost.toFixed(2);
}

function updateQtyLabel() {
  const quantity = quantityInput.value;
  label.innerText = quantity;
}

calculatePieCost();
// create the event listners
priceInput.addEventListener("input", calculatePieCost);
quantityInput.addEventListener("input", calculatePieCost);
quantityInput.addEventListener("input", updateQtyLabel);
