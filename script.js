// Association des mots de passe et des URLs des équipes
const teams = {
  "equipe1": {
    passwords: ["aB3dE9", "K8mQ2z", "rT4nP6", "W5uY3x"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe1.html"
  },
  "equipe2": {
    passwords: ["cE7bR1", "M2vS8q", "nG0pH4", "T9kL2a"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe2.html"
  },
  "equipe3": {
    passwords: ["Z1oI6e", "pJ3dU8", "F7gW1b", "xR4mS3"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe3.html"
  },
  "equipe4": {
    passwords: ["bQ8zL0", "Y6nC5o", "jK2vT9", "sD3pJ1"],
    url: "https://ladpham.github.io/babi-chap-chap/page_equipe4.html"
  },
  "equipe5": {
    passwords: ["L0eR8q", "uF4kW7", "Q3bN2h", "oP1cV6"],
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
