class Package {
    constructor(name, phone, number, email, price, image, description) {
        this.name = name;
        this.phone = phone;
        this.number = number;
        this.email = email;
        this.price = price;
        this.image = description;
        this.tours = [];
        this.tourCart = {};
        this.infoCustomers = [];
        this.editIndex = null;
    }

    displayTours() {
        let str = ``;
        str += `<div class="box-container3">`;
        for (let i = 0; i < this.tours.length; i++) {
            str += `
                <div class="box1">
                    <div class="image">
                        <img src="${this.tours[i].image}" alt="">
                    </div>
                    <div class="content">
                        <h3>${this.tours[i].name}</h3>
                        <p>${this.tours[i].description}</p>
                        <h4>${this.tours[i].price} VND / Person</h4>
                        <a href="#book"><button onclick="packageInstance.bookNow(${i})">Book Now</button></a>

                    </div>
                </div>
            `;
            if ((i + 1) % 5 === 0 && i !== 0) {
                str += `</div><div class="box-container3">`;
            }
        }
        document.getElementById("packageList").innerHTML = str;
    }

    addTours(image, name, description, price) {
        this.tour = {
            image: image,
            name: name,
            description: description,
            price: price
        }
        this.tours.push(this.tour);
        this.displayTours();
    }

    bookNow(i) {
        document.getElementById("placeTour").value = this.tours[i].name;
        if (this.tourCart[this.tours[i].name]) {
            this.tourCart[this.tours[i].name].quantity++;
        } else {
            this.tourCart[this.tours[i].name] = {
                quantity: 1,
                price: this.tours[i].price
            }
        }
        //let tourCartDisplay = "";
        let totalPrice = 0;
        for (let key in this.tourCart) {
            totalPrice += this.tourCart[key].quantity * this.tourCart[key].price;
        }
        document.getElementById("total-price-tour").innerHTML = `${totalPrice}`;
    }

    getForm() {
        if (this.editIndex === null) {
            this.infoCustomer = {
                nameTour: document.getElementById("nameTour").value,
                phoneTour: document.getElementById("phoneTour").value,
                numberTour: document.getElementById("numberTour").value,
                placeTour: document.getElementById("placeTour").value,
                arrivalTour: document.getElementById("arrivalTour").value,
                leavingTour: document.getElementById("leavingTour").value,
                addressTour: document.getElementById("addressTour").value,
                emailTour: document.getElementById("emailTour").value
            }
            this.infoCustomers.push(this.infoCustomer);
        } else {
            this.infoCustomers[this.editIndex].nameTour = document.getElementById("nameTour").value;
            this.infoCustomers[this.editIndex].phoneTour = document.getElementById("phoneTour").value;
            this.infoCustomers[this.editIndex].numberTour = document.getElementById("numberTour").value;
            this.infoCustomers[this.editIndex].placeTour = document.getElementById("placeTour").value;
            this.infoCustomers[this.editIndex].arrivalTour = document.getElementById("arrivalTour").value;
            this.infoCustomers[this.editIndex].leavingTour = document.getElementById("leavingTour").value;
            this.infoCustomers[this.editIndex].addressTour = document.getElementById("addressTour").value;
            this.infoCustomers[this.editIndex].emailTour = document.getElementById("emailTour").value;
            this.editIndex = null;
        }

        document.getElementById("nameTour").value = '';
        document.getElementById("phoneTour").value = '';
        document.getElementById("numberTour").value = '';
        document.getElementById("placeTour").value = '';
        document.getElementById("arrivalTour").value = '';
        document.getElementById("leavingTour").value = '';
        document.getElementById("addressTour").value = '';
        document.getElementById("emailTour").value = '';
        this.displayTourCart();
    }


    displayTourCart() {
        if (this.editIndex !== null) {

            this.infoCustomers[this.editIndex].nameTour = document.getElementById("nameTour").value;
            this.infoCustomers[this.editIndex].phoneTour = document.getElementById("phoneTour").value;
            this.infoCustomers[this.editIndex].numberTour = document.getElementById("numberTour").value;
            this.infoCustomers[this.editIndex].placeTour = document.getElementById("placeTour").value;
            this.infoCustomers[this.editIndex].arrivalTour = document.getElementById("arrivalTour").value;
            this.infoCustomers[this.editIndex].leavingTour = document.getElementById("leavingTour").value;
            this.infoCustomers[this.editIndex].addressTour = document.getElementById("addressTour").value;
            this.infoCustomers[this.editIndex].emailTour = document.getElementById("emailTour").value;
            this.editIndex = null;
        }
        let str = ``;
        for (let i = 0; i < this.infoCustomers.length; i++) {
            str += `
        <tr> 
            <td>${this.infoCustomers[i].nameTour}</td>
            <td>${this.infoCustomers[i].phoneTour}</td> 
            <td>${this.infoCustomers[i].numberTour}</td> 
            <td>${this.infoCustomers[i].placeTour}</td> 
            <td>${this.infoCustomers[i].arrivalTour}</td> 
            <td>${this.infoCustomers[i].leavingTour}</td>
            <td>${this.infoCustomers[i].addressTour}</td> 
            <td>${this.infoCustomers[i].emailTour}</td> 
            <td class="action-cell"><a href="#book"><button onclick="packageInstance.editTourCart(${i})" class="btn btn-outline-primary"><i class='bx bxs-edit-alt'></i></button></a></td>
            <td class="action-cell"><button onclick="packageInstance.deleteTourCart(${i})" class="btn btn-outline-danger"><i class='bx bxs-trash' ></i></button></td>
        `
        }
        document.getElementById('tourList').innerHTML = str;
    }

    editTourCart(i) {
        this.editIndex = i;
        document.getElementById("nameTour").value = this.infoCustomers[i].nameTour;
        document.getElementById("phoneTour").value = this.infoCustomers[i].phoneTour;
        document.getElementById("numberTour").value = this.infoCustomers[i].numberTour;
        document.getElementById("placeTour").value = this.infoCustomers[i].placeTour;
        document.getElementById("arrivalTour").value = this.infoCustomers[i].arrivalTour;
        document.getElementById("leavingTour").value = this.infoCustomers[i].leavingTour;
        document.getElementById("addressTour").value = this.infoCustomers[i].addressTour;
        document.getElementById("emailTour").value = this.infoCustomers[i].emailTour;
    }

    deleteTourCart(i) {
        let check = confirm("Are you sure you want to delete " + this.infoCustomers[i].placeTour.toUpperCase() + " ?");
        if (check) {
            let tourName = this.infoCustomers[i].placeTour;
            this.infoCustomers.splice(i, 1);
            if (this.tourCart[tourName]) {
                delete this.tourCart[tourName];
            }
            let totalPrice = 0;
            for (let key in this.tourCart) {
                totalPrice += this.tourCart[key].quantity * this.tourCart[key].price;
            }
            document.getElementById("total-price-tour").innerHTML = `${totalPrice}`;
            this.displayTourCart();
        }
    }


}

let packageInstance = new Package();
packageInstance.addTours('https://s.net.vn/MgKg', 'Da Nang', 'The most livable city in Vietnam', 2000000);
packageInstance.addTours('https://s.net.vn/WJnj', 'Ho Chi Minh', 'The most developed city in Vietnam', 3000000);
packageInstance.addTours('https://s.net.vn/enB6', 'Ha Noi', 'The capital of Vietnam', 3000000);
packageInstance.addTours('https://s.net.vn/h8fd', 'Nha Trang', 'One of the most charming city in Vietnam', 1000000);
packageInstance.addTours('https://s.net.vn/Uy6a', 'Da Lat', 'One of the cities that attract the most tourists in Vietnam', 20000000);
packageInstance.addTours('https://s.net.vn/UYnY', 'Ha Giang', 'One of the most impressive cities in Vietnam', 1000000);
packageInstance.addTours('https://s.net.vn/h8fd', 'Nha Trang', 'One of the most charming city in Vietnam', 10000000);
packageInstance.addTours('https://s.net.vn/xRIL', 'Hoi An', 'The most beautiful ancient town in Vietnam', 10000000);
packageInstance.addTours('https://s.net.vn/m6G0', 'Hue', 'Buddhist longitude of Vietnam', 10000000);
packageInstance.addTours('https://s.net.vn/GUGK', 'Phu Quoc', 'The pearl island of Vietnam', 10000000);


class Shop {
    constructor(name, price, description, color, packageInstance) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.color = color;
        this.shops = [];
        this.shopCart = {};
        this.infoProduct = [];
        this.packageInstance = packageInstance;
    }

    displayShops() {
        let str = `<div class="box-container4">`;
        for (let i = 0; i < this.shops.length; i++) {
            str += `
               <div class="box2">
                   <img src="${this.shops[i].image}" alt="">
                   <div class="description">
                       <span>${this.shops[i].name}</span>
                       <h5>${this.shops[i].description}</h5>
                       <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div> 
                       <h4>${this.shops[i].price} VND</h4>   
                   </div>  
                   <a href="#cart"><button onclick="shopInstance.buyNow(${i})"><i class='bx bxs-cart-add'></i></button></a>
               </div>    
            `;
            if ((i + 1) % 5 === 0 && i !== 0) {
                str += `</div><div class="box-container4"> `;
            }
        }
        document.getElementById('shopList').innerHTML = str;
    }

    addProduct(image, name, price, description, color) {
        let product = {
            image: image,
            name: name,
            price: price,
            description: description,
            color: color
        }
        this.shops.push(product);
        this.displayShops();
    }

    displayShopCart() {
        let str = ``
        for (let i = 0; i < this.infoProduct.length; i++) {
            str += `
        <tr> 
            <td>${this.infoProduct[i].name}</td>
            <td>${this.infoProduct[i].price}</td> 
            <td>
                <select>
                    <option>Red</option><option>Blue</option><option>Yellow</option>
                    <option>Black</option><option>Green</option><option>White</option>
                    <option>Cream</option><option>Mint</option><option>Light Purple</option>
                </select>
            </td> 
            <td class="action-cell1"><button onclick="shopInstance.editShopCart(${i})" class="btn btn-outline-primary"><i class='bx bxs-edit-alt'></i></button></td>
            <td class="action-cell1"><button onclick="shopInstance.deleteShopCart(${i})" class="btn btn-outline-danger"><i class='bx bxs-trash' ></i></button></td>
        </tr> `
        }
        document.getElementById('cartList').innerHTML = str;
    }

    buyNow(i) {
        console.log('Buy Now clicked for product:', this.shops[i].name);
        this.infoProduct.push(this.shops[i])
        if (this.shopCart[this.shops[i].name]) {
            this.shopCart[this.shops[i].name].quantity++;
        } else {
            this.shopCart[this.shops[i].name] = {
                quantity: 1,
                price: this.shops[i].price
            }
        }
        let totalPrice = 0;
        for (let key in this.shopCart) {
            totalPrice += this.shopCart[key].quantity * this.shopCart[key].price;
        }
        document.getElementById("total-price-cart").innerHTML = `${totalPrice}`
        this.displayShopCart();
    }

    editShopCart(i) {
        let productName = prompt("New product name: ", this.infoProduct[i].name);
        if (productName) {
            this.infoProduct[i].name = productName;
            this.displayShopCart();
        }
    }

    deleteShopCart(i) {
        let check = confirm("Are you sure you want to delete " + this.infoProduct[i].name.toUpperCase() + " ?");
        if (check) {
            this.infoProduct.splice(i, 1);
            if (this.shopCart[this.infoProduct[i].name]) {
                delete this.shopCart[this.infoProduct[i].name];
            }
            let totalPrice = 0;
            for (let key in this.shopCart) {
                totalPrice += this.shopCart[key].quantity * this.shopCart[key].price;
            }
            document.getElementById("total-price-tour").innerHTML = `${totalPrice}`;
            this.displayShopCart();
        }
    }
}

let shopInstance = new Shop();
shopInstance.addProduct('https://s.net.vn/1LEB', "Chicken feather broom", 1502000, 'Very effective for cleaning', 'blue')
shopInstance.addProduct('https://s.net.vn/aPEY', 'Honeycomb sandals', 120000, 'Beautiful, comfortable, compact, versatile', 'blue')
shopInstance.addProduct('https://s.net.vn/AU3O', 'Vietnamese conical hat', 80000, 'Best Seller', 'blue')
shopInstance.addProduct('https://s.net.vn/m3Lb', 'Motorbike VinFast Klara S', 35000000, 'High quality Vietnamese products', 'blue')
shopInstance.addProduct('https://s.net.vn/kaym', 'Stuffed bear shaped Vietnamese bread', 100000, 'Nanotechnology is applied', 'blue')
function submit() {
    alert("Click on the cart on the right to pay  ->");
}
function payBill() {
    let totalBill = +document.getElementById("total-price-tour").innerHTML + (+document.getElementById("total-price-cart").innerHTML)
    if (totalBill > 0) {
        let pay = prompt("Your total price is: "
            + totalBill
            + "\n" + "Which means do you want to pay through? ");
        if (pay) {
            alert("Payment completed successfully!");
        } else {
            alert("You have not paid");
        }
    } else {
        alert("There are no orders to pay yet!");
    }


}