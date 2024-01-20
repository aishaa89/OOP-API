
import { detail } from "./details.js";
import { game } from "./game.js";

//Get Games Categories

let gameCategory=new game();
gameCategory.getGames("MMORPG");

function opengameCategory(){
    var links=document.querySelectorAll(".nav-link");
   for(let i=0;i<links.length;i++){
    links[i].addEventListener("click",function(eventinfo){
        document.querySelector(".loading").classList.remove("d-none");
        setTimeout(function(){
             document.querySelector(".loading").classList.add("d-none");
            },1000) ;
        let current=document.querySelector(".active");
        if(current){
            current.classList.remove("active");
        }
        eventinfo.target.classList.add("active");
        let currentGategory=eventinfo.target.innerHTML;
        gameCategory.getGames(currentGategory);
    })
}
// To fixed Navbar
window.addEventListener("scroll",function(){
    let nav=document.querySelector(".navbar");
    nav.classList.toggle("fixed-top",window.scrollY>70);
   
   
})

}



          
opengameCategory()

  
 

 




