import { Detail } from "./detail.module.js";
import { Ui } from "./ui.module.js";
export class Games{
    constructor(){
    document.querySelectorAll(".nav-link").forEach((link)=>{
        link.addEventListener("click",()=>{
            this.changeActiveLink(link)
            const category = link.getAttribute( "data-category" );
            this.getGames(category)
        })
    })  
    this.loading=document.querySelector(".loading")
    this.details=document.getElementById("details")
    this.myGames=document.getElementById("myGames")
    this.ui = new Ui()
    this.getGames("shooter")
    }
    changeActiveLink(link){
        document.querySelector(".navbar-nav .active").classList.remove('active')
        link.classList.add('active');
    }
    async getGames(category){
        this.loading.classList.remove('d-none') 
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': 'e68452271emsh97c461df85330e6p1d9c4fjsnca08f96af7fc'
            }
        };;
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options) ;
    const myData = await api.json()
    this.ui.displayGames(myData);
    this.loading.classList.add("d-none");
    this.startEvent()
}
    startEvent(){
    document.querySelectorAll(".card").forEach((element)=>{
        element.addEventListener("click",()=>{
            this.details.classList.replace("d-none","d-block")
            this.myGames.classList.replace("d-block","d-none")
             const detail = new Detail(element.getAttribute("id-game"))
        })
    })
}
}

