let country = document.querySelector('#country');
let category = document.querySelector('#category');

// Fetching the data
const news = async (co, ca)=>{
  const rData = await fetch(`https://newsapi.org/v2/top-headlines?country=${co}&category=${ca}&apiKey=cfd66b25c2b8425482b9a7a47b44bdf3`, {
    method:'GET',
    headers: {}
  });
  const jData = await rData.json();
  const data = jData.articles;
  //console.log(data);

  for (let i in data){
    let perNews = data[i];
    let html = `
    <div class="newsBox" title="Latest News">
    <div id="newsBoxL">
      <h2>${perNews.title}</h2>
      <h4>Author: <b style='background-color:orange;'>${perNews.author}<b></h4>
      <h4>Published at:${perNews.publishedAt.slice(0,10)}</h4>
    </div>
    <div id="newsBoxR">
    <a target="_blank" href="${perNews.url}"><button id="readB">Read</button></a>
    </div>
    </div>`;
    
    document.querySelector('.newsBody').innerHTML += html;
    document.querySelector('#gapFiller').style.display = 'none';

  console.log(perNews.title);
  console.log(perNews.author);
  console.log(perNews.publishedAt.slice(0,10));
  }

  return data;
}

// Listerning Search
document.querySelector('#searchB').addEventListener('click', ()=>{
  document.querySelector('#gapFiller').style.display = 'block';
  document.querySelector('.newsBody').innerHTML = " ";
  let co = country.value;
  let ca = category.value;
  console.log('Country:',co,'Category:',ca)
  news(co, ca);
})

// Listerning Logo
document.querySelector('#logo').addEventListener('click', ()=>{
  open('https://linktr.ee/vbyte');
})