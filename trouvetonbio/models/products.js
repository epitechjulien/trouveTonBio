class Product {
    constructor(id, categoryIds, ownerId, title, imageUrl, description, price) {
        this.id=id;
        this.categoryIds=categoryIds;
        this.ownerId= ownerId;
        this.title = title;
        this.imageUrl= imageUrl;
        this.description = description;
        this.price = price;
    }
}

export default Product;