function createPdf() {
  const main = document.getElementById("toConvert");

  html2pdf().from(main).save();
}

function showInfo() {
  const title = document.getElementById("title").value;
  document.getElementById("titlePdf").textContent = title;

  const author = document.getElementById("author").value;
  document.getElementById("authorPdf").textContent = author;

  const genre = document.getElementById("genre").value;
  document.getElementById("genrePdf").textContent = genre;

  const link = document.getElementById("link").value;
  document.getElementById("linkPdf").textContent = link;

 let rating ;
  if (document.getElementById("one").checked)
   rating = document.getElementById("one").value;

  else if (document.getElementById("two").checked)
  rating = document.getElementById("two").value;

  else if (document.getElementById("three").checked)
  rating = document.getElementById("three").value;

  else if (document.getElementById("four").checked)
  rating = document.getElementById("four").value;

  else if (document.getElementById("five").checked)
  rating = document.getElementById("five").value;

  document.getElementById("ratingPdf").textContent = rating;

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

const note = document.getElementById("q1").value;
document.getElementById("notePdf").textContent = note;


}
