var reason_array=["My Mom","My Dad"];
var image_array=["mom.png","dad.jpg"];
var i=0;
function Next_slide(){
  document.getElementById("Text").innerHTML=reason_array[i];
  document.getElementById("Album").src=image_array[i];
  i++;}

                  