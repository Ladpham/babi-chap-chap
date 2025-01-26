// Association des mots de passe et des URLs des équipes
const teams = {
  "equipe1": {
    passwords: ["pass1", "pass2", "pass3", "pass4"],
    url: generateRandomURL()
  },
  "equipe2": {
    passwords: ["pass5", "pass6", "pass7", "pass8"],
    url: generateRandomURL()
  },
  "equipe3": {
    passwords: ["pass9", "pass10", "pass11", "pass12"],
    url: generateRandomURL()
  },
  "equipe4": {
    passwords: ["pass13", "pass14", "pass15", "pass16"],
    url: generateRandomURL()
  },
  "equipe5": {
    passwords: ["pass17", "pass18", "pass19", "pass20"],
    url: generateRandomURL()
  }
};

// Génère un URL aléatoire
function generateRandomURL() {
  return "page_" + Math.random().toString(36).substring(2, 15) + ".html";
}

// Gestion du formulaire
document.getElementById("accessForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const code = document.getElementById("code").value;
  let found = false;

  // Vérifie le mot de passe
  for (const [team, data] of Object.entries(teams)) {
    if (data.passwords.includes(code)) {
      window.location.href = data.url;
      found = true;
      break;
    }
  }

  if (!found) {
    document.getElementById("message").textContent = "Mot de passe incorrect.";
  }
});
