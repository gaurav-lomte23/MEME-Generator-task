let forma = document.forms[0];
let topT = document.querySelector(".up");
let bottomT = document.querySelector(".down");

forma.addEventListener('submit', function (e) {
    e.preventDefault();
    let topText = forma["top-text"].value;
    topT.textContent = topText;
    let bottomText = forma["bottom-text"].value;
    bottomT.textContent = bottomText;
    let picture = document.querySelector("img");
    let picSrc = picture.getAttribute("src");
    let newSrc = forma["url"].value;
    picture.setAttribute("src", newSrc);
})

let input1 = document.querySelector('input[name ="top-text"]');
input1.addEventListener("focus", (e) => {
    input1.value = "";
})
let input2 = document.querySelector('input[name ="bottom-text"]');
input2.addEventListener("focus", (e) => {
    input2.value = "";
})
let input3 = document.querySelector('input[name ="url"]');
input3.addEventListener("focus", (e) => {
    input3.value = "";
})
function changeTextColor(color) {
    document.querySelector('.up.text').style.color = color;
    document.querySelector('.down.text').style.color = color;
}
function generateMeme() {
    // Get the URL from the input field
    const imageUrl = document.querySelector('input[name="url"]').value;

    // Get the img element within the .picture container
    const imageElement = document.querySelector('.picture img');

    // Set the src attribute to the URL from the input field
    imageElement.src = imageUrl;
    
    // Get the top and bottom text from the input fields
    const topText = document.querySelector('input[name="top-text"]').value;
    const bottomText = document.querySelector('input[name="bottom-text"]').value;

    // Set the text content of the .up and .down elements
    document.querySelector('.up.text').textContent = topText;
    document.querySelector('.down.text').textContent = bottomText;
}

function changeTextColor(color) {
    document.querySelector('.up.text').style.color = color;
    document.querySelector('.down.text').style.color = color;
}

function generateMeme() {
    const topText = document.querySelector('input[name="top-text"]').value;
    const bottomText = document.querySelector('input[name="bottom-text"]').value;
    const imageUrl = document.querySelector('input[name="url"]').value;

    // Set the text and image in the main meme preview area
    const mainImage = document.querySelector('.picture img');
    document.querySelector('.up.text').innerText = topText;
    document.querySelector('.down.text').innerText = bottomText;
    mainImage.src = imageUrl;

    // Create a new meme thumbnail to save the generated meme
    const savedMeme = document.createElement('div');
    savedMeme.classList.add('meme-thumbnail');
    savedMeme.innerHTML = `
        <img src="${imageUrl}" alt="Meme">
        <div class="up">${topText}</div>
        <div class="down">${bottomText}</div>
    `;

    // Append the new meme thumbnail to the saved memes section
    document.querySelector('.saved-memes').appendChild(savedMeme);
}

function downloadMeme() {
    // Select the latest saved meme image in the .saved-memes div
    const savedMemes = document.querySelector(".saved-memes");
    const memeImage = savedMemes.querySelector("img");

    if (memeImage) {
        // Create a canvas element
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Set canvas dimensions to match the image dimensions
        canvas.width = memeImage.naturalWidth;
        canvas.height = memeImage.naturalHeight;

        // Draw the image onto the canvas
        context.drawImage(memeImage, 0, 0);

        // Convert the canvas content to a JPEG data URL
        const jpegUrl = canvas.toDataURL("image/jpeg");

        // Create a temporary link to trigger the download
        const link = document.createElement("a");
        link.href = jpegUrl;
        link.download = "meme.jpeg"; // Set the filename with .jpeg extension
        link.click();
    } else {
        alert("No meme to download! Generate and save a meme first.");
    }
}
