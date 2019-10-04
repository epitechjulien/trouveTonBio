import Category from '../models/category';
import Product from '../models/product';
import Subcategories from '../models/subcategories';

//les sous categories
export const SUBCATEGORIES = [

  //Fruits
  new Subcategories('sub1','c1','Banane', require('../data/Images/fruits/banane.png')),
  new Subcategories('sub2','c1','Pomme', require('../data/Images/fruits/pomme.jpg')),
  new Subcategories('sub3','c1','Fraise', require('../data/Images/fruits/Fraises.jpg')),
  new Subcategories('sub4','c1','Framboise', require('../data/Images/fruits/Framboise.jpg')),
  new Subcategories('sub5','c1','Kiwi', require('../data/Images/fruits/Kiwi.jpg')),
  new Subcategories('sub6','c1','Melon', require('../data/Images/fruits/Melon.jpg')),
  new Subcategories('sub7','c1','Pasteque', require('../data/Images/fruits/Pasteque.jpg')),
  new Subcategories('sub8','c1','Poire', require('../data/Images/fruits/Poire.jpg')),
  new Subcategories('sub9','c1','Figues', require('../data/Images/fruits/figue.jpg')),
  new Subcategories('sub10','c1','Agrumes', require('../data/Images/fruits/agrumes1.jpg')),
  new Subcategories('sub11','c1','Raisin', require('../data/Images/fruits/raisins.jpg')),
  new Subcategories('sub12','c1','Pêche', require('../data/Images/fruits/peche.jpg')),
  new Subcategories('sub13','c1','Prune', require('../data/Images/fruits/Prunes.jpg')),
  new Subcategories('sub14','c1','Tomate', require('../data/Images/fruits/Tomates.jpg')),

//Legumes
  new Subcategories('sub1','c2','Haricot', require('../data/Images/legumes/haricot.jpg')),
  new Subcategories('sub2','c2','Pomme de terre', require('../data/Images/legumes/Pommedeterre.jpg')),
  new Subcategories('sub3','c2','Chou-Fleur', require('../data/Images/legumes/ChouFleur.jpg')),
  new Subcategories('sub4','c2','Concombre', require('../data/Images/legumes/concombre.jpg')),
  new Subcategories('sub5','c2','Courgette', require('../data/Images/legumes/courgette.jpg')),
  new Subcategories('sub6','c2','Aubergine', require('../data/Images/legumes/aubergine.jpg')),
  new Subcategories('sub7','c2','Poireaux', require('../data/Images/legumes/Poireaux.jpg')),
  new Subcategories('sub8','c2','Champignon', require('../data/Images/legumes/champignon.jpg')),
  new Subcategories('sub9','c2','Carotte', require('../data/Images/legumes/carotte.jpg')),
  new Subcategories('sub10','c2','Brocoli', require('../data/Images/legumes/Brocolie.jpg')),
  


//Viandes
  new Subcategories('sub1','c3','Poulet', require('../data/Images/viandes/poulet.jpg')),
  new Subcategories('sub2','c3','Lapin', require('../data/Images/viandes/lapin.jpg')),
  new Subcategories('sub3','c3','Dinde', require('../data/Images/viandes/dinde.jpg')),
  new Subcategories('sub4','c3','Canard', require('../data/Images/viandes/canard.jpg')),
  new Subcategories('sub5','c3','Foies', require('../data/Images/viandes/foies.jpeg')),
  new Subcategories('sub6','c3','Boeuf', require('../data/Images/viandes/boeuf.jpg')),
  new Subcategories('sub7','c3','Porc', require('../data/Images/viandes/porc.jpg')),
  new Subcategories('sub8','c3','Veau', require('../data/Images/viandes/veau.jpg')),

//Poissons
  new Subcategories('sub1','c4','Saumon', require('../data/Images/poisson/Saumon.jpg')),
  new Subcategories('sub2','c4','Thon', require('../data/Images/poisson/thon.jpg')),
  new Subcategories('sub3','c4','Cabillaud', require('../data/Images/poisson/cabilaud.jpg')),
  new Subcategories('sub4','c4','Sardines', require('../data/Images/poisson/sardines.jpg')),
  new Subcategories('sub5','c4','Maquereau', require('../data/Images/poisson/Maquereau.jpg')),
  new Subcategories('sub6','c4','Merlan', require('../data/Images/poisson/merlan.jpg')),
  new Subcategories('sub7','c4','Sole', require('../data/Images/poisson/sole.jpg')),
  new Subcategories('sub8','c4','La Dorade', require('../data/Images/poisson/dorade.jpeg')),
  new Subcategories('sub9','c4','Fruit de mer', require('../data/Images/poisson/fruitDemer.jpg')),

//Crémerie

  new Subcategories('sub1','c5','Beurre', require('../data/Images/cremerie/beurre.jpeg')),
  new Subcategories('sub2','c5','Fromages', require('../data/Images/cremerie/fromages.jpg')),
  new Subcategories('sub3','c5','Lait', require('../data/Images/cremerie/Lait.jpg')),
  new Subcategories('sub4','c5','Yahourt', require('../data/Images/cremerie/yahourt.jpeg')),

//Boulangerie

  new Subcategories('sub1','c6','Pains', require('../data/Images/boulangerie/pains.jpg')),
  new Subcategories('sub2','c6','Pâtisserie', require('../data/Images/boulangerie/patisserie.jpg')),
  new Subcategories('sub3','c6','Viennoiseries', require('../data/Images/boulangerie/vienoiserie.jpeg')),

//Boissons
  new Subcategories('sub1','c7','Jus de fruits', require('../data/Images/boisson/Jusdefruits.jpg')),
  new Subcategories('sub2','c7','Boissons alcoolisées', require('../data/Images/boisson/boissonsalcoolisee.jpg')),
  



];

//les categories
export const CATEGORIES = [
    new Category('c1',['sub1','sub2','sub3','sub4','sub5','sub6','sub7','sub8','sub9','sub10','sub11','sub12','sub13','sub14'],'Fruits', '#FBFCFA', require('../data/Images/fruits/fruits.jpeg')),
    new Category('c2',['sub1','sub2','sub3','sub4','sub5','sub6','sub7','sub8','sub9','sub10'], 'Legumes', '#FBFCFA', require('../data/Images/legumes/legumes.jpeg')),
    new Category('c3',['sub1','sub2','sub3','sub4','sub5','sub6','sub7','sub8'], 'Viandes', '#FBFCFA', require('../data/Images/viandes/viandes.jpg')),
    new Category('c4',['sub1','sub2','sub3','sub4','sub5','sub6','sub7','sub8','sub9'] , 'Poissons', '#FBFCFA', require('../data/Images/poisson/poissons.jpg')),
    new Category('c5',['sub1','sub2','sub3','sub4'] , 'Crémerie', '#FBFCFA', require('../data/Images/cremerie/creme.jpg')),
    new Category('c6',['sub1','sub2','sub3'], 'Boulangerie', '#FBFCFA', require('../data/Images/boulangerie/boulangerie.jpg')),
    new Category('c7',['sub1','sub2'] , 'Boissons', '#FBFCFA', require('../data/Images/boisson/boisson.jpeg')),

  
];
 // les ruches
export const RUCHE = [
  new Ruche ('coordinate', 'title', 'description', require('../assets/photo.png'))
];

// export const SUBCATEGORIES = [
//   new Subcategories('sub1','c1','Fruits de saison', require('../data/Images/fruits/saison.jpg')),
//   new Subcategories('sub2','c1','Fruits rouges', require('../data/Images/fruits/rouges.jpg')),
//   new Subcategories('sub3','c1','Fruits exotiques', require('../data/Images/fruits/exotique.jpg')),
//   new Subcategories('sub4','c1','Fruits agrumes', require('../data/Images/fruits/agrumes.jpg')),
//   new Subcategories('sub5','c2','Légumes de saison', require('../data/Images/legumes/saison.jpeg')),
//   new Subcategories('sub6','c2','Légumes exotiques', require('../data/Images/legumes/exotique.jpg')),
//   new Subcategories('sub7','c2','Légumes Verts', require('../data/Images/legumes/verts.jpg')),
//   new Subcategories('sub8','c2','Légumes Rouges', require('../data/Images/legumes/rouges.jpg')),
//   new Subcategories('sub9','c3','Poulet', require('../data/Images/viandes/poulet.jpg')),
//   new Subcategories('sub10','c3','Lapin', require('../data/Images/viandes/lapin.jpg')),
//   new Subcategories('sub11','c3','Dinde', require('../data/Images/viandes/dinde.jpg')),
//   new Subcategories('sub12','c3','Canard', require('../data/Images/viandes/canard.jpg')),
//   new Subcategories('sub13','c3','Foies', require('../data/Images/viandes/foies.jpeg')),
//   new Subcategories('sub14','c3','Boeuf', require('../data/Images/viandes/boeuf.jpg')),
//   new Subcategories('sub15','c3','Porc', require('../data/Images/viandes/porc.jpg')),
//   new Subcategories('sub16','c3','Veau', require('../data/Images/viandes/veau.jpg')),
//   new Subcategories('sub17','c3','Barbecue', require('../data/Images/viandes/barbecue.jpg')),
// ];

// export const CATEGORIES = [
//     new Category('c1',['sub1','sub2','sub3','sub4'],'Fruits', '#FBFCFA', require('../data/Images/fruits/fruits.jpeg')),
//     new Category('c2',['sub5','sub6','sub7','sub8'], 'Legumes', '#FBFCFA', require('../data/Images/legumes/legumes.jpeg')),
//     new Category('c3',['sub9','sub10','sub11','sub12','sub13','sub14','sub15','sub16','sub17'], 'Viandes', '#FBFCFA', require('../data/Images/viandes/viandes.jpg')),
//     new Category('c4','' ,'Fromages', '#FBFCFA', require('../data/Images/fromages/fromages.jpg')),
//     new Category('c5','' , 'Vins', '#FBFCFA', require('../data/Images/vins/vins.jpeg')),
//     new Category('c6','' , 'Epicerie', '#FBFCFA', require('../data/Images/epicerie/epicerie.jpg')),
//     new Category('c7','' , 'Produit Laitier', '#FBFCFA', require('../data/Images/produit_laitier/creme.jpg')),
//     new Category('c8','' , 'Poissons', '#FBFCFA', require('../data/Images/poisson/poissons.jpg')),
//     new Category('c9','' , 'Boissons', '#FBFCFA', require('../data/Images/boisson/boisson.jpeg'))
// ];

export const PRODUCTS = [
    new Product(
      'p1',
      'c1',
      'sub1',
      'owner1',
      'Pomme Golden',
      require("../assets/pomme1.jpg"),
      'Comment cuisiner la pomme, la conserver, à quelles saisons la déguster pour une saveur optimale... découvrez tous les secrets de ce délicieux fruit.',
      5
    ),
    new Product(
      'p2',
      'c1',
      'sub6',
      'owner2',
      'BANANE naturelle',
      require("../assets/banane.png"),
      'Peut servir de fragrance dans les crèmes et revitalisants, les exfoliants et les beurres corporels, les soins capillaires, puis dans les savons liquides.Idéal dans les baumes à lèvres. Savons solides : Il faut faire des tests dans les savons solides de première coulée. Certaines saveurs tiennent moins bien.',
      9.99
    ),
    new Product(
      'p3',
      'c1',
      'sub1',
      'owner1',
      'Grappe de Raisins',
      require("../assets/raisins.jpg"),
      'Le raisin est le fruit de la vigne et appartient à la famille des vitacées. Il se présente sous forme de grappes composées de nombreux grains. Le raisin est originaire d’Asie Mineure. En France, c’est François 1er qui fit entrer le raisin sur les tables de Fontainebleau. Les raisins blancs sont de couleurs claires qui varient du vert au jaune, voire jaune doré. Quant aux raisins noirs, ils arborent des couleurs rouge, violette pouvant aller jusqu’au noir violet. En parfumerie, le raisin est reproduit par l’association de différentes molécules.',
      3.99
    ),
    new Product(
      'p4',
      'c1',
      'sub1',
      'owner2',
      'Poires d’hiver',
      require("../assets/poire.jpg"),
      "En bouche : sa chair, de couleur rosée en surface et blanche au centre, est fine et fondante. Juteuse et parfumée, elle a une saveur légèrement acidulée.",
      15.99
    ),
    new Product(
      'p5',
      'c1',
      'sub4',
      'owner3',
      'Pêches de Bretage',
      require("../assets/peche.jpg"),
      "Le fruit de l'été par excellence ! La pêche regorge de soleil, à condition de se débarrasser de sa peau rêche. Une seule solution : la monder. La technique est la même que pour les tomates : réalisez d'abord une légère incision à l' extrémité de la pêche, plongez-la dans une casserole deau bouillante une dizaine de secondes, puis stoppez la cuisson à laide dun bain deau glacée. La peau se retire alors très facilement, avec la pointe dun couteau.",
      3.39
    ),
    new Product(
      'p6',
      'c2',
      'sub5',
      'owner4',
      'Carrottes longues',
      require("../assets/carrot.jpg"),
      "La carotte primeur ne se conserve pas plus de 3 jours dans le bac à légumes du réfrigérateur. Celle de conservation (dite aussi 'de garde') s'y garde au moins une semaine.",
      2.49
    ),
    new Product(
      'p7',
      'c2',
      'sub5',
      'owner4',
      "Duo d'asperges vertes et blanches",
      require("../assets/asperge.jpg"),
      "L'épluchage, c'est ce qui conditionnera en partie la qualité finale. Bien que ce produit soit désormais et plus encore qu'avant considéré comme un produit de luxe (vu son prix !), il ne faut surtout pas hésiter à 'perdre' un peu de matière pour gagner de la qualité. La queue de l'asperge est protégée par des fibres rigides et dures. Ce sont ces fibres que l'on cherchera à éliminer. ",
      2.49
    ),
    new Product(
      'p8',
      'c2',
      'sub5',
      'owner4',
      "Choux-fleur",
      require("../assets/chouxfleur.jpg"),
      "Sur les étals français, on trouve du chou-fleur toute l’année. Ça tombe bien : cru ou cuit, il se prête à de multiples recettes et présente de sérieuses qualités nutritionnelles. Vous pouvez donc en manger sans compter !",
      2.49
    ),
    new Product(
      'p9',
      'c2',
      'sub5',
      'owner4',
      'Carrottes longues',
      require("../assets/carrot.jpg"),
      "La carotte primeur ne se conserve pas plus de 3 jours dans le bac à légumes du réfrigérateur. Celle de conservation (dite aussi 'de garde') s'y garde au moins une semaine.",
      2.49
    ),
    new Product(
      'p10',
      'c2',
      'sub2',
      'owner4',
      "Duo d'asperges vertes et blanches",
      require("../assets/asperge.jpg"),
      "L'épluchage, c'est ce qui conditionnera en partie la qualité finale. Bien que ce produit soit désormais et plus encore qu'avant considéré comme un produit de luxe (vu son prix !), il ne faut surtout pas hésiter à 'perdre' un peu de matière pour gagner de la qualité. La queue de l'asperge est protégée par des fibres rigides et dures. Ce sont ces fibres que l'on cherchera à éliminer. ",
      2.49
    ),
    new Product(
      'p11',
      'c2',
      'sub2',
      'owner4',
      "Choux-fleur",
      require("../assets/chouxfleur.jpg"),
      "Sur les étals français, on trouve du chou-fleur toute l’année. Ça tombe bien : cru ou cuit, il se prête à de multiples recettes et présente de sérieuses qualités nutritionnelles. Vous pouvez donc en manger sans compter !",
      2.49
    ),
    new Product(
      'p12',
      'c1',
      'sub1',
      'owner1',
      'Pomme Golden',
      require("../assets/pomme1.jpg"),
      'Comment cuisiner la pomme, la conserver, à quelles saisons la déguster pour une saveur optimale... découvrez tous les secrets de ce délicieux fruit.',
      7
    ),
    new Product(
      'p13',
      'c1',
      'sub1',
      'owner2',
      'BANANE naturelle',
      require("../assets/banane.png"),
      'Peut servir de fragrance dans les crèmes et revitalisants, les exfoliants et les beurres corporels, les soins capillaires, puis dans les savons liquides.Idéal dans les baumes à lèvres. Savons solides : Il faut faire des tests dans les savons solides de première coulée. Certaines saveurs tiennent moins bien.',
      9.99
    ),
    new Product(
      'p14',
      'c1',
      'sub1',
      'owner1',
      'Grappe de Raisins',
      require("../assets/raisins.jpg"),
      'Le raisin est le fruit de la vigne et appartient à la famille des vitacées. Il se présente sous forme de grappes composées de nombreux grains. Le raisin est originaire d’Asie Mineure. En France, c’est François 1er qui fit entrer le raisin sur les tables de Fontainebleau. Les raisins blancs sont de couleurs claires qui varient du vert au jaune, voire jaune doré. Quant aux raisins noirs, ils arborent des couleurs rouge, violette pouvant aller jusqu’au noir violet. En parfumerie, le raisin est reproduit par l’association de différentes molécules.',
      5.50
    ),
    new Product(
      'p15',
      'c1',
      'sub1',
      'owner2',
      'Poires d’hiver',
      require("../assets/poire.jpg"),
      "En bouche : sa chair, de couleur rosée en surface et blanche au centre, est fine et fondante. Juteuse et parfumée, elle a une saveur légèrement acidulée.",
      15.99
    ),
  ];
  
  export default PRODUCTS;