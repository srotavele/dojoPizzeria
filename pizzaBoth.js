        var pizza1 = {
            "crust": "deep dish",
            "sauce": "traditional",
            "cheese": ["mozzarella"],
            "toppings": ["pepperoni", "sausage"],
            "pizzaInfo": function(){
                console.log("Crust: " + this.crust);
                console.log("Sauce: " + this.sauce);
                console.log("Cheese: " + this.cheese);
            }
        }
        pizza1.pizzaInfo()

        var pizza2 = {
            "crust": "hand tossed",
            "sauce": "marinara",
            "cheese": ["mozzarella", "feta"],
            "toppings": ["mushrooms", "olives", "onions"],
            "pizzaInfo": function(){
                console.log("Crust: " + this.crust);
                console.log("Sauce: " + this.sauce);
                console.log("Cheese: " + this.cheese);
                console.log("Toppings: " + this.toppings);
            }
        }
        pizza2.pizzaInfo()
            