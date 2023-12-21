class Product {
    constructor(title, description, price, thumbnail, code, stock,) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = Product.idGenerator();
    }

    static idGenerator() {
        !this.idIncrement ? (this.idIncrement = 1) : this.idIncrement++
        return this.idIncrement
    }
}
class ProductManager {
    constructor() {
        this.products = []
    }
    getProducts(){
        return this.products
        // console.log(this.products)
    }
    addProduct(title, description, price, thumbnail, code, stock, id) {
        if (!title || !description || !price || !thumbnail || !code || !stock || !id) {
            console.log("Todos los campos son obligatorios!");
        }

        if (this.products.some((p) => { p.code === code})) {
            console.log(`Ya existe un producto con el codigo ${code}`);
        } else {
            let newProduct = { title, description, price, thumbnail, code, stock, id };

            this.products.push(newProduct);
            console.log(`El producto ${title} fue agregado correctamente`);
        }
    }

    getProductsById(id) {
        let product = this.products.find((p) => p.id === id);

        if (product) {
            console.log(`No existe ningún producto con el ID ${id}`)
        } else {
            return product
        }
    }
}

const product = new ProductManager()

// Agregar productos
product.addProduct("Camiseta Boca Juniors", "Titular Temporada 23", 10500, "imagen ilustrativa", "CBJT23", true);
product.addProduct("Camiseta River Plate", "Titular Temporada 23", 10000, "imagen ilustrativa", "CRPT23", true)
product.addProduct("Camiseta Racing Club", "Titular Temporada 23", 8300, "imagen ilustrativa", "CRCT23", true)
product.addProduct("Camiseta Independiente", "Titular Temporada 23", 9100, "imagen ilustrativa", "CIT23", true)

//Mostrar Productos
console.log(getProducts());

//Verificar valores
product.addProduct("Camiseta Independiente", "Titular Temporada 23", 9100, "imagen ilustrativa", "CIT23", true)

//Busqueda por ID

console.log(product.getProductsById(2));
console.log(product.getProductsById(4123));
