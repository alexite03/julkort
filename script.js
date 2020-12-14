// ------- Setup code, do not change ------
const MAX_HEIGHT = document.body.clientHeight
const MAX_WIDTH = document.body.clientWidth

const canvas = document.createElement('canvas')
canvas.height = MAX_HEIGHT
canvas.width = MAX_WIDTH
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')
// ----------------------------------------

var BG  = new Image();
BG.src = 'https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg'
//BG
ctx.drawImage(BG, 0, 0, 300, 140)


ctx.fillStyle = 'brown';
//houseground
ctx.beginPath();
ctx.moveTo(30, 110);
ctx.lineTo(70, 50);
ctx.lineTo(110, 110);
ctx.fill();
ctx.fillRect(40, 100, 60, 40);
//pinetrunk
ctx.fillRect(210, 135, 10, 5)

ctx.fillStyle = 'yellow';
//windows
ctx.fillRect(50, 120, 10, 10);
ctx.fillRect(80, 120, 10, 10);

ctx.fillStyle = 'green';
//pine
ctx.beginPath();
ctx.moveTo(190, 135);
ctx.lineTo(215, 115);
ctx.lineTo(240, 135);
ctx.fill();
ctx.beginPath();
ctx.moveTo(195, 125);
ctx.lineTo(215, 100);
ctx.lineTo(235, 125);
ctx.fill();
ctx.beginPath();
ctx.moveTo(200, 110);
ctx.lineTo(215, 80);
ctx.lineTo(230, 110);
ctx.fill();

ctx.fillStyle = 'black';
//door
ctx.fillRect(65, 120, 10, 20);
//houseline
ctx.beginPath();
ctx.moveTo(30, 110);
ctx.lineTo(110, 110);
ctx.stroke();
//pinelines
ctx.beginPath();
ctx.moveTo(190, 135);
ctx.lineTo(240, 135);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(195, 125);
ctx.lineTo(235, 125);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 110);
ctx.lineTo(230, 110);
ctx.stroke();

//misconduct of the 'ctx.save()' and 'ctx.restore()' methods (basically ignorera!)

// ctx.save()

// ctx.fillStyle = 'white';
// ctx.fillText('GOTT NYTT JUL ÖNSKAR SEAN BANAN! (Alex)', 60, 20, 200);

// function animation() {
//     setInterval(() => {
//         for(i = 0; i < 5; i++) {
//             for(j = 0; j < i; j++){
//                 ctx.restore()
//                 if(i === 1) {
//                     ctx.restore()
//                     ctx.fillText('GOTT NYTT JUL ÖNSKAR SEAN BANAN! (Alex)', 60, 25, 200);
//                 } else if(i === 2) {
//                     ctx.restore()
//                     ctx.fillText('GOTT NYTT JUL ÖNSKAR SEAN BANAN! (Alex)', 60, 30, 200);
//                 } else if(i === 3) {
//                     ctx.restore()
//                     ctx.fillText('GOTT NYTT JUL ÖNSKAR SEAN BANAN! (Alex)', 60, 35, 200);
//                 } else if(i === 4) {
//                     ctx.restore()
//                     ctx.fillText('GOTT NYTT JUL ÖNSKAR SEAN BANAN! (Alex)', 60, 40, 200);
//                 } else if(i === 5) {
//                     ctx.restore()
//                     ctx.fillText('GOTT NYTT JUL ÖNSKAR SEAN BANAN! (Alex)', 60, 45, 200);
//                     ctx.restore()
//                 }
//             }
            
//         }
//     }, 5)
// };

// animation()