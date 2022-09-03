




function myFunc(){
    let gallery = document.getElementById("gallery");


    let imagesInGallery = gallery.querySelectorAll("img")

    for (let i = 3; i < imagesInGallery.length; i++) {
        console.log(i);
        imagesInGallery[i].style.opacity = 0;
    }

}
