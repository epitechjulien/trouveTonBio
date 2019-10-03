class Product {
<<<<<<< HEAD
  constructor(id, categoryIds,subcategoriesIds, ownerId, title, image, description, price, promo) {
=======
  constructor(id, categoryIds,subcategoriesIds, ownerId, title, image, description, price, promotion) {
>>>>>>> add promotion OK
    this.id = id;
    this.categoryIds=categoryIds;
    this.subcategoriesIds=subcategoriesIds;
    this.ownerId = ownerId;
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;
<<<<<<< HEAD
    this.promo = promo;
=======
    this.promotion = promotion;
>>>>>>> add promotion OK
  }
}

export default Product;
