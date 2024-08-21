const count = 30;
const apikey = "V6np3zEsNV5gAO0IaKO3nLeXQtSslHCIoSxLMnr3Olk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

async function getPhotos() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const container = document.querySelector(".image-container");
  data.forEach((image) => {
    const imgDiv = document.createElement("img");
    imgDiv.src = image.urls.regular;

    container.appendChild(imgDiv);
  });

  console.log(data);
}

window.onload = getPhotos();

window.addEventListener("scrollend", getPhotos);
