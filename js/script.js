var imgs = Array.from( document.querySelectorAll(".item img"));
var lightBox = document.getElementById("lightBox");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0;

// console.log(imgs)
for(var i = 0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click" , function(e){
        var imgSrc = e.target.getAttribute("src");
        
        currentIndex = imgs.indexOf(e.target);
        lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
        lightBox.style.display = "flex";

    })
}

function nextImg(){
    currentIndex ++;
    
    if (currentIndex == imgs.length)
    {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc+")"
}

function prevImg(){
    currentIndex -- ;

    if(currentIndex < 0)
    {
        currentIndex = imgs.length;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc+")"
}

function closeSlide(){
    lightBox.style.display = "none";
}

// function hideBox(){
//     lightBox.style.display = "none";

// }

nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click" , prevImg);
closeBtn.addEventListener("click" , closeSlide);
// lightBox.addEventListener("click" , hideBox)


document.addEventListener("keydown" , function(e){
    
    if(e.code == "ArrowRight")
    {
        nextImg();
    }

    else if(e.code == "ArrowLeft")
    {
        prevImg();
    }

    else if(e.code == "Escape")
    {
        closeSlide();
    }
})