// console.log('Hello');


// const calculateTotalBalance = users => users.reduce((totalBalance, user) => 
// totalBalance + user.balance, 0);


// const getTotalFriendCount = users => users.reduce(
// (totalFriends, user) => totalFriends + user.friends.length, 0);


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));   //сортирует по алфавиту
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));   //сортирует в обратном алфавитном порядке


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const sortedByAuthorName = [...books].sort(((a, b) => a.author.localeCompare(b.author)));   //по алфвиту
// const sortedByReversedAuthorName = [...books].sort(((a, b) => b.author.localeCompare(a.author)));    //в обратном алф полядке
// const sortedByAscendingRating = [...books].sort(((a, b) => C);      //по возрастанию рейтинга
// const sortedByDescentingRating = [...books].sort(((a, b) => b.rating - a.rating));     //по убыванию рейтинга


// const sortByAscendingBalance = users => [...users].sort((a, b) => a.balance - b.balance);

// const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length);

// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((a, b) => a.localeCompare(b));
// console.log(names);


// const getNamesSortedByFriendCount = users => [...users]
// .sort((a, b) => a.friends.length - b.friends.length)
// .map(user => user.name);


// const getSortedFriends = users => [...users]
//  .flatMap(user => user.friends)                                       //объединяет массивы в один общий массив
//  .filter((friend, index, array) => array.indexOf(friend) === index)   //выбирает уникальные элементы из массива
//  .sort((a, b) => a.localeCompare(b));                                 //сортирует по алфавиту


// const getTotalBalanceByGender = (users, gender) => [...users]
// .filter(user => user.gender === gender)
// .reduce((totalBalance, user) => totalBalance + user.balance, 0);


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));


// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//   };
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//   };
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));  
  

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//     const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;



// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//     }

// class Car {
//      constructor({brand, model, price}) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//    }



// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
  



// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//         getItems() {
//             return this.items;
//         }
//         addItem(newItem) {
//             this.items.push(newItem);
//         }
//         removeItem(itemToRemove) {
//         let itemIndex = this.items.indexOf(itemToRemove);
//             this.items.splice(itemIndex, 1);
//         }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// class StringBuilder {
//     constructor(initialValue ) {
//     this.value = initialValue ;
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         this.value += str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// class Car {
//     #brand;
//     model;
//     price;
//         constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//        getBrand() {
//       return this.#brand;
//     }
//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }
//   }



// class Storage {
//   #items;
//     constructor(items) {
//       this.#items = items;
//     }
//     getItems() {
//       return this.#items;
//     }
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
//  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]



//   class Car {
//     #brand;
//     #model;
//     #price;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
//     get brand() {
//       return this.#brand;
//     }
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
//     get model() {
//       return this.#model;
//     }
//     set model(newModel) {
//       this.#model = newModel;
//     }
//     get price() {
//       return this.#price;
//     }
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//   }




// class Car {
//      static MAX_PRICE = 50000;
//      #price;
//     constructor({ price }) {
//       this.#price = price;
//     }
//     get price() {
//       return this.#price;
//     }
//     set price(newPrice) {
//       if (newPrice <= Car.MAX_PRICE) {
//         this.#price = newPrice;
//       }
//     }
//   }
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
//   audi.price = 49000;
//   console.log(audi.price); // 49000
//   audi.price = 51000;
//   console.log(audi.price); // 49000



// class Car {
//     static #MAX_PRICE = 50000;
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//              return "Error! Price exceeds the maximum";
//             }
//             return "Success! Price is within acceptable limits";
//     }
//     constructor({ price }) {
//     this.price = price;
//     }
//   }
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//     constructor(email) {
//       this.email = email;
//     }
//     get email() {
//       return this.email;
//     }
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     static AccessLevel  = {
//       BASIC: "basic", 
//       SUPERUSER: "superuser",
//     }
//   }


// class User {
//     email;
//     constructor(email) {
//     this.email = email;
//     }
//     get email() {
//     return this.email;
//     }
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     constructor({email, accessLevel}) {
//         super(email);
//         this.accessLevel = accessLevel;
//       }
//     static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     };
//   }
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"



class User {
    email;
    constructor(email) {
      this.email = email;
    }
    get email() {
      return this.email;
    }
    set email(newEmail) {
    this.email = newEmail;
    }
  }
  class Admin extends User {
     static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
    constructor({ email, accessLevel, blacklistedEmails }) {
      super(email);
      this.accessLevel = accessLevel;
      this.blacklistedEmails = [];
    }
    blacklist(email) {
        this.blacklistedEmails.push(email);
    }
    isBlacklisted(email) {
      return this.blacklistedEmails.includes(email);
    }
  }
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"
  mango.blacklist("poly@mail.com");
  console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango.isBlacklisted("mango@mail.com")); // false
  console.log(mango.isBlacklisted("poly@mail.com")); // true