const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@gmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: 1,
    user_id: users[0].id,
    name: "Alice",
  },
];

const employees = [
  {
    id: 1,
    user_id: users[1].id,
    name: "Bob",
    role: "barista",
  },
];

const products = {
  espresso: {
    category: "base",
    options: [
      {
        id: 1,
        name: "blonde espresso",
        price: 50,
        quantity: 100,
      },
      {
        id: 2,
        name: "dark espresso",
        price: 50,
        quantity: 100,
      },
    ],
  },
  coffee: {
    category: "base",
    options: [
      {
        id: 1,
        name: "light roast",
        price: 50,
        quantity: 100,
      },
      {
        id: 2,
        name: "medium roast",
        price: 50,
        quantity: 100,
      },
      {
        id: 3,
        name: "dark roast",
        price: 50,
        quantity: 100,
      },
    ],
  },

  tea: {
    category: "base",
    options: [
      {
        id: 1,
        name: "green tea",
        price: 50,
        quantity: 100,
      },
      {
        id: 2,
        name: "black tea",
        price: 50,
        quantity: 100,
      },
      {
        id: 3,
        name: "herbal tea",
        price: 50,
        quantity: 100,
      },
    ],
  },

  milk: {
    category: "fill",
    options: [
      {
        id: 1,
        name: "whole milk",
        price: 50,
        quantity: 100,
      },
      {
        id: 2,
        name: "2% milk",
        price: 50,
        quantity: 100,
      },
      {
        id: 3,
        name: "almond milk",
        price: 50,
        quantity: 100,
      },
      {
        id: 4,
        name: "oat milk",
        price: 50,
        quantity: 100,
      },
      {
        id: 5,
        name: "soy milk",
        price: 50,
        quantity: 100,
      },
    ],
  },

  sweetener: {
    category: "sweetener",
    options: [
      {
        id: 1,
        name: "sugar",
        price: 50,
        quantity: 100,
      },
      {
        id: 2,
        name: "honey",
        price: 50,
        quantity: 100,
      },
      {
        id: 3,
        name: "stevia",
        price: 50,
        quantity: 100,
      },
    ],
  },
  syrup: {
    category: "sweetener",
    options: [
      {
        id: 1,
        name: "vanilla",
        price: 50,
        quantity: 100,
      },
      {
        id: 2,
        name: "caramel",
        price: 50,
        quantity: 100,
      },
      {
        id: 3,
        name: "hazelnut",
        price: 50,
        quantity: 100,
      },
    ],
  },
  topping: {
    category: "topping",
    options: [
      {
        id: 1,
        name: "whipped cream",
        price: 50,
        quantity: 100,
      },
      {
        id: 2,
        name: "cinnamon",
        price: 50,
        quantity: 100,
      },
      {
        id: 3,
        name: "cocoa",
        price: 50,
        quantity: 100,
      },
    ],
  },
};

const orders = [
  {
    id: 1,
    customer_id: customers[0].id,
    items: [
      {
        base: products.espresso.options[0],
        fill: products.milk.options[0],
        sweetener: products.sweetener.options[0],
        topping: products.topping.options[0],
      },
    ],
  },
  {
    id: 2,
    customer_id: customers[0].id,
    items: [
      {
        base: products.coffee.options[1],
        fill: products.milk.options[1],
        sweetener: null,
        topping: products.topping.options[3],
      },
    ],
  },
];
