const mainActorsDiv = document.querySelector(".actors-continuer");

const users = [
  {
    name: "Dwayne johnson",
    description: "American professional wrestler and actor.",
    img: "https://akns-images.eonline.com/eol_images/Entire_Site/20211022/rs_1200x1200-211122091749-1200-dwayne-the-rock-johnson-pca.jpg?fit=around%7C700:700&output-quality=90&crop=700:700;center,top",
    age: 50,
    country: "Beverly Hills, California.",
  },
  {
    name: "Kevin hart",
    description: "African-American comedian and actor.",
    img: "https://www.nuttercenter.com/sites/nuttercenter.wright.edu/files/uploads/2018/Jan/event_nutter/Kevin%20Hart%20approved%20photo%20600x600.jpg",
    age: 42,
    country: "California.",
  },
  {
    name: "Ryan reynolds",
    description: "Charming, affable and boyishly handsome.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74piaFgvYieKfe7Y5_Bl9DfLkM78M0TUMIFd6C3zjpHzui_PzQaOgtNB7rkoIwd5FjN0&usqp=CAU",
    age: 45,
    country: "Pound Ridge community.",
  },
  {
    name: "Json statham",
    description: "Jason Statham is an English actor.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2toF0fhNXuk6K-iALq42PUxiUR8a1osMeQ&usqp=CAU",
    age: 54,
    country: "England",
  },
  {
    name: "Vin diesel",
    description: "American actor and producer.",
    img: "https://doms2cents.com/wp-content/uploads/2022/01/F9.png",
    age: 54,
    country: "Alameda county, California, U.S.",
  },
  {
    name: "Tom holland",
    description: "is an English actor.",
    img: "https://i.insider.com/5a43c31e8ba89220008b45ca?width=750&format=jpeg&auto=webp",
    age: 25,
    country: "London, England",
  },
];

let counter = 0;

setInterval(() => {
  if (counter >= users.length) {
    counter = 0;
  }
  renderToHtml();
}, 3000);

function renderToHtml() {
  mainActorsDiv.insertAdjacentHTML(
    "afterbegin",
    renderBasicHtml(users[counter++])
  );

  if (mainActorsDiv.children.length > 3) {
    mainActorsDiv.children[3].remove();
  }
  if (mainActorsDiv.children.length === 3) {
    mainActorsDiv.children[2].classList.add("fade-out");
  }
}

function renderBasicHtml(user) {
  return `
  <div class="actor fade-in row justify-content-center mb-5">
    <img
    src="${user.img}"
    alt="${user.name} img"
    class="col-12 col-sm-10 col-md-4 col-lg-4"
    />
   <div class="d-flex col-12 col-sm-10 col-md-8 flex-column justify-content-around align-items-start">
      <p>${user.name}</p>
      <p class="d-none d-md-block">${user.description}</p>
      <p>${user.age} Years old</p>
      <p class="d-none d-md-block">from: ${user.country}</p>
    </div>
  </div>`;
}
