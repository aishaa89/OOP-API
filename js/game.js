import { UI } from "./UI.js";
let obj=new UI();

export class game{
    //Function to get Games with category
    async  getGames(category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fa10588233mshc39082def488a66p155b94jsn1e118abb0534',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
       const response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
       let result=await response.json();
         obj.DisplayGame(result);
    }
}