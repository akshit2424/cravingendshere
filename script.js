const buttons = document.querySelectorAll(".food-items button");
const form = document.querySelector("form");
const leftcard = document.querySelector(".leftpage");
const rightcard = document.querySelector(".rightpage");
const table = document.querySelector("table");
const customitem=document.querySelector(".custom")
const list=document.querySelector("ul")
const custominput=document.querySelector(".custominput")
const custombtn=document.querySelector(".custombtn")
const menucard=document.querySelector(".menucard")
const formsection=document.querySelector(".form")
console.log(formsection.classList)
document.querySelector(".menucard").addEventListener("click", () => {
  rightcard.classList.add("showmenu");
  leftcard.classList.add("hidemenu");
  menucard.style.height="90vh"
  
});

custombtn.addEventListener("click",(e)=>{
  // alert("clicked")
    list.innerHTML+= `<li><span>${custominput.value}</span><button>Add item</button></li>`
    custominput.value=""
    const menucard = document.querySelector(".menucard");
const computedHeight = window.getComputedStyle(menucard).height;
const pixelValue = parseFloat(computedHeight);
    menucard.style.height= pixelValue+80+"px"
    
})

buttons.forEach((button) => {
   
  button.addEventListener("click", (e) => {
    formsection.classList.add("formanimate")
    if (e.target.tagName === "BUTTON") {
      
      var found=false
      const li = e.target.closest("li");
      console.log(li);
      const clickedText = li.firstChild.innerHTML;
      for (let i = 0; i < table.rows.length; i++) {
         const check1 = table.rows[i];
      
      if (clickedText === check1.cells[0].textContent) {
        found=true
       let currentQty = parseInt(check1.cells[1].textContent);
        check1.cells[1].textContent = currentQty + 1;
       break
      } 
      }

      
      
      if(found== false){
        const newrow = table.insertRow();
        const c1 = newrow.insertCell(0);
        const c2 = newrow.insertCell(1);
        c1.innerHTML = clickedText;
        c2.innerHTML = "1";
      }
      const input = form.elements["Order"];
      input.value += clickedText + "+";
    }
  });
});
if(input.value!=""){
  formsection.classList.add("formanimate")
}


