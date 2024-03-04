function loadImage(image){
    const imageUpload = document.querySelector(".image_upload");
    
    var file = imageUpload.files[0];
    var imgClassNum = 0;
    var divClassImage = document.createElement("img");
    divClassImage.setAttribute("class",imgClassNum);
    imgClassNum++;
    divClassImage.src = URL.createObjectURL(file);

    var container = document.querySelector(".image_paste");
    container.appendChild(divClassImage);
}


function deleteImage(){
    const deleteImage = document.querySelector(".delete_file");

    
}