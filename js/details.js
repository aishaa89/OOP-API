import { UI } from "./UI.js";
let obj=new UI();

export class detail{
     //Function To get detailes of game with id
    static async getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fa10588233mshc39082def488a66p155b94jsn1e118abb0534',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
          const response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
          const result=await response.json();
           obj.DisplayDetailes(result);
       
        }



        //function to loading page
       static loading(){
           let detailSection=document.querySelector(".details");
            document.querySelector(".header").classList.add("d-none");
            document.querySelector(".mainbody").classList.add("d-none");
            document.querySelector(".navbar").classList.add("d-none");
            document.querySelector(".loading").classList.remove("d-none");
            detailSection.classList.remove("d-none");

           setTimeout(function(){
            detailSection.classList.remove("d-none");
             document.querySelector(".loading").classList.add("d-none");
            },1000) ;
            
        }

        
       
          
}