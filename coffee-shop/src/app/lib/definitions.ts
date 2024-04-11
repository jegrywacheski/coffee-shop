export type User = {
    id: string,
    name: string,
    email: string,
};

export type Customer = {
    id: string,
    user: User,
    name: string,
};

export type Employee = {
    id: string,
    user: User,
    name: string,
    role: string,
};

export type Product = {
    category: 'base' | 'fill' | 'sweetener' | 'topping',
    name: string,
    price: number,
    quantity: number,
};
  
export type OrderItem = {
    base: Product | null,
    fill: Product | null,
    sweetener: Product | null,
    topping: Product | null,
};