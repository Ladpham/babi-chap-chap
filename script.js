// Association des mots de passe et des URLs des équipes
const teams = {
  "equipe1": {
    passwords: ["pass1", "pass2", "pass3", "pass4"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe1.html"
  },
  "equipe2": {
    passwords: ["pass5", "pass6", "pass7", "pass8"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe2.html"
  },
  "equipe3": {
    passwords: ["pass9", "pass10", "pass11", "pass12"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe3.html"
  },
  "equipe4": {
    passwords: ["pass13", "pass14", "pass15", "pass16"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe4.html"
  },
  "equipe5": {
    passwords: ["pass17", "pass18", "pass19", "pass20"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe5.html"
  }
};

// Gestion du formulaire
document.getElementById("accessForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Empêche le rechargement de la page
  const code = document.getElementById("code").value; // Récupère le mot de passe
  let found = false; // Indicateur de correspondance

  // Vérifie chaque mot de passe dans les données des équipes
  for (const [team, data] of Object.entries(teams)) {
    if (data.passwords.includes(code)) {
      window.location.href = data.url; // Redirige vers l'URL de l'équipe correspondante
      found = true;
      break;
    }
  }

  if (!found) {
    // Affiche un message d'erreur si le mot de passe est incorrect
    document.getElementById("message").textContent = "Mot de passe incorrect.";
  }
});
