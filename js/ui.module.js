export class Ui{
    constructor(){}
    displayGames(data){
        let temp=""
        for (let i = 0; i < data.length; i++) {
            temp+=`<div class="col">
              <div class="card" id-game="${data[i].id}">
                <div class="card-body" >
                  <figure class="position-relative ">
                    <img src=${data[i].thumbnail} alt="game" class="card-img-top">
                  </figure>
                  <figcaption>
                    <div class="display">
                      <h3 class="small">${data[i].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                    <p class="card-text small text-center opacity-50">${(data[i].short_description)?data[i].short_description.split(" ").splice(0,10).join(): "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, alias?"}</p>
                  </figcaption>
                </div>
                <footer class="card-footer small display">
                  <span class="badge">${data[i].genre}</span>
                  <span class="badge">${data[i].platform}</span>
                </footer>
              </div>
              </div>`
        }
        document.getElementById("myRow").innerHTML=temp
    }
    displayDetails(data){
        let temp =""
        temp+=`
                    <div class="col-md-4">
                      <img src="${data.thumbnail}" alt="Game Details" class="w-100">
                    </div>
                    <div class="col-md-6">
                      <h3>Title${data.title}</h3>
                      <p>Category:<span class="badge text-bg-info">${data.genre}</span></p>
                      <p>Platform:<span class="badge text-bg-info">${data.platform}</span></p>
                      <p>Status:<span class="badge text-bg-info">${data.status}</span></p>
                      <p class="small">${data.description}</p>
                      <a href="${data.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
                    </div>
                  </div>
                </div>`
                document.getElementById("detailsContent").innerHTML=temp
    }
}

