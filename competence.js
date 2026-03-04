document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".skills-menu button");
  const title = document.getElementById("screen-title");
  const content = document.getElementById("screen-content");
  const image = document.getElementById("screen-image");

  const data = {
    data: {
  title: "Data & Business Intelligence",
  content:
  "• Conception et développement de tableaux de bord interactifs (Power BI)\n" +
  "• Modélisation de données et structuration de modèles relationnels (schémas en étoile)\n" +
  "• Création de mesures et indicateurs avec DAX\n" +
  "• Analyse exploratoire et interprétation de données\n" +
  "• Nettoyage, transformation et préparation des données (Power Query / Excel avancé)\n" +
  "• Production d'indicateurs de pilotage et KPI pour l'aide à la décision\n" +
  "• Analyse statistique descriptive et interprétation des résultats\n" +
  "• Structuration et fiabilisation des bases de données\n" +
  "• Data visualisation et storytelling avec les données\n" +
  "• Exploitation et analyse de données RH (effectifs, turnover, absentéisme, indicateurs sociaux)\n" +
  "• Contribution à la gouvernance et à la qualité des données\n" +
  "• Reporting et restitution des analyses auprès des équipes métiers",
  image: "power-bi-overview.png"
},

   dev: {
  title: "Développement & Data",
  content:
  "• Manipulation et interrogation de bases de données avec SQL\n" +
  "• Écriture de requêtes (jointures, agrégations, sous-requêtes)\n" +
  "• Analyse et traitement de données avec Python (pandas, numpy)\n" +
  "• Automatisation de traitements et scripts d’analyse de données\n" +
  "• Analyse statistique et exploration de jeux de données\n" +
  "• Utilisation de R pour l’analyse statistique et la visualisation(PCA, regression linéaire, KNN, K-means)\n" +
  "• Gestion de versions et collaboration avec Git et GitHub\n" +
  "• Structuration de projets data et documentation du code",
  image: "imagessql.png"
},

    project: {
  title: "Gestion de projet & Systèmes d’Information",
  content:
  "• Conduite et coordination de projets liés aux systèmes d’information\n" +
  "• Analyse des besoins métiers et formalisation des spécifications fonctionnelles\n" +
  "• Cartographie des métiers et structuration des référentiels d’emplois et compétences\n" +
  "• Contribution à la mise en place de dispositifs de Gestion Prévisionnelle des Emplois et des Compétences (GPEC)\n" +
  "• Structuration et fiabilisation des données en vue d’une intégration dans les systèmes ERP / SIRH\n" +
  "• Coordination entre équipes techniques et équipes métiers\n" +
  "• Participation à la gouvernance et à la qualité des données\n" +
  "• Accompagnement de la transformation digitale des organisations\n" +
  "• Sensibilisation aux bonnes pratiques de gestion et d’exploitation des données\n" +
  "• Contribution à des démarches d’amélioration continue et d’innovation numérique.",
  image: "imagesprojet.png"
}
  };

  buttons.forEach(button => {

    button.addEventListener("click", function () {

      const skill = this.getAttribute("data-skill");

      title.textContent = data[skill].title;
      content.innerHTML = data[skill].content.replace(/\n/g, "<br><br>");
      image.src = data[skill].image;

      buttons.forEach(btn => btn.classList.remove("active-btn"));
      this.classList.add("active-btn");

    });

  });

});