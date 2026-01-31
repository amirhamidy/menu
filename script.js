const fake_api = [
    {
        categoryName: "بار گرم",
        products: [
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
            { name: "اسپرسو 30 - 70", price: 60000, imgAddress: "assets/img/70-30.jpg" },
            { name: "لاته ساده", price: 85000, imgAddress: "assets/img/70-30.jpg" },
        ]
    },
    {
        categoryName: "بار سرد",
        products: [
            { name: "آیس لاته", price: 90000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس آمریکانو", price: 75000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس لاته", price: 90000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس آمریکانو", price: 75000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس لاته", price: 90000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس آمریکانو", price: 75000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس لاته", price: 90000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس آمریکانو", price: 75000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس لاته", price: 90000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس آمریکانو", price: 75000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس لاته", price: 90000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس آمریکانو", price: 75000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس لاته", price: 90000, imgAddress: "assets/img/70-30.jpg" },
            { name: "آیس آمریکانو", price: 75000, imgAddress: "assets/img/70-30.jpg" },
        ]
    }
];

const categoryList = document.getElementById("category-list");
const productList = document.getElementById("product-list");

const formatPrice = price =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const renderCategories = () => {
    categoryList.innerHTML = "";

    fake_api.map((category, index) => {
        categoryList.insertAdjacentHTML(
            "beforeend",
            `<span class="my-1 px-3 py-2 rounded-pill text-nowrap cs-bg"
             style="cursor:pointer"
             data-index="${index}">
        ${category.categoryName}
      </span>`
        );
    });
};

const renderAllProducts = () => {
    productList.innerHTML = "";

    fake_api.map((category, index) => {
        productList.insertAdjacentHTML(
            "beforeend",

            `<div class="d-flex justify-content-center align-items-center w-100">
                        <hr class="w-100 text-white"/>
                        <span id="cat-${index}" class="cs-fs-13 my-3 fw-bold text-center w-100"> ${category.categoryName}</span>
                        <hr class="w-100 text-white" />
                  </div>`
        );

        category.products.map(product => {
            productList.insertAdjacentHTML(
                "beforeend",
                `<div class="d-flex justify-content-between w-100 my-2 cs-bg-2 rounded-3 align-items-center">
          <img class="w-for-pr-img rounded-3" src="${product.imgAddress}" alt="${product.name}">
          <div class="d-flex flex-column w-100 text-end">
            <span class="cs-fs-13 px-3 my-1">${product.name}</span>
            <span class="cs-fs-13 px-3 my-1">${formatPrice(product.price)} تومان</span>
          </div>
        </div>`
            );
        });
    });
};

const setActiveCategory = index => {
    document.querySelectorAll("#category-list span").forEach(el =>
        el.classList.remove("cs-bg-active")
    );

    const activeItem = document.querySelector(
        `#category-list span[data-index="${index}"]`
    );
    activeItem.classList.add("cs-bg-active");

    document.getElementById(`cat-${index}`).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};

categoryList.addEventListener("click", e => {
    if (e.target.tagName === "SPAN") {
        setActiveCategory(e.target.dataset.index);
    }
});

renderCategories();
renderAllProducts();
setActiveCategory(0);
