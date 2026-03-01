const fileInput = document.getElementById("fileInput");
const defaultView = document.getElementById("defaultView");
const uploadedView = document.getElementById("uploadedView");
const previewGallery = document.getElementById("previewGallery");

function openFilePicker() {
    fileInput.click();
}

fileInput.addEventListener("change", function () {

    const files = fileInput.files;

    if (files.length > 0) {

        defaultView.style.display = "none";
        uploadedView.style.display = "block";

        for (let i = 0; i < files.length; i++) {

            const reader = new FileReader();

            reader.onload = function (e) {

                const wrapper = document.createElement("div");
                wrapper.classList.add("image-preview-wrapper");

                const img = document.createElement("img");
                img.src = e.target.result;

                const removeBtn = document.createElement("span");
                removeBtn.innerHTML = "✖";
                removeBtn.classList.add("remove-btn");

                removeBtn.onclick = function () {
                    wrapper.remove();

                    if (previewGallery.children.length === 0) {
                        uploadedView.style.display = "none";
                        defaultView.style.display = "block";
                    }
                };

                wrapper.appendChild(img);
                wrapper.appendChild(removeBtn);
                previewGallery.appendChild(wrapper);
            };

            reader.readAsDataURL(files[i]);
        }

        fileInput.value = "";
    }
});
const analyzeBtn = document.querySelector(".analyze-btn");
const loadingScreen = document.getElementById("loadingScreen");
const resultSection = document.getElementById("resultSection");
const resultVideo = document.getElementById("resultVideo");

analyzeBtn.addEventListener("click", function () {

    // Show loading
    loadingScreen.style.display = "block";
    resultSection.style.display = "none";

    // 3 sec fake analyzing
    setTimeout(function () {

        loadingScreen.style.display = "none";
        resultSection.style.display = "block";

        resultVideo.play();

    }, 3000); // 3000ms = 3 sec

});
