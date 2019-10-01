import Event from '../models/event';
import EventType from '../models/eventtype';

// les types d'évènements
export const EVENTTYPE = [
    new EventType('Type1','Visite', require('../data/Images/events/type1.jpg')),
    new EventType('Type2','Cueillette', require('../data/Images/events/type2.jpg')),
    new EventType('Type3','Cave à vin', require('../data/Images/events/type3.jpg')),
];

export const EVENT = [
    new Event(
      'e1',
      'Type1',
      'owner1',
      'Visite ferme Gally',
      require("../assets/events/gally.jpg"),
      'Venez visiter la ferme de gally avec moi',
      '3 octobre',
    ),
    new Event(
      'e2',
      'Type1',
      'owner1',
      'Visite ferme Viltain',
      require("../assets/events/viltain.jpg"),
      'Viltain ouvre ses portes pour une visite',
      '23 novembre',
    ),
    new Event(
      'e3',
      'Type2',
      'owner1',
      'Cueillette champignons de paris',
      require("../assets/events/champi.jpg"),
      'Goutez aux bons champignons de paris',
      '1 janvier',
    ),
    new Event(
      'e4',
      'Type2',
      'owner1',
      'Chataignes chez moi',
      require("../assets/events/chataignes.jpg"),
      'Faites cuire des chataignes',
      '4 février',
    ),
    new Event(
      'e5',
      'Type2',
      'owner1',
      'Pommes à gogo',
      require("../assets/events/pomme.jpg"),
      'Ecore et toujours des pommes a déguster',
      '25 février',
    ),
    new Event(
      'e6',
      'Type3',
      'owner1',
      'Vin de bourgogne en dégustation',
      require("../assets/events/bourgogne.jpg"),
      'Nous ouvrons notre cave a vin pour dégustation',
      '12 février',
    ),
    new Event(
      'e7',
      'Type3',
      'owner1',
      'Beaujolais nouveau',
      require("../assets/events/beaujolais.jpg"),
      'Cest le grand jour le nouveau beaujolais',
      '3 Mars',
    ),
  ];
  
  export default EVENT;