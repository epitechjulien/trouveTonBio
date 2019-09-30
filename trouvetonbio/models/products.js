
class Product {
    constructor(id, categoryIds,subcategoriesIds, ownerId, title, imageUrl, description, price) {
        this.id=id;
        this.categoryIds=categoryIds;
        this.subcategoriesIds=subcategoriesIds;
        this.ownerId= ownerId;
        this.title = title;
        this.imageUrl= imageUrl;
        this.description = description;
        this.price = price;
    }
}

export default Product;