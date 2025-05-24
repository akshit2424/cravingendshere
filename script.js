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

document.querySelector(".menucard").addEventListener("click", () => {
  rightcard.classList.add("showmenu");
  leftcard.classList.add("hidemenu");
  var menuclasslist=menucard.classList
  if(menuclasslist.length==1){
    menucard.classList.add("firstclick")
  }
  
});

custombtn.addEventListener("click",(e)=>{
  // alert("clicked")
  console.log(custominput.value)
  if(custominput.value!=""){
    list.innerHTML+= `<li><span>${custominput.value}</span><button>Add item</button></li>`

var computedHeight = window.getComputedStyle(menucard).height;
var pixelValue = parseFloat(computedHeight);
    menucard.style.height= pixelValue+ 80+"px"
   
    formsection.classList.add("formanimate")

    const newrow = table.insertRow();
        const c1 = newrow.insertCell(0);
        const c2 = newrow.insertCell(1);
        var textelement=custominput.value
        console.log(textelement)
        c1.innerHTML = textelement;
        c2.innerHTML = "1";
        
}
else{
  alert("item name is required")
}
custominput.value=""
})

buttons.forEach((button) => {
   
  button.addEventListener("click", (e) => {
    formsection.classList.add("formanimate")
    if (e.target.tagName === "BUTTON") {
      
      var found=false
      const li = e.target.closest("li");
      
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

