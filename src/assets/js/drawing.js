// $(function() {
// const canvas = document.querySelector("canvas"),
// toolBtns = document.querySelectorAll(".tool"),
// fillColor = document.querySelector("#fill-color"),
// sizeSlider = document.querySelector("#size-slider"),
// colorBtns = document.querySelectorAll(".colors .option"),
// colorPicker = document.querySelector("#color-picker"),
// clearCanvas = document.querySelector(".clear-canvas"),
// saveImg = document.querySelector(".save-img"),
// Addtext = document.querySelector(".AddtextClass"),
// textColor = document.querySelector(".text-color"),

// ctx = canvas.getContext("2d");
// ctx1 = this.__canvas = new fabric.Canvas('c');


// let prevMousePoint, snapshot,
// isDrawing = false,
// selectedTool = "brush",
// brushSize = 5,
// selectedColor = "#000";

// ctx.font = "30px Comic Sans MS";
// ctx.fillStyle = "red";
// ctx.textAlign = "center";
// // ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

// const setCanvasBackground = () => {
//     ctx.fillStyle = "#fff";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = selectedColor;
// }


// fabric.Object.prototype.transparentCorners = false;
// fabric.Object.prototype.padding = 5;

 
// // var $ = function(id){return document.getElementById(id)};


// // var canvas = this.__canvas = new fabric.Canvas('c');
// //   canvas.setHeight(300);
// //     canvas.setWidth(500);



// // function Addtext() { 
//     Addtext.addEventListener("click", () => {
//         // debugger
//         ctx1.add(new fabric.IText('Type', { 
//       left: 50,
//       top: 100,
//       fontFamily: 'arial black',
//       fill: '#333',
//         fontSize: 20
//     }));
//     });

//     textColor.addEventListener("click", () => {

// // document.getElementById('text-color').onchange = function() {
//     ctx1.add(new fabric.IText(),{
//         fill: (this.value),
//     })
//     // canvas.getActiveObject().setFill(this.value);
//     // canvas.renderAll();
// });
// // document.getElementById('text-color').onchange = function() {
// //     ctx1.getActiveObject().setFill(this.value);
// //     ctx1.renderAll();
// // };
    
//     document.getElementById('text-bg-color').onchange = function() {
//         canvas.getActiveObject().setBackgroundColor(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-lines-bg-color').onchange = function() {
//         canvas.getActiveObject().setTextBackgroundColor(this.value);
//         canvas.renderAll();
//     };

//     document.getElementById('text-stroke-color').onchange = function() {
//         canvas.getActiveObject().setStroke(this.value);
//         canvas.renderAll();
//     };	

//     document.getElementById('text-stroke-width').onchange = function() {
//         canvas.getActiveObject().setStrokeWidth(this.value);
//         canvas.renderAll();
//     };				

//     document.getElementById('font-family').onchange = function() {
//         canvas.getActiveObject().setFontFamily(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-font-size').onchange = function() {
//         canvas.getActiveObject().setFontSize(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-line-height').onchange = function() {
//         canvas.getActiveObject().setLineHeight(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-align').onchange = function() {
//         canvas.getActiveObject().setTextAlign(this.value);
//         canvas.renderAll();
//     };
    

// radios5 = document.getElementsByName("fonttype");  // wijzig naar button
// for(var i = 0, max = radios5.length; i < max; i++) {
//     radios5[i].onclick = function() {
        
//         if(document.getElementById(this.id).checked == true) {
//             if(this.id == "text-cmd-bold") {
//                 canvas.getActiveObject().set("fontWeight", "bold");
//             }
//             if(this.id == "text-cmd-italic") {
//                 canvas.getActiveObject().set("fontStyle", "italic");
//             }
//             if(this.id == "text-cmd-underline") {
//                 canvas.getActiveObject().set("textDecoration", "underline");
//             }
//             if(this.id == "text-cmd-linethrough") {
//                 canvas.getActiveObject().set("textDecoration", "line-through");
//             }
//             if(this.id == "text-cmd-overline") {
//                 canvas.getActiveObject().set("textDecoration", "overline");
//             }
            
            
            
//         } else {
//             if(this.id == "text-cmd-bold") {
//                 canvas.getActiveObject().set("fontWeight", "");
//             }
//             if(this.id == "text-cmd-italic") {
//                 canvas.getActiveObject().set("fontStyle", "");
//             }  
//             if(this.id == "text-cmd-underline") {
//                 canvas.getActiveObject().set("textDecoration", "");
//             }
//             if(this.id == "text-cmd-linethrough") {
//                 canvas.getActiveObject().set("textDecoration", "");
//             }  
//             if(this.id == "text-cmd-overline") {
//                 canvas.getActiveObject().set("textDecoration", "");
//             }
//         }
        
        
//         canvas.renderAll();
//     }
// }


// window.addEventListener("load", () => {
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight - 7;
//     ctx.lineCap = "round";
//     setCanvasBackground();
//     // Addtext();
// });

// const currMousePoint = e => {
//     let x = "ontouchstart" in window ? e.touches?.[0].pageX : e.offsetX;
//     let y = "ontouchstart" in window ? e.touches?.[0].pageY : e.offsetY;
//     return { x, y };
// }

// const drawRect = position => {
//     if(!fillColor.checked) {
//         return ctx.strokeRect(position.x, position.y, prevMousePoint.x - position.x, prevMousePoint.y - position.y);
//     }
//     ctx.fillRect(position.x, position.y, prevMousePoint.x - position.x, prevMousePoint.y - position.y);
// }

// const drawCircle = position => {
//     ctx.beginPath();
//     let radius = Math.sqrt(Math.pow((prevMousePoint.x - position.x), 2) + Math.pow((prevMousePoint.y - position.y), 2));
//     ctx.arc(prevMousePoint.x, prevMousePoint.y, radius, 0, 2 * Math.PI);
//     fillColor.checked ? ctx.fill() : ctx.stroke();
// }

// const drawTriangle = position => {
//     ctx.beginPath();
//     ctx.moveTo(prevMousePoint.x, prevMousePoint.y);
//     ctx.lineTo(position.x, position.y);
//     ctx.lineTo(prevMousePoint.x * 2 - position.x, position.y);
//     ctx.closePath();
//     fillColor.checked ? ctx.fill() : ctx.stroke();
// }

// const startDraw = e => {
//     isDrawing = true;
//     ctx.beginPath();
//     prevMousePoint = currMousePoint(e);
//     ctx.lineWidth = brushSize;
//     ctx.strokeStyle = selectedColor;
//     ctx.fillStyle = selectedColor;
//     snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
// }

// const drawing = e => {
//     if(!isDrawing) return;
//     ctx.putImageData(snapshot, 0, 0);
//     let position = currMousePoint(e);

//     if(selectedTool === "brush" || selectedTool === "eraser") {
//         ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
//         ctx.lineTo(position.x, position.y);
//         ctx.stroke();
//     } else if(selectedTool === "rect") {
//         drawRect(position);
//     } else if(selectedTool === "circle") {
//         drawCircle(position);
//     } else {
//         drawTriangle(position);
//     } 
// }

// toolBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         document.querySelector(".options .active").classList.remove("active");
//         btn.classList.add("active");
//         selectedTool = btn.id;
//     });
// });

// sizeSlider.addEventListener("change", () => brushSize = sizeSlider.value);

// colorBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         document.querySelector(".colors .selected").classList.remove("selected");
//         btn.classList.add("selected");
//         selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
//     });
// });

// clearCanvas.addEventListener("click", () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     setCanvasBackground();
// });

// colorPicker.addEventListener("change", e => {
//     colorPicker.parentElement.style.backgroundColor = e.target.value;
//     colorPicker.parentElement.click();
// });

// saveImg.addEventListener("click", () => {
//     const link = document.createElement("a");
//     link.download = `${Date.now()}.jpg`;
//     link.href = canvas.toDataURL();
//     link.click();
// });

// canvas.addEventListener("mousedown", startDraw);
// canvas.addEventListener("touchstart", startDraw);
// canvas.addEventListener("mousemove", drawing);
// canvas.addEventListener("touchmove", drawing);
// canvas.addEventListener("touchmove", drawing);
// canvas.addEventListener("mouseup", () => isDrawing = false);
// canvas.addEventListener("mouseleave", () => isDrawing = false);
// canvas.addEventListener("touchend", () => isDrawing = false);


// });