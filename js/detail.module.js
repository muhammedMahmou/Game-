import { Ui } from "./ui.module.js"

export class Detail{
    constructor(id){
        document.getElementById("close").addEventListener('click', closeDetails)
        document.addEventListener("keyup", function (event) {
            if(event.code=="Escape"){
                closeDetails()
            }
        })
        this.getDetail(id)
    }
    async getDetail(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e68452271emsh97c461df85330e6p1d9c4fjsnca08f96af7fc',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        const response = await url.json()
        console.log(response);
      new Ui().displayDetails(response)
    }
}
function closeDetails(){
    document.getElementById("myGames").classList.replace("d-none","d-block")
    document.getElementById("details").classList.replace("d-block","d-none")
}
