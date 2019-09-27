import Category from '../models/category';
import Product from '../models/products';


//les categories
export const CATEGORIES = [
    new Category('c1', 'Fruits', '#FBFCFA', require('../data/Images/fruits/fruits.jpeg')),
    new Category('c2', 'Legumes', '#FBFCFA', require('../data/Images/legumes/legumes.jpeg')),
    new Category('c3', 'Viandes', '#FBFCFA', require('../data/Images/viandes/viandes.jpg')),
    new Category('c4', 'Fromages', '#FBFCFA', require('../data/Images/fromages/fromages.jpg')),
    new Category('c5', 'Vins', '#FBFCFA', require('../data/Images/vins/vins.jpeg')),
    new Category('c6', 'Epicerie', '#FBFCFA', require('../data/Images/epicerie/epicerie.jpg')),
    new Category('c7', 'Produit Laitier', '#FBFCFA', require('../data/Images/produit_laitier/creme.jpg')),
    new Category('c8', 'Poissons', '#FBFCFA', require('../data/Images/poisson/poissons.jpg')),
    new Category('c9', 'Boissons', '#FBFCFA', require('../data/Images/boisson/boisson.jpeg'))
];

export const PRODUCTS = [
    new Product(
      'p1',
      'c1',
      'owner1',
      'Pomme Golden',
      require("../assets/pomme1.jpg"),
      'Comment cuisiner la pomme, la conserver, à quelles saisons la déguster pour une saveur optimale... découvrez tous les secrets de ce délicieux fruit.',
      5
    ),
    new Product(
      'p2',
      ['c1'],
      ['owner2'],
      'BANANE naturelle',
      require("../assets/banane.png"),
      'Peut servir de fragrance dans les crèmes et revitalisants, les exfoliants et les beurres corporels, les soins capillaires, puis dans les savons liquides.Idéal dans les baumes à lèvres. Savons solides : Il faut faire des tests dans les savons solides de première coulée. Certaines saveurs tiennent moins bien.',
      9.99
    ),
    new Product(
      'p3',
      ['c1'],
      ['owner1'],
      'Grappe de Raisins',
      require("../assets/raisins.jpg"),
      'Le raisin est le fruit de la vigne et appartient à la famille des vitacées. Il se présente sous forme de grappes composées de nombreux grains. Le raisin est originaire d’Asie Mineure. En France, c’est François 1er qui fit entrer le raisin sur les tables de Fontainebleau. Les raisins blancs sont de couleurs claires qui varient du vert au jaune, voire jaune doré. Quant aux raisins noirs, ils arborent des couleurs rouge, violette pouvant aller jusqu’au noir violet. En parfumerie, le raisin est reproduit par l’association de différentes molécules.',
      3.99
    ),
    new Product(
      'p4',
      ['c1'],
      ['owner2'],
      'Poires d’hiver',
      require("../assets/poire.jpg"),
      "En bouche : sa chair, de couleur rosée en surface et blanche au centre, est fine et fondante. Juteuse et parfumée, elle a une saveur légèrement acidulée.",
      15.99
    ),
    new Product(
      'p5',
      ['c1'],
      ['owner3'],
      'Pêches de Bretage',
      require("../assets/peche.jpg"),
      "Le fruit de l'été par excellence ! La pêche regorge de soleil, à condition de se débarrasser de sa peau rêche. Une seule solution : la monder. La technique est la même que pour les tomates : réalisez d'abord une légère incision à l' extrémité de la pêche, plongez-la dans une casserole deau bouillante une dizaine de secondes, puis stoppez la cuisson à laide dun bain deau glacée. La peau se retire alors très facilement, avec la pointe dun couteau.",
      3.39
    ),
    new Product(
      'p6',
      ['c2'],
      ['owner4'],
      'Carrottes longues',
      require("../assets/carrot.jpg"),
      "La carotte primeur ne se conserve pas plus de 3 jours dans le bac à légumes du réfrigérateur. Celle de conservation (dite aussi 'de garde') s'y garde au moins une semaine.",
      2.49
    ),
    new Product(
      'p7',
      ['c2'],
      ['owner4'],
      "Duo d'asperges vertes et blanches",
      require("../assets/asperge.jpg"),
      "L'épluchage, c'est ce qui conditionnera en partie la qualité finale. Bien que ce produit soit désormais et plus encore qu'avant considéré comme un produit de luxe (vu son prix !), il ne faut surtout pas hésiter à 'perdre' un peu de matière pour gagner de la qualité. La queue de l'asperge est protégée par des fibres rigides et dures. Ce sont ces fibres que l'on cherchera à éliminer. ",
      2.49
    ),
    new Product(
      'p8',
      ['c2'],
      ['owner4'],
      "Choux-fleur",
      require("../assets/chouxfleur.jpg"),
      "Sur les étals français, on trouve du chou-fleur toute l’année. Ça tombe bien : cru ou cuit, il se prête à de multiples recettes et présente de sérieuses qualités nutritionnelles. Vous pouvez donc en manger sans compter !",
      2.49
    ),
    new Product(
      'p9',
      ['c2'],
      ['owner4'],
      'Carrottes longues',
      require("../assets/carrot.jpg"),
      "La carotte primeur ne se conserve pas plus de 3 jours dans le bac à légumes du réfrigérateur. Celle de conservation (dite aussi 'de garde') s'y garde au moins une semaine.",
      2.49
    ),
    new Product(
      'p10',
      ['c2'],
      ['owner4'],
      "Duo d'asperges vertes et blanches",
      require("../assets/asperge.jpg"),
      "L'épluchage, c'est ce qui conditionnera en partie la qualité finale. Bien que ce produit soit désormais et plus encore qu'avant considéré comme un produit de luxe (vu son prix !), il ne faut surtout pas hésiter à 'perdre' un peu de matière pour gagner de la qualité. La queue de l'asperge est protégée par des fibres rigides et dures. Ce sont ces fibres que l'on cherchera à éliminer. ",
      2.49
    ),
    new Product(
      'p11',
      ['c2'],
      ['owner4'],
      "Choux-fleur",
      require("../assets/chouxfleur.jpg"),
      "Sur les étals français, on trouve du chou-fleur toute l’année. Ça tombe bien : cru ou cuit, il se prête à de multiples recettes et présente de sérieuses qualités nutritionnelles. Vous pouvez donc en manger sans compter !",
      2.49
    ),
    new Product(
      'p12',
      'c1',
      'owner1',
      'Pomme Golden',
      require("../assets/pomme1.jpg"),
      'Comment cuisiner la pomme, la conserver, à quelles saisons la déguster pour une saveur optimale... découvrez tous les secrets de ce délicieux fruit.',
      5
    ),
    new Product(
      'p13',
      ['c1'],
      ['owner2'],
      'BANANE naturelle',
      require("../assets/banane.png"),
      'Peut servir de fragrance dans les crèmes et revitalisants, les exfoliants et les beurres corporels, les soins capillaires, puis dans les savons liquides.Idéal dans les baumes à lèvres. Savons solides : Il faut faire des tests dans les savons solides de première coulée. Certaines saveurs tiennent moins bien.',
      9.99
    ),
    new Product(
      'p14',
      ['c1'],
      ['owner1'],
      'Grappe de Raisins',
      require("../assets/raisins.jpg"),
      'Le raisin est le fruit de la vigne et appartient à la famille des vitacées. Il se présente sous forme de grappes composées de nombreux grains. Le raisin est originaire d’Asie Mineure. En France, c’est François 1er qui fit entrer le raisin sur les tables de Fontainebleau. Les raisins blancs sont de couleurs claires qui varient du vert au jaune, voire jaune doré. Quant aux raisins noirs, ils arborent des couleurs rouge, violette pouvant aller jusqu’au noir violet. En parfumerie, le raisin est reproduit par l’association de différentes molécules.',
      3.99
    ),
    new Product(
      'p15',
      ['c1'],
      ['owner2'],
      'Poires d’hiver',
      require("../assets/poire.jpg"),
      "En bouche : sa chair, de couleur rosée en surface et blanche au centre, est fine et fondante. Juteuse et parfumée, elle a une saveur légèrement acidulée.",
      15.99
    ),
  ];
  
  export default PRODUCTS;