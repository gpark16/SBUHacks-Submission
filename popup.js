
let lImageNames = [
  "lMaskImages/ImgLarge1.png",
  "lMaskImages/ImgLarge2.jpg",
  "lMaskImages/ImgLarge3.png",
  "lMaskImages/ImgLarge4.png",
  "lMaskImages/ImgLarge5.png",
  "lMaskImages/ImgLarge6.png",
  "lMaskImages/ImgLarge7.png"

]; 

let mImageNames = [
  "mMaskImages/ImgMed1.jpg",
  "mMaskImages/ImgMed2.png",
  "mMaskImages/ImgMed3.jpg",
  "mMaskImages/ImgMed4.jpg",
  "mMaskImages/ImgMed5.png",
  "mMaskImages/ImgMed6.png",
  "mMaskImages/ImgMed7.png",
  "mMaskImages/ImgMed8.png",
  "mMaskImages/ImgMed9.jpg",
  "mMaskImages/ImgMed10.png",
  "mMaskImages/ImgMed11.png",
  "mMaskImages/ImgMed12.png",
  "mMaskImages/ImgMed13.png",
  "mMaskImages/ImgMed14.png",
  "mMaskImages/ImgMed15.jpg",
  "mMaskImages/ImgMed16.jpg"
]; 

let memeI = [
  "MemeImages/M1.jpg",
  "MemeImages/M2.png",
  "MemeImages/M3.jpg",
  "MemeImages/M4.png",
  "MemeImages/M5.jpg",
  "MemeImages/M6.jpg",
  "MemeImages/M7.png",
  "MemeImages/M8.png",
  "MemeImages/M9.jpg",
  "MemeImages/M10.jpg",
  "MemeImages/M11.png",
  "MemeImages/M12.jpg",
  "MemeImages/M13.jpg",
  "MemeImages/M14.jpg",
  "MemeImages/M15.jpg",
  "MemeImages/M16.jpg",
  "MemeImages/M17.jpg",
  "MemeImages/M18.jpg",
  "MemeImages/M19.jpg",
  "MemeImages/M20.png",
  "MemeImages/M21.jpg",
  "MemeImages/M22.jpg",
  "MemeImages/M23.png",

]; 

var recentImages = new Array(2);


let changeImageW = document.getElementById("changeImageW");


// When the button is clicked, inject setPageBackgroundColor into current page
changeImageW.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeBackgroundImagesW
  });

  var seconds = prompt("How many seconds of procrastination?", "0");
  if(parseFloat(seconds) != 0){
      setTimeout( function ( ) { alert( "Is it time?" ); }, seconds * 1000 );
  }

});

/*document.addEventListener('keydown', (event) => {
  if (event) {
    console.log("Enter pressed");
  }
});
*/

function changeBackgroundImagesW() {
    src = "";

  let div = document.getElementsByTagName('div');

  //these will be parallel arrays
  let imgs = document.getElementsByTagName('img');
  let imgSizes = new Array(imgs.length);
  
  for(i = 0; i < imgs.length; i++){
      size = imgs[i].width * imgs[i].height;
      imgSizes[i] = size;
  }
  
  for(i = 0; i < div.length; i++){
      if(div[i].style.backgroundImage.match("url")){
          determineSrcW(div[i]);
          //console.log( div[i].style.backgroundImage);
        div[i].style.backgroundImage = "url(\"" + chrome.runtime.getURL(src) + "\")" ;
          
      }
  }
  
  for(i = 0; i < imgs.length; i++){
      //the image arrays have the same size
      let imgSize = imgSizes[i];
      determineSrcW(imgSize);
      //console.log("Time 2: " + imgSizes[i]);
  
      imgs[i].src = chrome.runtime.getURL(src);
      imgs[i].srcset = chrome.runtime.getURL(src);
      //console.log(imgElt.src)
      ;
  }

  /////////////////////////////////////////////////////
  // adding on - also have function apply CSS styling//
  /////////////////////////////////////////////////////
  

  const body = document.body;
  body.style.fontFamily = "Garamond, serif";  
  
}


function determineSrcW(imgSize){
if (imgSize < 100000){
  let r = Math.floor(Math.random() * mImageNames.length);

       src = mImageNames[r];
  }
  else{
    let r = Math.floor(Math.random() * lImageNames.length);

      src = lImageNames[r];
  }
  if(recentImages.includes(src))
      determineSrcW(imgSize);
  else
      addSrcToRecent(src);
}

function addSrcToRecent(src){
  if (recentImages[0] == null){
      recentImages[0] = src;
  }
  else if (recentImages[1] == null){
      recentImages[1] = src;
  }
  else{
      recentImages[0] = recentImages[1];
      recentImages[1] = recentImages[src];
  }
}



let changeImageM = document.getElementById("changeImageM");

// When the button is clicked, inject setPageBackgroundColor into current page
changeImageM.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeBackgroundImagesM
  });

  var seconds = prompt("How many seconds of procrastination?", "0");
  if(parseFloat(seconds) != 0){
      setTimeout( function ( ) { alert( "Is it time?" ); }, seconds * 1000 );
  }
});




function changeBackgroundImagesM() {
  src = "";

let div = document.getElementsByTagName('div');

//these will be parallel arrays
let imgs = document.getElementsByTagName('img');
let imgSizes = new Array(imgs.length);

for(i = 0; i < imgs.length; i++){
    size = imgs[i].width * imgs[i].height;
    imgSizes[i] = size;
}

for(i = 0; i < div.length; i++){
    if(div[i].style.backgroundImage.match("url")){
        determineSrcM(div[i]);
        //console.log( div[i].style.backgroundImage);
      div[i].style.backgroundImage = "url(\"" + chrome.runtime.getURL(src) + "\")" ;
        
    }
}

for(i = 0; i < imgs.length; i++){
    //the image arrays have the same size
    let imgSize = imgSizes[i];
    determineSrcM(imgSize);
    //console.log("Time 2: " + imgSizes[i]);

    imgs[i].src = chrome.runtime.getURL(src);
    imgs[i].srcset = chrome.runtime.getURL(src);
    //console.log(imgElt.src)
    ;
}

/////////////////////////////////////////////////////
// adding on - also have function apply CSS styling//
/////////////////////////////////////////////////////

setTimeout( function ( ) { alert( "Is it time?" ); }, 10000 );

const body = document.body;
body.style.fontFamily = "Garamond, serif";  

}

function determineSrcM(imgSize){
  let r = Math.floor(Math.random() * memeI.length);
       src = memeI[r];
}
