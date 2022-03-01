const data = [
  {
    id: 1,
    faceSrc: "./img/face-1.png",
    name: "Cheryl Correa",
    view: "6.23M views",
    slides: ["./img/slide-1.png", "./img/slide-2.png", "./img/slide-3.png"],
  },
  {
    id: 2,
    faceSrc: "./img/face-2.png",
    name: "Tamika Walker",
    view: "6.23M views",
    slides: ["./img/slide-4.png", "./img/slide-5.png", "./img/slide-6.png"],
  },
  {
    id: 3,
    faceSrc: "./img/face-3.png",
    name: "Judith Earnhardt",
    view: "6.23M views",
    slides: ["./img/slide-7.png", "./img/slide-8.png", "./img/slide-9.png"],
  },
  {
    id: 4,
    faceSrc: "./img/face-4.png",
    name: "Edward Pickett",
    view: "6.23M views",
    slides: ["./img/slide-10.png", "./img/slide-11.png", "./img/slide-12.png"],
  },
  {
    id: 5,
    faceSrc: "./img/face-5.png",
    name: "Shawn Hanna",
    view: "6.23M views",
    slides: ["./img/slide-13.png", "./img/slide-14.png", "./img/slide-15.png"],
  },
];

const listItem = document.querySelector(".list-item");

const dataText = data
  .map((item) => {
    return `
    <div class="item">
    <div class="item-left">
      <figure>
        <span class="number">${item.id}</span>
        <img src="${item.faceSrc}" alt="" />
      </figure>

      <div class="item-info">
        <h3 class="name">${item.name}</h3>
        <span class="view"> ${item.view} </span>
      </div>
    </div>

    <div class="item-rigth">
      <div class="img-container">
        <img src="${item.slides[0]}" alt="" />
      </div>
      <div class="img-container">
        <img src="${item.slides[1]}" alt="" />
      </div>
      <div class="img-container">
        <img src="${item.slides[2]}" alt="" />
      </div>
    </div>
  </div>
    `;
  })
  .join("");

listItem.innerHTML = dataText;

document.querySelectorAll(".btn-day").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".btn-day")
      .forEach((item) => item.classList.remove("active"));

    e.target.classList.add("active");
  });
});
