let arrayLength = 0;
let fileArray = new Array(10);
const fileHandler = {
    init(){
        const fileInput = document.querySelector('.image_upload');
        const preview = document.querySelector('#uploadList');
        fileInput.addEventListener('change', ()=>{
            const files = Array.from(fileInput.files);
            files.forEach(file=>{
                preview.innerHTML += `<h5 id="${file.lastModified}">${file.name}<button data-index = '${file.lastModified}' class="file-remove">X</button></h5>`;
            });
        });

    },
    removeFile(){
        document.addEventListener('click', (e) => {
            if(e.target.className !== 'file-remove') return;
            const removeTargetId = e.target.dataset.index;
            const removeTarget = document.getElementById(removeTargetId);
            const files = document.querySelector('.image_upload').files;
            const dataTranster = new DataTransfer();

            // document.querySelector('#file-input').files =
            //             Array.from(files).filter(file => file.lastModified !== removeTarget);

        
            Array.from(files).filter(file => file.lastModified != removeTargetId).forEach(file => {
                dataTranster.items.add(file);
            });

            document.querySelector('.image_upload').files = dataTranster.files;
                removeTarget.remove();
            })
            fileArray[fileArray.length] = 0;
            console.log(fileArray);
            
        }
}



function loadImage(image){
    const imageUpload = document.querySelector(".image_upload");
    
    let file = imageUpload.files[0];
    fileArray[arrayLength] = file;
    console.log(fileArray);
    arrayLength++;
    let imageFile = document.createElement("img");
    imageFile.setAttribute("class","imageFile");
    imageFile.src = URL.createObjectURL(file);

    let imageContainer = document.querySelector(".imagePreview");
    
    imageFile.onclick = function(){
        let p = this.parentElement;
        p.removeChild(this);

    }

    imageContainer.appendChild(imageFile);
}

window.onload = function(){
    fileHandler.init();
    fileHandler.removeFile();
}
