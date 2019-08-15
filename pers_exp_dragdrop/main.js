var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".item");

for(let i = 0; i < draggables.length; i++) {
  draggables[i].addEventListener("dragstart", function (ev) {
     ev.dataTransfer.setData("srcId", ev.target.id);
  });
}

dropTarget.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});

dropTarget.addEventListener('drop', function(ev) {
  ev.preventDefault();
  let target = ev.target;
  let droppable  = target.classList.contains('box');
  let srcId = ev.dataTransfer.getData("srcId");
  
  if (droppable) {
    /* You can use this to place the item in other fields by dropping it there.
       Check the console when you drop an item to viz field.
       
    ev.target.appendChild(document.getElementById(srcId));*/
    
    console.log(srcId);
  }
});
