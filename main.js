var pageCounter = 1;
var animalContainer = document.getElementById('animal-info')
var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var myRequest = new XMLHttpRequest;
    myRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json',true);
    myRequest.onload = function() {
        myData = JSON.parse(myRequest.responseText);
        renderHTML(myData); 
            pageCounter++;
        if (pageCounter>3) {
            btn.classList.add('hide-me');
        }
    }
    myRequest.send();
})
function renderHTML(data) {
    var htmlString = '';
    for (i=0; i < data.length; i++) {
        htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + ' who likes ';
        for (j = 0; j<data[i].foods.likes.length;j++) {
            htmlString +=data[i].foods.likes[j]; 
            if (j+1<data[i].foods.likes.length) {
                htmlString += ' and ';
            }
        }
        htmlString += ' although dislikes ';
        for (j = 0; j<data[i].foods.dislikes.length;j++) {
            htmlString +=data[i].foods.dislikes[j]; 
            if (j+1<data[i].foods.dislikes.length) {
                htmlString += ' and ';
            }
        }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
    htmlString = '';
    }
}
/* 
javascript:var input=prompt("Enter word to search for");{window.open("https://dictionary.cambridge.org/dictionary/english/"+input)};
*/

