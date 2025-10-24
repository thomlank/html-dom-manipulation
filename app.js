//seemingly didnt work because of iteration method
// function replaceImages(){
//     let images = document.body.getElementsByTagName('img');
//     for(let pic of images){
//         console.log(pic);
//         let text = document.createTextNode(pic.alt);
//         pic.parentNode.replaceChild(text, pic); 
//     }
// }

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let image = images[i];
      if (image.alt) {
        let text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }