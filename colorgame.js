var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
for(var i=0;i<squares.length;i++)
{
	//add inital colors to squares
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		//grab color of clicked color
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedColor)
		{
			message.textContent="correct  ";
			reset.textContent="Play Again?  ";
            changecolors(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
		}
		
		else
			{
				this.style.backgroundColor="#232323";
				message.textContent="try again  ";
			}
	});
}
colordisplay.textContent=pickedColor;
function changecolors(color)
{
	//loop through all squares
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		//get random colors and push into array;
		arr.push(randomColor());
	}
	return arr;

}
function randomColor(){
	//pick a red from o to 255 green to 255 and blue
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
var h1=document.querySelector("h1");
reset.addEventListener("click",function(){
   colors=generateRandomColors(6);
   pickedColor=pickcolor();
   colordisplay.textContent=pickedColor;
   for(var i=0;i<squares.length;i++)
   {
   	squares[i].style.backgroundColor=colors[i];
   }
   h1.style.backgroundColor="steelblue";
   message.textContent="";
   reset.textContent="new colors  ";

});