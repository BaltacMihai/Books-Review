let rating = 'one';

 function ratingClicked(number){
  document.getElementById(rating).classList.remove("bold");
   document.getElementById(number).classList.add("bold");
   
   rating = number;
   console.log(number);
   showInfo();
 }



var repeat = -1;
var count = -1;
var title;
function showInfo() {
  repeat ++;
  title = document.getElementById("title").value;
  document.getElementById("titlePdf").textContent = title;

  const author = document.getElementById("author").value;
  document.getElementById("authorPdf").textContent = author;

  const genre = document.getElementById("genre").value;
  document.getElementById("genrePdf").textContent = genre;


if(repeat != 0 ) {
  const div = document.getElementById('ratingDiv');
  div.innerHTML = "";
  
}

  switch(rating)
  {
    case 'one': count = 1;
    break;
    case 'two': count = 2;
    break;
    case 'three': count = 3;
    break;
    case 'four': count = 4;
    break;
    case 'five': count = 5;
    break;
  }
  const div = document.getElementById('ratingDiv');
 for(let i = 0; i<count; i++)
{
  let img = document.createElement("img");
  img.src = "Icons/star.png";
  img.classList.add('icon-25');
  document.getElementById("ratingDiv").appendChild(img);
}
for(let i= count; i<5;i++)
{
  let img = document.createElement("img");
  img.src = "Icons/star-empty.png";
  img.classList.add('icon-25');
  document.getElementById("ratingDiv").appendChild(img);
}

  const date = document.getElementById("dtwnRead").value;
  document.getElementById("dtwnReadPdf").textContent = date;

//

const s1 = document.getElementById("s1").value;
document.getElementById("s1Pdf").textContent = s1;

const s2 = document.getElementById("s2").value;
document.getElementById("s2Pdf").textContent = s2;

const s3 = document.getElementById("s3").value;
document.getElementById("s3Pdf").textContent = s3;

const impressions = document.getElementById("impressions").value;
document.getElementById("impressionPdf").textContent = impressions;

const discover = document.getElementById("howIdisc").value;
document.getElementById("howIdiscPdf").textContent = discover;

const reader = document.getElementById("howshouldre").value;
document.getElementById("howshouldrePdf").textContent = reader;
//
const change = document.getElementById("howchanged").value;
document.getElementById("howchangedPdf").textContent = change;

//

const q1 = document.getElementById("q1").value;
document.getElementById("q1Pdf").textContent = q1;
const q2 = document.getElementById("q2").value;
document.getElementById("q2Pdf").textContent = q2;
const q3 = document.getElementById("q3").value;
document.getElementById("q3Pdf").textContent = q3;

const note = document.getElementById("note").value;
document.getElementById("notePdf").textContent = note;


}
function createPdf() {

  const main = document.getElementById("toConvert");
  var opt = {
    filename:     count+' '+title+'.pdf'
  };
  html2pdf().set(opt).from(main).save();

}
