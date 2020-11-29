
/*function displayCocktailImage() {
}
 
displayCocktailImage();*/
//Display data from Cocktaildb API - user search value
//Below are two different methods to collect data from an API. https://www.youtube.com/watch?v=tc8DU14qX6I as a guide to write the code

//Fetch request using async/await syntax then call the async function to make it happen.


async function getCocktail() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php/preview");
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    const drinkName = jsonresponse.drinks[0].strDrink;
    const data = jsonresponse.drinks[0].strInstructions;
    let img = jsonresponse.drinks[0].strDrinkThumb;
    console.log(drinkName);
    console.log(data);
    console.log(img);
    console.log(typeof(data));
    console.log(typeof(img));
    document.getElementById("cocktail-card").innerHTML = drinkName;
    document.getElementById("data").innerHTML = data;
    document.getElementById("image").innerHTML = `<img class="ctimage" src="${img}">`; //credit: https://www.codegrepper.com/code-examples/javascript/how+to+display+image+in+html+from+json+object
}



getCocktail() 
    .then(response => {
        console.log("WOOP!");
    })
    .catch(error => {

        console.log("Boo error");
        console.error(error);
    });



//Fetch request using .then method

/*fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka")
    .then(response => {
        console.log(response);
        return response.json();
    }).then(jsonresponse => {
        console.log(jsonresponse);
        document.getElementById("cocktail-card")
    })
    */