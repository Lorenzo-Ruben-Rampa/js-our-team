const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Seleziono il mio output
const listTeam = document.querySelector(".container-card");

//Creo una variabile per l'oggetto da riempire
let cards = "";

//Estraggo tutti gli oggetti
for (let i=0; i < teamMembers.length; i++) {
  let membroIesimo = teamMembers[i];

//Recupero i valori di tutte le proprietà
  const {name, role, img, email} = membroIesimo;
  console.log(membroIesimo);


cards += 
`<div class="team-card">
  <div class="team-image">
    <img src="${img}" alt="${name}">
  </div>
  <div class="team-text">
    <h2>${name}</h2>
    <h3>${role}</h3>
    <p class="blue">${email}</p>
  </div>
</div>`

}

//Output
listTeam.innerHTML = cards;
