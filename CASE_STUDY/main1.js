class Package {
    constructor(name, phone, number, place, arrivals, leaving, address, email, price, image, description) {
        this.name = name;
        this.phone = phone;
        this.number = number;
        this.place = place;
        this.arrivals = arrivals;
        this.leaving = leaving;
        this.address = address;
        this.email = email;
        this.price = price;
        this.image = description;
        this.tours = [];

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
                        <a href="#book"><button onclick="this.#{bookNow()i}">Book Now</button></a>
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
    }
}
let packages = new Package();
packages.addTours('https://s.net.vn/MgKg', 'Da Nang', 'The most valuable city in Vietnam', 20000000 );
packages.addTours('https://s.net.vn/WJnj', 'Ho Chi Minh', 'The most developed city in Vietnam', 20000000);
packages.addTours('https://s.net.vn/enB6', 'Ha Noi', 'The capital city of Vietnam', 20000000);
packages.addTours('https://s.net.vn/h8fd', 'Nha Trang', 'One of the most charming city in Vietnam', 20000000);
packages.addTours('https://s.net.vn/Uy6a', 'Da Lat', 'One of the cities that attract the most tourists in Vietnam', 20000000);
packages.addTours('https://s.net.vn/UYnY', 'Ha Giang', 'One of the most impressive cities in Vietnam', 20000000);
packages.addTours('https://s.net.vn/h8fd', 'Nha Trang', 'One of the most charming city in Vietnam', 20000000);
packages.addTours('https://s.net.vn/xRIL', 'Hoi An', 'The most beautiful ancient town in Vietnam', 20000000);
packages.addTours('https://s.net.vn/m6G0', 'Hue', 'Buddhist longitude of Vietnam', 20000000);
packages.addTours('https://s.net.vn/GUGK', 'Phu Quoc', 'The pearl island of Vietnam', 20000000);





class Shop {
    constructor(name, price, description, color) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.color = color;
    }
}