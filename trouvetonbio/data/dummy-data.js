import Category from '../models/category';
//import Product from '../models/prodcut';


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

//export const PRODUCTS = [
//    new Product(
//        't1', ['c2'],
//        'tomates',
//        'Tomate jaune',
//        source='../images/legumes/tomates/tomate-jaune.jpg',
//        'tomate jaune a 2€/kg'
//
//    )
//]