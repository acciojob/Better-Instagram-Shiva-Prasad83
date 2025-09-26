//your code here
const allDivs=document.querySelectorAll(".imgDiv");
const allImgs=document.querySelectorAll(".img");
allImgs.forEach((img)=>{
	img.addEventListener("dragstart",(e)=>{
		let currImgId=e.target.id;
		// let currDivId=`div${currImgId[currImgId.length-1]}`;
		// e.dataTransfer.setData("text",currDivId);
		e.dataTransfer.setData("text",currImgId);
	})
});
allDivs.forEach((div)=>{
	div.addEventListener("dragover",(e)=>{
		e.preventDefault();
	})
	div.addEventListener("drop",(e)=>{
		// let div=document.getElementById(e.dataTransfer.getData("text"));
		// let draggedImg=div.childNodes[0];
		let draggedImgId=e.dataTransfer.getData("text");
		let draggedImg=document.getElementById(draggedImgId);
		
		let temp=e.target.src;
		e.target.src=draggedImg.src;
		draggedImg.src=temp;
		
		
	})
})