// class Food {
//     constructor(name, kcal, carbs, fats, pro) {
//         this.name = name;
//         this.kcal = kcal;
//         this.carbs = carbs;
//         this.fats = fats;
//         this.pro = pro;
//     }
//     static addToUI(food) {}
// }

// const form = document.querySelector("form");
// const food = document.getElementById("food");
// const kcal = document.getElementById("kcal");
// const carbs = document.getElementById("carbs");
// const fats = document.getElementById("fats");
// const proteins = document.getElementById("proteins");
// const tbody = document.querySelector("tbody");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (food.value === "") {
//         food.className = "error";
//     } else {
//     }

//     setTimeout(changeBack, 2000);
//     function changeBack() {
//         food.className = "";
//     }
// });

// console.log(form, food, kcal, carbs, fats, proteins, tbody);

function myFunction(x) {
    return x ** 2;
}

try {
    console.log(2 / 0);
} catch (e) {
    console.log(e);
} finally {
    console.log("created from finally block");
}
