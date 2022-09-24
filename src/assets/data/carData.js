// import all images from assets/images directory
import img01 from "../all-images/cars-img/caissier.png";
import img07 from "../all-images/cars-img/excel.png";
import img03 from "../all-images/cars-img/impexp.png";
import img04 from "../all-images/cars-img/primavera.png";
import img05 from "../all-images/cars-img/qhse.png";
import img02 from "../all-images/cars-img/repartition.png";
import img06 from "../all-images/cars-img/supply.jpg";


const carData = [
  {
    id: 1,
    type: "Continue",
    participant: 82,
    title: "Caissier/Caissiére ou Assistante de direction",
    imgUrl: img01,
    lienUrl: "lienUrl 3",
    price: 50,
    formateur: "Jmili bechir ",
    lieu: "Notre Local",
    duration: "3 Mois",
    time: "time",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    type: "Continue",
    participant: 102,
    title: "Réparation Smartphones et Tablettes",
    imgUrl: img02,
    lienUrl: "lienUrl-2022",
    price: 50,
    formateur: "Jmili bechir ",
    lieu: "Notre Local",
    duration: "5 Mois",
    time: "time",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    type: "Diplomante",
    participant: 132,
    title: "IMPORT & EXPORT ",
    imgUrl: img03,
    lienUrl: "lienUrl-2022",
    price: 65,
    formateur: "Jmili bechir ",
    lieu: "lieu ",
    duration: "Durée",
    time: "time",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },{
    id: 4,
    type: "Diplomante",
    participant: 112,
    title: "PROJECT MANAGEMENT",
    imgUrl: img04,
    lienUrl: "24 Septembre 2022",
    price: 50,
    formateur: "chaque samedi",
    lieu: "lieu Navigation",
    duration: "Heated seats",
    time: "Primavera P6",
    description:
      " Le centre de formation « IMNT » organise une session de formation portant sur le thème suivant : Gestion de projet avec Primavera P6 animée par un formateur certifié en Management de projets PMP - PMI (USA) et certifié Oracle (Primavera P6 Enterprise Project Portfolio Management 8 Certified Implementation Specialist)",
  },
  {
    id: 5,
    type: "Diplomante",
    participant: 112,
    title: "Devenir Responsable QHSE",
    imgUrl: img05,
    lienUrl: "lienUrl 3",
    price: 50,
    formateur: "20kmpl",
    lieu: "lieu Navigation",
    duration: "Heated seats",
    time: "Responsable QHSE",
    description:
      ` ✔️Pourquoi Devenir Responsable QHSE❓
      ✔️Quel est le rôle d'un Responsable QHSE❓\t
      ✔️Quelles sont les tâches d'un Responsable de Qualité❓
      #IMNT répond à tous vos interrogations et met à votre disposition une Formation professionnelle "𝐃𝐄𝐕𝐄𝐍𝐈𝐑 𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐀𝐁𝐋𝐄 #𝙌𝙃𝙎𝙀 "
      IL est à noter que : Nos certificats sont reconnus à l’échelle national et valables à L’étranger.`,
  },
  {
    id: 6,
    type: "Continue",
    participant: 112,
    title: "Responsable Supply Chain Management",
    imgUrl: img06,
    lienUrl: "https",
    price: 180,
    formateur: "Jmili bechir ",
    lieu: "Disponible dans nos espaces",
    duration: "3 mois",
    time: "chaque Dimanche de 10h à 13h",
    description:
      " 3 modules: Lean SCM // Warehousing // achat et approvisionnement",
  },
  {
    id: 7,
    type: "Diplomante", 
    participant: 112,
    title: "Exel Avancée",
    imgUrl: img07,  
    lienUrl: "https",
    price: 180,
    formateur: "Jmili bechir ",
    lieu: "Disponible dans nos espaces",
    duration: "3 mois",
    time: "chaque Dimanche de 10h à 13h",
    description:
      " Changez de voie professionnelle et entamez une carrière en tant que développeur FullStack JS Junior. Le programme vous permet de suivre une formation intensive qui vous permettra de lancer une carrière de développeur FullStack JS et de maîtriser les technologies demandées par les employeurs.",
  },

];

export default carData;
