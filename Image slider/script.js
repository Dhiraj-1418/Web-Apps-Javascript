const nextbutton = document.getElementById("nextButton");
const previousbutton = document.getElementById("previousButton");
const imgPath = document.getElementById("img");

let images = ["Images/1st.jpg","Images/2nd.jpg","Images/3rd.jpg","Images/4th.jpg"];

let index = 0;

function showImages() {
  imgPath.src= images[index]
  
}

function previous() {
  if (index > 0) {
    index--;
  }
  showImages();
  
}

function next() {
  if (index < images.length - 1) {
    index++;
  }
  showImages();
 
}

function autoslide() {
  
  if (index < images.length - 1) {
    index++;
  }
  else if(index == images.length-1){
    index=0;
  }
  showImages();

}

nextbutton.addEventListener("click", next);
previousbutton.addEventListener("click", previous);

showImages();
setInterval(autoslide, 3000);


