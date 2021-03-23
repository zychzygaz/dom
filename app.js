class Food {
    constructor(name, kcal, carbs, fats, pro) {
        this.name = name;
        this.kcal = kcal;
        this.carbs = carbs;
        this.fats = fats;
        this.pro = pro;
    }
    static addToUI(food) {}
}

const form = document.querySelector("form");
const kcal = document.getElementById("kcal");
const carbs = document.getElementById("carbs");
const fats = document.getElementById("fats");
const proteins = document.getElementById("proteins");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (kcal.value === "") {
        kcal.style.borderColor = "red";
    }
});
