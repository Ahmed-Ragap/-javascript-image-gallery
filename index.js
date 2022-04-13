
//select preview image
let preview = document.querySelector('.preview');
//select all small image
let flexed_img = document.querySelectorAll(".im");

  for (var i = 0; i < flexed_img.length; i++) {
   console.log( flexed_img[i]);
     

 flexed_img[i].addEventListener("click", changeImg);
  function changeImg() {
     preview.src = this.src;
     
  } 
};
