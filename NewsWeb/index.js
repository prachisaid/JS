console.log("This is index.js file")
// b57569316904466785dc7f2dafade2fe
let newsAccordian = document.getElementById('newsAccordian')

const xhr = new XMLHttpRequest();

let apiKey = 'b57569316904466785dc7f2dafade2fe';
let source = 'bbc-news'

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)

xhr.onload = function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        let news = "";
        let count = 1;
        for(key in articles){
            news += `
                    <div class="card my-1">
                      <div class="card-header" id="heading${count}">
                        <h2 class="mb-0">
                          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${count}" aria-expanded="false" aria-controls="collapse${count}">
                            ${articles[key].title}
                          </button>
                        </h2>
                      </div>
                  
                      <div id="collapse${count}" class="collapse" aria-labelledby="heading${count}" data-parent="#newsAccordian">
                        <div class="card-body">
                        ${articles[key].description}
                        <br>
                        <a href="${articles[key].url}" target="_blank">Read more</a>
                        </div>
                      </div>
                    </div>
                `
            console.log(articles[key])
            count++;
        }

        newsAccordian.innerHTML = news
    }
    else{
        console.log("Error occured")
    }
}

xhr.send();
