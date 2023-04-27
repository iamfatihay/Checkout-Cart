let bagPrice = 25.98;
let bagNumber = 1;
const bag = document.querySelector("#bag");

let shoePrice = 45.99;
let shoeNumber = 1;
const shoe = document.querySelector("#shoe");

let clockPrice = 74.99;
let clockNumber = 1;
const clock = document.querySelector("#clock");

let subTotal = bagPrice + shoePrice + clockPrice;
let tax = subTotal * 0.18;
let total = subTotal + tax + 15; //shipping=15
 
function updatePrice() {
    subTotal = bagPrice + shoePrice + clockPrice
    document.querySelector("#subTotal").textContent = subTotal.toFixed(2)
    tax = subTotal * 0.18
    document.querySelector("#tax").textContent = tax.toFixed(2)
    total = subTotal + tax + 15
    document.querySelector("#total").textContent = total.toFixed(2)
    if (bagNumber==0 && shoeNumber==0 && clockNumber==0) {
        document.querySelector("#shipping").textContent="0.00"
        total=0
        document.querySelector("#total").textContent = total.toFixed(2);
        alert("You don't have any items in your cart!")
    }
  }
  
  document.querySelector(".minus1").onclick = () => {
    if (document.querySelector(".number1").textContent == 0) {
      return
    } else {
      bagNumber--
      document.querySelector(".number1").textContent = bagNumber
      bagPrice -= 25.98
      bag.textContent = bagPrice.toFixed(2)
      updatePrice()
    }
  }
  
  document.querySelector(".plus1").onclick = () => {
    bagNumber++
    document.querySelector(".number1").textContent = bagNumber
    bagPrice = bagNumber * 25.98
    bag.textContent = bagPrice.toFixed(2)
    updatePrice()
  }
  
  document.querySelector(".minus2").onclick = () => {
    if (document.querySelector(".number2").textContent == 0) {
      return
    } else {
      shoeNumber--
      document.querySelector(".number2").textContent = shoeNumber
      shoePrice -= 45.99
      shoe.textContent = shoePrice.toFixed(2)
      updatePrice()
    }
  }
  
  document.querySelector(".plus2").onclick = () => {
    shoeNumber++
    document.querySelector(".number2").textContent = shoeNumber
    shoePrice = shoeNumber * 45.99
    shoe.textContent = shoePrice.toFixed(2)
    updatePrice()
  }
  
  document.querySelector(".minus3").onclick = () => {
    if (document.querySelector(".number3").textContent == 0) {
      return
    } else {
      clockNumber--
      document.querySelector(".number3").textContent = clockNumber
      clockPrice -= 74.99
      clock.textContent = clockPrice.toFixed(2)
      updatePrice()
    }
  }

  document.querySelector(".plus3").onclick = () => {
    clockNumber++
    document.querySelector(".number3").textContent = clockNumber
    clockPrice = clockNumber * 74.99
    clock.textContent = clockPrice.toFixed(2)
    updatePrice()
  }

document.querySelectorAll(".remove").forEach((item) => {
    item.onclick = () => { 
        const row = item.closest(".row");
        row.remove();
        const rowAmount = parseFloat(row.querySelector(".sil").textContent);        
        subTotal=subTotal-rowAmount
        document.querySelector("#subTotal").textContent = subTotal.toFixed(2)
        tax = subTotal * 0.18
        document.querySelector("#tax").textContent = tax.toFixed(2)
        total = subTotal + tax + 15
        document.querySelector("#total").textContent = total.toFixed(2);
        if (total<17) {
            document.querySelector("#shipping").textContent="0.00"
            total=0
            document.querySelector("#total").textContent = total.toFixed(2);
        }
    }
});

  