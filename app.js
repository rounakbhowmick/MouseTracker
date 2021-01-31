let topbutton = document.getElementById("topbtn");
let bottombutton = document.getElementById("bottombtn");
let infotop = document.getElementById("infotop");
let infobutton = document.getElementById("infobutton");
let timediff = document.getElementById("timediff");
let sourcetiming = 0;
let destinationtiming = 0;
topbutton.addEventListener("click", mouseclicked);
bottombutton.addEventListener("click", mouseclicked);
let stcheck = 0;
let dtcheck = 0;
function mouseclicked(e) {
	console.log(e.target.id);
	console.log(e);
	if (e.target.id == "topbtn") {
		infotop.innerText = ` Top Button:- Screen X/Y: ${e.screenX}, ${e.screenY}  Client X/Y: ${e.clientX}, ${e.clientY}`;
		stcheck = 1;
		sourcetiming = Date.now();
		timestamp();
	} else if (e.target.id == "bottombtn") {
		infobutton.innerText = ` Bottom Button:- Screen X/Y: ${e.screenX}, ${e.screenY}  Client X/Y: ${e.clientX}, ${e.clientY}`;
		dtcheck = 1;
		destinationtiming = Date.now();
		timestamp();
	}
}
function timestamp() {
	if (stcheck == 1 && dtcheck == 1) {
		stcheck = 0;
		dtcheck = 0;
		let diff = Math.abs((destinationtiming - sourcetiming) / 1000);
		timediff.innerText = `Time Difference ${diff}`;
		console.log(diff);
	}
}
// let topbuttonmsg = document.querySelector("msg");
// topbutton.addEventListener("click", mouseclicked);
// // document.addEventListener("mousemove", mousemoved);
// // function clicked(e) {
// // 	screenLog.innerText = `
// //     Screen X/Y: ${e.screenX}, ${e.screenY}
// //     Client X/Y: ${e.clientX}, ${e.clientY}`;
// // }
// function mouseclicked(e) {
// 	topbuttonmsg.innerText = `
//     Screen X/Y: ${e.screensX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }
