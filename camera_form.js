const uploadedURLS = [];
const fileHandler = {
    init(){
        document.getElementById('uploadInput').addEventListener('change', previewImage);
    }
}

window.onload = function(){
    fileHandler.init();
}

function previewImage() {
    const previewContainer = document.getElementById('previewContainer');
    const files = document.getElementById('uploadInput').files;


    for(let i=0;i<files.length;i++){
        const reader = new FileReader();
        reader.onload = function () {
            if(!uploadedURLS.includes(reader.result)){
                const imgElement = document.createElement('img');
                imgElement.src = reader.result;
                imgElement.setAttribute('class', 'previewImage');
                previewContainer.appendChild(imgElement);
                uploadedURLS.push(reader.result);
            }
        }
        reader.readAsDataURL(files[i]);
    }
    console.log(uploadedURLS);
}

function deletePreview() {
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = '';
    document.getElementById('uploadInput').value = '';
    uploadedURLS.splice(0,uploadedURLS.length);
}

