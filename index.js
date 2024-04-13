class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    describe() {
        return `${this.name}: $${this.price}`;
    }
}

class Menu {
    constructor() {
        this.products = [];
        this.selectedProduct = null;
    }

    start() {
        let selection;
        do {
            selection = this.showMainMenuOptions();
            switch (selection) {
                case '1':
                    this.createProduct();
                    break;
                case '2':
                    this.viewProducts();
                    break;
                case '3':
                    this.deleteProduct();
                    break;
                default:
                    break;
            }
        } while (selection !== '0');
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create Product
            2) View Products
            3) Delete Product
        `);
    }

    showProductMenuOptions(productInfo) {
        return prompt(`
            0) Back
            1) View Product Details
            2) Edit Product Details
            ${productInfo}
        `);
    }

    displayProducts() {
        let productString = '';
        for (let i = 0; i < this.products.length; i++) {
            productString += `${i}) ${this.products[i].name}\n`;
        }
        alert(productString);
    }

    createProduct() {
        let name = prompt('Enter name for new product');
        let price = parseFloat(prompt('Enter price for new product'));
        this.products.push(new Product(name, price)); 
    }

    viewProducts() {
        this.displayProducts();
        let index = prompt('Enter the index of the product you wish to view');
        if (index > -1 && index < this.products.length) {
            this.selectedProduct = this.products[index];
            let selection = this.showProductMenuOptions(this.selectedProduct.describe());
            switch (selection) {
                case '1':
                    alert(this.selectedProduct.describe());
                    break;
                case '2':
                    this.editProduct();
                    break;
                default:
                    break;
            }
        }
    }

    deleteProduct() {
        this.displayProducts();
        let index = prompt('Enter the index of the product you wish to delete');
        if (index > -1 && index < this.products.length) {
            this.products.splice(index, 1);
            alert('Product deleted successfully');
        } else {
            alert('Invalid index');
        }
    }

    editProduct() {
        let newName = prompt('Enter new name for the product');
        let newPrice = parseFloat(prompt('Enter new price for the product'));
        this.selectedProduct.name = newName;
        this.selectedProduct.price = newPrice;
        alert('Product details updated successfully');
    }
}

let menu = new Menu();
menu.start();
