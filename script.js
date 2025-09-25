//your code here
const allDivs=document.querySelectorAll(".imgDiv");
const allImgs=document.querySelectorAll(".img");
allImgs.forEach((img)=>{
	img.addEventListener("dragstart",(e)=>{
		let currImgId=e.target.id;
		let currDivId=`div${currImgId[currImgId.length-1]}`;
		e.dataTransfer.setData("text",currDivId);
	})
});
allDivs.forEach((div)=>{
	div.addEventListener("dragover",(e)=>{
		e.preventDefault();
	})
	div.addEventListener("drop",(e)=>{
		let div=document.getElementById(e.dataTransfer.getData("text"));
		let draggedImg=div.childNodes[0];
		console.log(draggedImg);
		e.target.src=draggedImg.src;
		draggedImg.src=e.target.src;
		
		
	})
})