console.log(document.querySelector(".js-button").classList.contains("js-button"));


// 10D through to 10G
function changeUp(num) {
  let button = document.querySelector(`.onOffSwitch${num}`);

  turnOffPreviousButton();

  if (button.classList.contains("isToggled")) {
      button.classList.remove("isToggled");
    } else {
      button.classList.add("isToggled");
    }
}

function turnOffPreviousButton () {
  const previousBtn = document.querySelector(".isToggled");
  if (previousBtn) {
    previousBtn.classList.remove("isToggled");
  }
}

// 10 H
function calculatePrice() {
      // Get the value from the input field
      let costOfOrder = Number(document.querySelector(".orderPrice").value) * 100;

      if (costOfOrder < 0) {
        document.querySelector(".warningMessage").innerHTML = "Error: cost cannot be less than $0";

      } else {
        document.querySelector(".warningMessage").innerHTML = "";
      // If the number is less than 40, 10 dollar will be added to 
      if (costOfOrder < 4000) {
        document.querySelector(".totalPrice").innerHTML = `$ ${(costOfOrder + 1000) / 100}`;
      } else {
        document.querySelector(".totalPrice").innerHTML = `$ ${costOfOrder / 100}`;
      }
    }
      }

    // If the enter key is pressed, make it so that the number appears
    function enterBtn (event) {
      if (event.key === "Enter") {
        calculatePrice();
      }
    }