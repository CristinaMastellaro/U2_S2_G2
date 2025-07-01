const travels = document.getElementById("countTravels");
const cards = document.getElementsByClassName("card");

travels.addEventListener("click", () => {
  const numberTravels =
    cards.length + document.getElementsByClassName("travel").length;

  alert(`Il numero di viaggi disponibili nel sito sono ${numberTravels}`);
});

const deleteCard = document.getElementById("deleteCards");

deleteCard.addEventListener("click", () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("d-none");
  }
});

const hotCards = document.querySelectorAll("#WelcomeSummer .card");

hotCards.forEach((card) => {
  card.innerHTML += `
    <span class="position-absolute badge rounded-pill bg-danger z-1">
      HOT
    </span>
  `;

  const spans = document.querySelectorAll("span");
  console.log("spans", spans);
  spans.forEach((span) => {
    // span.setAttribute("top", "30");
    // span.setAttribute("right", "30");
    span.style.right = "10px";
    span.style.top = "10px";
  });
});
