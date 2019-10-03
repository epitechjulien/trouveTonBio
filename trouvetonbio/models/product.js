class Product {
  constructor(id, categoryIds,subcategoriesIds, ownerId, title, image, description, price, promotion) {
    this.id = id;
    this.categoryIds=categoryIds;
    this.subcategoriesIds=subcategoriesIds;
    this.ownerId = ownerId;
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;
    this.promotion = promotion;
  }
}

export default Product;
