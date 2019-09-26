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
      'Red Shirt 2',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'A red t-shirt, perfect for days with non-red weather.',
      29.99
    ),
    new Product(
      'p2',
      ['c1'],
      ['owner2'],
      'Blue Carpet',
      'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'Fits your red shirt perfectly. To stand on. Not to wear it.',
      99.99
    ),
    new Product(
      'p3',
      ['c2'],
      ['owner1'],
      'Coffee Mug',
      'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
      'Can also be used for tea!',
      8.99
    ),
    new Product(
      'p4',
      ['c3'],
      ['owner2'],
      'The Book - Limited Edition',
      'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
      "What the content is? Why would that matter? It's a limited edition!",
      15.99
    ),
    new Product(
      'p5',
      ['c3'],
      ['owner3'],
      'PowerBook',
      'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
      'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
      2299.99
    ),
    new Product(
      'p6',
      ['c4'],
      ['owner4'],
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      5.49
    )
  ];
  
  export default PRODUCTS;