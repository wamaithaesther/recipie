const recipies = [
    {
        id: 1,
        name: "spaghetti Bolognese",
        ingredients: ["spaghetti", "beef", "tomato"],
        image:"https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
        instructions: " cook pasta,prepare sauce with beef & tomatoes, mix together "
    },
    {
       id: 2,
        name: "Chicken Curry",
        ingredients: ["chicken", "curry", "rice"],
        image:"https://www.themealdb.com/images/media/meals/1525873040.jpg",
        instructions: " Cook chicken with curry paste,add coconut milk, serve with rice"  
    },
    {
        id: 3,
        name: "vegetables stir fry",
        ingredients: ["brocoli", "carrots", "soy sauce"],
        image:"https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
        instructions: " Fry vegetables in hot soy sauce" 
    },
    {
       id: 4,
        name: "Beef Tacos",
        ingredients: ["beef", "taco shells", "chees"],
        image:"https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",
        instructions: "Cook beef, fill taco shells ,top with cheese and veggies"   
    },
    {
        id: 5,
        name: "Margherita Pizza",
        ingredients: ["dough", "tomato", "mozzarella","basil"],
        image:"https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
        instructions: "Bake dough with tomato sauce,mozzarelle, and basil leaves"    
    },
    {
        id: 6,
        name: "Caesar Salad",
        ingredients: ["lettuce", "croutons", "parmesan","chicken"],
        image:"https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
        instructions: "mix lettuce, chicken, permesan, andcroutons with ceaser dressing" 
    },
    {
        id: 7,
        name: "pancakes",
        ingredients: ["flour", "milk", "eggs"],
        image:"https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
        instructions: "mix ingredients, cook batter on skillet,serve with syrup"   
    },
    {
        id: 8,
        name: "Grilled salmon ",
        ingredients: ["salmon", "lemon", "garlic"],
        image:"https://www.themealdb.com/images/media/meals/1548772327.jpg",
        instructions: "Season salmon with garlic & lemon, grill until cooked"
    },
    {
        id: 9,
        name: "Fried Rice ",
        ingredients: ["rice", "egg", "soy sauce", "vegetables"],
        image:"https://www.themealdb.com/images/media/meals/1529443236.jpg",
        instructions: "stir fry rice with eggs,vegetables,and soy souce"
    },
    {
        id: 10,
        name: "Lasagna ",
        ingredients: ["pasta", "beef", "cheese", "tomato"],
        image:"https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
        instructions: "Layer pasta with beef sauce and cheese, bake until golden"
    },
    {
        id: 11,
        name: "Miso Soup ",
        ingredients: ["miso pate", "tofu", "seaweed"],
        image:"https://www.themealdb.com/images/media/meals/miso-soup.jpg",
        instructions: "Boil miso paste in water, and tofu and seaweed,serve hot"
    },
    {
        id: 10,
        name: "Lasagna ",
        ingredients: ["bun", "beef", "lettuce", "tomato"],
        image:"https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
        instructions: "Grill beef patty, place in bun with lettuce, tomato, and sauce"
    }
];
let favourites = JSON.parse(localStorage.getItem("favorites")) || [];
renderRecipies(recipies);

function renderRecipies(recipieList){
    const container= document.getElementById("recipieContainer");
    container.innerHTML ="";

    if(recipieList.length === 0){
        container.innerHTML = "<p>No recipies found 😢</p>";
        return;
    }

    recipieList.forEach(recipie =>{
        const card = document.createElement("div");
        card.classList.add("recipie-card");

        card.innerHTML = `
        <img src="${recipie.image}" alt="${recipie.name}">
        <h3>${recipie.name}<h3>
        <p><strong>Ingredients:</strong> ${recipie.ingredients.join(", ")}</p>
        <p>${recipie.instructions}</p>
        <button onclick="toggleFavourite(${recipie.id})">
          ${favourites.includes(recipie.id) ? "⭐ Remove Favourite" : "☆ Add to Favourite"}
          </button>
        `;

        container.appendChild(card);
    });
}

function searchRecipies() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = recipies.filter(recipie =>
       recipie.ingredients.some(ing => ing.toLowerCase().includes(query)) ||
       recipie.name.toLowerCase().includes(query)
    );
    renderRecipies(filtered)
}

function toggleFavourite(recipieId) {
    if (favourites.includes(recipieId)) {
        favourites =favourites.filter(id => id !== recipieId);
    } else {
        favourites.push(recipieId);
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    renderRecipies(recipies);
}
 
function showFavourites() {
    const favRecipes = recipies.filter(recipie => favourites.includes(recipie.id));
    renderRecipies(favRecipes);
}