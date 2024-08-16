/*
class Tour {
    constructor(name, phone, number, place, arrivals, leaving, address, email, price) {
        this.name = name;
        this.phone = phone;
        this.number = number;
        this.place = place;
        this.arrivals = arrivals;
        this.leaving = leaving;
        this.address = address;
        this.email = email;
        this.price = price;
    }
}
class Cart {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
}
let arrTour = [];
let arrCart = [];
function displayTour() {
    let str = ``
    for (let i = 0; i < arrTour.length; i++) {
        str += `
        <tr> 
            <td>${arrTour[i].name}</td>
            <td>${arrTour[i].phone}</td> 
            <td>${arrTour[i].number}</td> 
            <td>${arrTour[i].place}</td> 
            <td>${arrTour[i].arrivals}</td> 
            <td>${arrTour[i].leaving}</td>
            <td>${arrTour[i].address}</td> 
            <td>${arrTour[i].email}</td> 
            <td class="action-cell"><button onclick="editTour(${i})" class="btn btn-outline-primary"><i class='bx bxs-edit-alt'></i></button></td>
            <td class="action-cell"><button onclick="deleteTour(${i})" class="btn btn-outline-danger"><i class='bx bxs-trash' ></i></button></td>
        `
    }
    document.getElementById('tourList').innerHTML = str;
}
function editTour(i) {
    let tourName = prompt("Enter new product name:", arrTour[i].name);
    let tourPhone = prompt("Enter new phone number:", arrTour[i].phone);
    let tourNumber = prompt("Enter new number of quests:", arrTour[i].number);
    let tourArrivals = prompt ("Enter new arrival day (YYYY-MM-DD):", arrTour[i].arrivals);
    let tourLeaving = prompt("Enter new leaving day:", arrTour[i].leaving);
    let tourAddress = prompt("Enter new address:", arrTour[i].address);
    let tourEmail = prompt("Enter new email:", arrTour[i].email);
    arrTour[i].name = tourName;
    arrTour[i].phone = tourPhone;
    arrTour[i].number = tourNumber;
    arrTour[i].arrivals = tourArrivals;
    arrTour[i].leaving = tourLeaving;
    arrTour[i].address = tourAddress;
    arrTour[i].email = tourEmail;
    displayTour();
}
function deleteTour(i) {
    let check = confirm("Are you sure to delete " + arrTour[i].place.toUpperCase())
    if (check) {
        arrTour.splice(i,1);
        document.getElementById("numberCart").innerHTML = Object.keys(cart).length + Object.keys(cartTour).length;
        displayProduct();
    }
}
let cart = {};

function displayCart() {
    let str = ``
    for (let i = 0; i < arrCart.length; i++) {
        str += `
        <tr> 
            <td>${arrCart[i].name}</td>
            <td>${arrCart[i].price}</td> 
            <td>
                <select>
                    <option>Red</option><option>Blue</option><option>Yellow</option>
                    <option>Black</option><option>Green</option><option>White</option>
                    <option>Cream</option><option>Mint</option><option>Light Purple</option>
                </select>
            </td> 
            <td class="action-cell1"><button onclick="editCart(${i})" class="btn btn-outline-primary"><i class='bx bxs-edit-alt'></i></button></td>
            <td class="action-cell1"><button onclick="deleteCart(${i})" class="btn btn-outline-danger"><i class='bx bxs-trash' ></i></button></td>
            <td class="action-cell1"><button onclick="confirmCart(${i})" class="btn btn-outline-warning"><i class='bx bxs-cart-alt' ></i></button></td>
        </tr> `

    }
    document.getElementById('cartList').innerHTML = str;
}
function buy(i) {
    arrCart.push(shop.arrShop[i]);
    if (cart[shop.arrShop[i].name]) {
        cart[shop.arrShop[i].name].quantity ++;
    } else {
        cart[shop.arrShop[i].name] = {
            quantity: 1,
            price: shop.arrShop[i].price
        }
    }
    document.getElementById("numberCart").innerHTML = Object.keys(cart).length + Object.keys(cartTour).length;
    let cartDisplay = "";
    let totalPrice = 0;
    for (let key in cart) {
        cartDisplay += `${key} (x${cart[key].quantity})`;
        totalPrice += cart[key].quantity * cart[key].price;
    }
    document.getElementById("total-price-cart").innerHTML = `${totalPrice}`
    displayCart();
}

function addTour(i) {
    let tour = new Tour(
        document.getElementById("nameTour").value,
        document.getElementById("phoneTour").value,
        document.getElementById("numberTour").value,
        document.getElementById("placeTour").value,
        document.getElementById("arrivalTour").value,
        document.getElementById("leavingTour").value,
        document.getElementById("addressTour").value,
        document.getElementById("emailTour").value,
    );
    arrTour.push(tour);
    document.getElementById("nameTour").value = '';
    document.getElementById("phoneTour").value = '';
    document.getElementById("numberTour").value = '' ;
    document.getElementById("placeTour").value = '';
    document.getElementById("arrivalTour").value = '';
    document.getElementById("leavingTour").value = '';
    document.getElementById("addressTour").value = '';
    document.getElementById("emailTour").value = '';

    displayTour();
}
class Product {
    constructor(image, name, price, description, color) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
        this.color = color;
    }
}
class Shop {
    constructor() {
        this.arrShop = [];
    }
    addProduct(image, name, price, description, color) {
        let product = new Product(image, name, Number(price), description, color)
        this.arrShop.push(product);
        this.displayShop();
    }
    displayShop() {
        let str = `<div class="box-container4">`;
        for (let i = 0; i < this.arrShop.length; i++) {
            str += `
               <div class="box2">
                   <img src="${this.arrShop[i].image}" alt="">
                   <div class="description">
                       <span>${this.arrShop[i].name}</span>
                       <h5>${this.arrShop[i].description}</h5>
                       <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div> 
                       <h4>${this.arrShop[i].price} VND</h4>   
                   </div>  
                   <a href="#cart"><button onclick="buy(${i})"><i class='bx bxs-cart-add'></i></button></a>
               </div>    
            `;
            if ((i + 1) % 5  === 0 && i !== 0) {
                str += `</div><div class="box-container4"> `;
            }
        }
        document.getElementById('shopList').innerHTML = str;
    }
}
let shop = new Shop();
shop.addProduct('https://s.net.vn/yWwO',"Biti's Hunter Street x Vietmax", 1502000, 'Faith Edition HSM008100', 'blue')
shop.addProduct('https://s.net.vn/aPEY','Honeycomb sandals', 120000, 'Nanotechnology is applied', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')
shop.addProduct('https://s.net.vn/LAnM','Converse Chuck 70', 2000000, 'Sketch', 'blue')

class TourPackage {
    constructor(image, name, description, price) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
class Package {
    constructor() {
        this.arrPackage = [];
    }
    addTour(image, name, description, price) {
        let tour = new TourPackage(image, name, description, Number(price));
        this.arrPackage.push(tour);
        this.displayPackage();
    }
    displayPackage() {
        let str = ``;
        str += `<div class="box-container3">`;
        for (let i = 0; i < this.arrPackage.length; i++) {
            str += `
                <div class="box1">
                    <div class="image">
                        <img src="${this.arrPackage[i].image}" alt="">
                    </div>
                    <div class="content">
                        <h3>${this.arrPackage[i].name}</h3>
                        <p>${this.arrPackage[i].description}</p>
                        <h4>${this.arrPackage[i].price} VND / Person</h4>
                        <a href="#book"><button onclick="book(${i})">Book Now</button></a>
                    </div>
                </div><!---->
            `;
            if ((i + 1) % 5 === 0 && i !== 0) {
                str += `</div><div class="box-container3">`;
            }
        }
        document.getElementById("packageList").innerHTML = str;
    }
}
let packages = new Package();
packages.addTour('https://s.net.vn/MgKg', 'Da Nang', 'The most valuable city in Vietnam', 20000000 );
packages.addTour('https://s.net.vn/WJnj', 'Ho Chi Minh', 'The most developed city in Vietnam', 20000000);
packages.addTour('https://s.net.vn/enB6', 'Ha Noi', 'The capital city of Vietnam', 20000000);
packages.addTour('https://s.net.vn/h8fd', 'Nha Trang', 'One of the most charming city in Vietnam', 20000000);
packages.addTour('https://s.net.vn/Uy6a', 'Da Lat', 'One of the cities that attract the most tourists in Vietnam', 20000000);
packages.addTour('https://s.net.vn/UYnY', 'Ha Giang', 'One of the most impressive cities in Vietnam', 20000000);
packages.addTour('https://s.net.vn/h8fd', 'Nha Trang', 'One of the most charming city in Vietnam', 20000000);
packages.addTour('https://s.net.vn/xRIL', 'Hoi An', 'The most beautiful ancient town in Vietnam', 20000000);
packages.addTour('https://s.net.vn/m6G0', 'Hue', 'Buddhist longitude of Vietnam', 20000000);
packages.addTour('https://s.net.vn/GUGK', 'Phu Quoc', 'The pearl island of Vietnam', 20000000);
let cartTour = {};
function book(i) {
    document.getElementById("placeTour").value = packages.arrPackage[i].name;
    if (cartTour[packages.arrPackage[i].name]) {
        cartTour[packages.arrPackage[i].name].quantity ++;
    } else {
        cartTour[packages.arrPackage[i].name] = {
            quantity: 1,
            price: packages.arrPackage[i].price
        }
    }
    document.getElementById("numberCart").innerHTML = Object.keys(cartTour).length + Object.keys(cart).length
    let tourCartDisplay = "";
    let totalPrice = 0;
    for (let key in cartTour) {
        tourCartDisplay += `${key} (x${cartTour[key].quantity})`;
        totalPrice += cartTour[key].quantity * cartTour[key].price;
    }
    document.getElementById("total-price-tour").innerHTML = `${totalPrice}`
}
function payBill() {
    if (document.getElementById("numberCart").innerHTML > 0) {
        prompt("Your total price is: "
            + (+document.getElementById("total-price-tour").innerHTML + (+document.getElementById("total-price-cart").innerHTML))
            + "\n" + "Which means do you want to pay through? ");
        alert("Payment completed successfully!");
    }
}
*/
