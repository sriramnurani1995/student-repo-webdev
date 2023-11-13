// Add your code here
document.addEventListener("DOMContentLoaded", function () {
  let main = document.querySelector("main");
  let section = document.createElement("section");
  let h1 = document.querySelector("h1");
  section.className = "container";
  main.appendChild(section);
  section.appendChild(h1);
  let img = document.createElement("img");
  img.className = "img";
  img.src = "../images/sriram.png";
  img.width = "200";
  img.alt =
    "The picture shows Sriram Nurani Subramanyam wearing a formal blazer before a flower decoration.";
  section.appendChild(img);
  let p = document.createElement("p");
  p.className = "bio";
  p.textContent =
    "My name is Sriram Subramanyam. I am enthusiastic about web development, and I have past experience in HTML, CSS, and JavaScript from my undergraduate studies. Furthermore, I have spent the last seven years as a software engineer at TCS, where I have worked with various web technologies, such as HTML, CSS, and JavaScript.";
  section.appendChild(p);
  let sentences = p.textContent.split(". ");
  let firstSentenceSpan = document.createElement("span");
  firstSentenceSpan.className = "first-sentence";
  firstSentenceSpan.textContent = sentences[0] + ". ";
  p.textContent = "";
  p.appendChild(firstSentenceSpan);
  p.appendChild(document.createTextNode(sentences.slice(1).join(". ")));
});
