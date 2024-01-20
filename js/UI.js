import { detail } from "./details.js";


export class UI{
  
  //Function of Display Games
   DisplayGame(list) {
    let cartoon="";
    for(let i=0;i<list.length;i++){
        cartoon+=`
        <div class="col-sm-4 col-md-3 ">
        <div class="card w3-grayscale-max  h-100  bg-transparent" id="${list[i].id}">
            <div  class="card-body">
                  <img class="card-img-top" src="${list[i].thumbnail}">  
                  <div class="hstack mt-3 justify-content-between">
                     <h3 class="h3 small">${list[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text small text-center opacity-50">
                     ${list[i].short_description.split(' ').slice(0,6).join(' ')}
                  </p>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
               <span class="badge badge-color">${list[i].genre}</span>
               <span class="badge badge-color">${list[i].platform}</span>
   
            </footer>
         </div>
        
    </div>
        
        `
    }
    document.getElementById("games").innerHTML=cartoon;
    
    let cards=document.querySelectorAll(".mainbody .card");
    for(let i=0;i<cards.length;i++){
     cards[i].addEventListener("click",function(e){
       detail.getDetails(cards[i].getAttribute("id")); 
     })
     cards[i].addEventListener("mouseenter",function(){
      cards[i].classList.remove("w3-grayscale-max");
  })
  cards[i].addEventListener("mouseleave",function(){
    cards[i].classList.add("w3-grayscale-max");
})
       
 }
  }
  

  //Function of Display Detailes
  DisplayDetailes(gameDetail){
   let detailSection=document.querySelector(".details");
     detail.loading();
   detailSection.innerHTML =`
          <div class="container">
          <div class="row">
            <div class="head d-flex justify-content-between align-items-center">
              <h1 class="text-light py-4">Details Game</h1>
              <button class="btn-close btn-close-white" id="btnClose"></button>
          </div>
            <div class="col-md-4">
              <div class="gameImage">
                 <img src="${gameDetail.thumbnail}" alt="">
                </div>
            </div>
              <div class="col-md-8">
                <div class="text-light">
                <h3>Title: ${gameDetail.title}</h3>
                <p>Category: <span class="badge text-bg-info"> ${gameDetail.genre}</span> </p>
                <p>Platform: <span class="badge text-bg-info"> ${gameDetail.platform}</span> </p>
                <p>Status: <span class="badge text-bg-info"> ${gameDetail.status}</span> </p>
                <p class="small">${gameDetail.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${gameDetail.game_url}">Show Game</a>
             </div>
            </div>
          </div>
        </div>
          
          
          `
   document.getElementById("btnClose").addEventListener("click",function(){
      detailSection.classList.add("d-none");
      document.querySelector(".header").classList.remove("d-none");
      document.querySelector(".mainbody").classList.remove("d-none");
      document.querySelector(".navbar").classList.remove("d-none");
   })
  }


}






