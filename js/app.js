const ShowNews =(country)=>{

// https://newsapi.org/v2/everything?q=tesla&from=2022-07-21&sortBy=publishedAt&apiKey=eaa9d897f19846558f3cbc6a786785de
// https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=eaa9d897f19846558f3cbc6a786785de`)
.then(response => response.json())
.then(data => {
    //data.articles[1].title
    for (var i = 0; i < data.articles.length; i++) {

        const container = document.querySelector('#container');

        const headline = document.createElement('h5');
        const para = document.createElement('p');
        const content = document.createElement('p')

        headline.classList.add('headline');
        headline.classList.add("bg-info");

        headline.classList.add('text-center');

        para.classList.add('p')
        para.classList.add('text-justify')
        para.classList.add('bg-light')


        content.classList.add('text-muted')

        headline.textContent =data.articles[i].title ;
        para.textContent=data.articles[i].description;
        content.textContent=data.articles[i].content;

        container.appendChild(headline);
        container.appendChild(para);
        container.appendChild(content)



    }

})
.catch(err => console.log(err))
}




const GlobalNews = () => {


    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-08-16&sortBy=popularity&apiKey=eaa9d897f19846558f3cbc6a786785de`)
        .then(response => response.json())
        .then(data => {
            //data.articles[1].title
            for (var i = 0; i < data.articles.length; i++) {

                const container = document.querySelector('#container');

                const headline = document.createElement('h5');
                const para = document.createElement('p');
                const content = document.createElement('p')

                headline.classList.add('headline');
                headline.classList.add("bg-info");

                headline.classList.add('text-center');

                para.classList.add('p')
                para.classList.add('text-justify')
                para.classList.add('bg-light')


                content.classList.add('text-muted')

                headline.textContent = data.articles[i].title;
                para.textContent = data.articles[i].description;
                content.textContent = data.articles[i].content;

                container.appendChild(headline);
                container.appendChild(para);
                container.appendChild(content)



            }

        })
        .catch(err => console.log(err))
}
