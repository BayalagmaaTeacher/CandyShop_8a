let newsList = [
  {
    title: "default medee",
    body: "default body bla bla bla",
  },
];

function displayNews() {
  let newNewsList = document.getElementById("news_list");
  let newDiv = "";

  for (let i = 0; i < newsList.length; i++) {
    newDiv += "<p>" + (i + 1) + ". " + newsList[i].title + "</p>" + "</br>";
    newDiv += "<p>" + newsList[i].body + "</p>" + "</br>";
  }
  console.log(newDiv);
  newNewsList.innerHTML = newDiv;
}
console.log('lol')

function addNews() {
  let newNewsTitle = document.getElementById("news_title").value;
  let newNewsBody = document.getElementById("news_body").value;
  let newNews = {
    title: newNewsTitle,
    body: newNewsBody,
  };
  newsList.push(newNews);
  console.log(newsList);
  displayNews();
}
