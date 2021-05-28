
function pizzaOven(crustType, sauceType, cheeses, toppings, sides) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses   = cheeses;
    pizza.toppings  = toppings;
    pizza.sides     = sides;
    return pizza;
}
var pizza1 = pizzaOven("deep dish","traditional","mozzarella",["pepperoni", "sausage"])
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"])
console.log(pizza2);

var pizza3 = pizzaOven("neopolitan", "pesto","buffalo mozzarella",["sundried tomatoes", "spinach","fresh garlic","artichoke hearts"], "tub of ranch")
console.log(pizza3);

var pizza4 = pizzaOven("peanut butter stuffed crust", "grape jelly","velveeta",["jalapeños", "spearmint tic tacs"," peat moss"], "manteca")
console.log(pizza4);