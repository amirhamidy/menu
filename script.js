const categoryList = document.getElementById("category-list");
const productList = document.getElementById("product-list");

const formatPrice = price =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const fakeCategories = [
    { id: 1, title: "بار گرم", is_active: true },
    { id: 2, title: "دمنوش", is_active: true }
];

const fakeProducts = [
    {
        id: 1,
        title: "اسپرسو   30  ,  70",
        description: "قهوه ی هفتاد سی",
        image: "assets/img/70-30.jpg",
        prices: { single: 45000, double: 65000 },
        is_available: true,
        category: { id: 1, title: "بار گرم", is_active: true }
    },
    {
        id: 2,
        title: "کاپوچینو",
        description: "با فوم شیر",
        image: "",
        prices: { single: 60000 },
        is_available: true,
        category: { id: 1, title: "بار گرم", is_active: true }
    },
    {
        id: 3,
        title: "لاته",
        description: "",
        image: "",
        prices: { single: 70000 },
        is_available: true,
        category: { id: 1, title: "بار گرم", is_active: true }
    },
    {
        id: 4,
        title: "موکا",
        description: "قهوه شکلاتی",
        image: "",
        prices: { single: 75000, double: 95000 },
        is_available: true,
        category: { id: 1, title: "بار گرم", is_active: true }
    },
    {
        id: 5,
        title: "آمریکانو",
        description: "",
        image: "",
        prices: { single: 55000 },
        is_available: true,
        category: { id: 1, title: "بار گرم", is_active: true }
    },
    {
        id: 6,
        title: "دمنوش آرامش",
        description: "گل گاوزبان و سنبل‌الطیب",
        image: "",
        prices: { single: 50000 },
        is_available: true,
        category: { id: 2, title: "دمنوش", is_active: true }
    },
    {
        id: 7,
        title: "دمنوش انرژی",
        description: "",
        image: "",
        prices: { single: 55000 },
        is_available: true,
        category: { id: 2, title: "دمنوش", is_active: true }
    },
    {
        id: 8,
        title: "چای سبز",
        description: "",
        image: "",
        prices: { single: 40000 },
        is_available: true,
        category: { id: 2, title: "دمنوش", is_active: true }
    },
    {
        id: 9,
        title: "دمنوش زنجبیل",
        description: "",
        image: "",
        prices: { single: 45000 },
        is_available: true,
        category: { id: 2, title: "دمنوش", is_active: true }
    },
    {
        id: 10,
        title: "دمنوش نعناع",
        description: "",
        image: "",
        prices: { single: 42000 },
        is_available: true,
        category: { id: 2, title: "دمنوش", is_active: true }
    }
];


let categories = [];
let groupedProducts = {};

const loadCategories = async () => {
    categories = fakeCategories.filter(cat => cat.is_active);
};

const loadProducts = async () => {
    groupedProducts = {};

    fakeProducts.forEach(product => {
        if (!product.is_available || !product.category?.is_active) return;

        const catId = product.category.id;

        if (!groupedProducts[catId]) {
            groupedProducts[catId] = {
                categoryName: product.category.title,
                products: []
            };
        }

        groupedProducts[catId].products.push(product);
    });
};

const renderPrice = prices => {
    if (prices.single && prices.double) {
        return `
            <span class="cs-fs-13 mt-2">سینگل: ${formatPrice(prices.single)} تومان</span>
            <span class="cs-fs-13 mt-2">دبل: ${formatPrice(prices.double)} تومان</span>
        `;
    }
    return `<span class="cs-fs-13 mt-2">قیمت: ${formatPrice(prices.single)} تومان</span>`;
};

const renderCategories = () => {
    categoryList.innerHTML = "";

    categories.forEach(category => {
        categoryList.insertAdjacentHTML(
            "beforeend",
            `<span class="my-1 px-3 py-2 rounded-pill text-nowrap cs-bg"
                style="cursor:pointer"
                data-id="${category.id}">
                ${category.title}
            </span>`
        );
    });
};

const renderProducts = () => {
    productList.innerHTML = "";

    Object.entries(groupedProducts).forEach(([catId, category]) => {
        productList.insertAdjacentHTML(
            "beforeend",
            `<div class="d-flex justify-content-center align-items-center w-100">
                <hr class="w-100 text-white"/>
                <span id="cat-${catId}" class="cs-fs-13 my-3 fw-bold text-center w-100">
                    ${category.categoryName}
                </span>
                <hr class="w-100 text-white"/>
            </div>`
        );

        category.products.forEach(product => {
            productList.insertAdjacentHTML(
                "beforeend",
                `<div class="d-flex justify-content-between w-100 my-2 cs-bg-2 rounded-3 align-items-center px-3">
                    ${product.image
                    ? `<img class="w-for-pr-img rounded-3" src="${product.image}" alt="${product.title}">`
                    : `<span style="font-family: sans-serif !important" class="neon-text">
                                   Active Coffee
                               </span>`
                }
                    <div class="d-flex flex-column w-100 text-end px-3 py-2">
                        <span class="cs-fs-13 fw-bold">${product.title}</span>
                        ${renderPrice(product.prices)}
                        <p class="cs-fs-11 text-muted m-0 cs-fs-13 mt-2">
                            ${product.description || ""}
                        </p>
                    </div>
                </div>`
            );
        });
    });
};

const setActiveCategory = catId => {
    document.querySelectorAll("#category-list span")
        .forEach(el => el.classList.remove("cs-bg-active"));

    const activeItem = document.querySelector(
        `#category-list span[data-id="${catId}"]`
    );

    if (activeItem) {
        activeItem.classList.add("cs-bg-active");
        document.getElementById(`cat-${catId}`)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
};

categoryList.addEventListener("click", e => {
    if (e.target.tagName === "SPAN") {
        setActiveCategory(e.target.dataset.id);
    }
});

const init = async () => {
    await loadCategories();
    await loadProducts();
    renderCategories();
    renderProducts();

    if (categories.length) {
        setActiveCategory(categories[0].id);
    }
};

init();
