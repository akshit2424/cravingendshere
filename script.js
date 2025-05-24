const buttons = document.querySelectorAll(".food-items button");
const form = document.querySelector("form");
const leftcard = document.querySelector(".leftpage");
const rightcard = document.querySelector(".rightpage");
const table = document.querySelector("table");
const list = document.querySelector("ul");
const custominput = document.querySelector(".custominput");
const custombtn = document.querySelector(".custombtn");
const menucard = document.querySelector(".menucard");
const formsection = document.querySelector(".form");

document.querySelector(".menucard").addEventListener("click", () => {
  rightcard.classList.add("showmenu");
  leftcard.classList.add("hidemenu");
  if (!menucard.classList.contains("firstclick")) {
    menucard.classList.add("firstclick");
  }
});

custombtn.addEventListener("click", (e) => {
  if (custominput.value !== "") {
    // Add new item to menu list
    list.innerHTML += `<li><span>${custominput.value}</span><button>Add item</button></li>`;

    // Expand menu card height
    const computedHeight = window.getComputedStyle(menucard).height;
    const pixelValue = parseFloat(computedHeight);
    menucard.style.height = pixelValue + 80 + "px";

    // Show form
    formsection.classList.add("formanimate");

    // Add item to table
    const newrow = table.insertRow();
    const c1 = newrow.insertCell(0);
    const c2 = newrow.insertCell(1);
    const textelement = custominput.value;
    c1.innerHTML = textelement;
    c2.innerHTML = "1";

    // Append to hidden input
    const input = form.elements["Order"];
    input.value += textelement + "+";

    // Reset input
    custominput.value = "";

    // Reattach event to new button
    const newButton = list.lastElementChild.querySelector("button");
    attachButtonEvent(newButton);
  } else {
    alert("Item name is required");
  }
});

buttons.forEach((button) => {
  attachButtonEvent(button);
});

function attachButtonEvent(button) {
  button.addEventListener("click", (e) => {
    formsection.classList.add("formanimate");

    const li = e.target.closest("li");
    const clickedText = li.querySelector("span").textContent;
    let found = false;

    // Check if item exists in the table
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      if (clickedText === row.cells[0].textContent) {
        let currentQty = parseInt(row.cells[1].textContent);
        row.cells[1].textContent = currentQty + 1;
        found = true;
        break;
      }
    }

    // If not found, insert new row
    if (!found) {
      const newrow = table.insertRow();
      const c1 = newrow.insertCell(0);
      const c2 = newrow.insertCell(1);
      c1.innerHTML = clickedText;
      c2.innerHTML = "1";

      // Append to hidden input
      const input = form.elements["Order"];
      input.value += clickedText + "+";
    }
  });
}
