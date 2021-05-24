const thumbnailCarousel = document.getElementById('thumbnailCarousel');
const thumbnails = document.getElementsByClassName('thumbnails');
const bigVersionContainer = document.getElementById('bigVersionContainer');
const bigVersionImg = document.querySelector('#bigVersionImg');
console.log(thumbnails);

//create an array of all possible thumbnail images -- each image has a cropped and larger, hd version
//all images will not display unless they are selected (adjust style)
//display only the first thumbnail and the 2 'next' to it (#2 and 'last') as default
//the image central to the thumbnail carousel will display the large version in the top-center of the screen
//when the user clicks on a thumbnail image, that array index will become the center thumbnail
//that image will be displayed in the top-center of the screen as big
//the image indexes before and after the clicked image will then be displayed next to it

function handleImgClick(event) {
  const element = event.target;
  const index = Array.from(thumbnails).indexOf(element);
  const bigVersionSrc = element.getAttribute('bigVersion');
  let leftPic = thumbnails[0];
  let rightPic = thumbnails[2];

  bigVersionImg.setAttribute('src', bigVersionSrc);

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].setAttribute('style', 'display: none');
  }

  if (index - 1 < 0) {
    leftPic = thumbnails[thumbnails.length - 1];
  } else {
    leftPic = thumbnails[index - 1];
  }

  if (index + 1 >= thumbnails.length) {
    rightPic = thumbnails[0];
  } else {
    rightPic = thumbnails[index + 1];
  }

  thumbnailCarousel.appendChild(leftPic);
  leftPic.setAttribute('style', 'display: block');
  thumbnailCarousel.appendChild(element);
  element.setAttribute('style', 'display: block');
  thumbnailCarousel.appendChild(rightPic);
  rightPic.setAttribute('style', 'display: block');
}

function displayFirstSet() {
  const firstImg = thumbnails[0];
  const secondImg = thumbnails[1];
  const lastImg = thumbnails[thumbnails.length - 1];
  firstImg.setAttribute('style', 'display: block');
  secondImg.setAttribute('style', 'display: block');
  lastImg.setAttribute('style', 'display: block');
}

displayFirstSet();
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', handleImgClick);
}
