
let addBtn = document.getElementById("add-btn");

let input = document.querySelector("#new-task");

function lineThrough(){
    h2.style.textDecoration = "line-through"
}


addBtn.addEventListener("click", function(){
   const majorSpan = document.querySelector(".major");

   let minorSpan = document.createElement("span");

   minorSpan.setAttribute("class","minor");
   majorSpan.appendChild(minorSpan);

   let newInput = document.createElement("input");

   newInput.setAttribute("type",'checkbox');
   newInput.setAttribute("id",'check-box');
   newInput.setAttribute("onclick",'lineThrough()');

   minorSpan.appendChild(newInput);

   let h2 = document.createElement("h2");

   h2.innerText = input.value;
   minorSpan.appendChild(h2)
   
   
})




