export type User = {
    id: string,
    name: string,
    type: 'customer' | 'employee',
};

export type Product = {
    category: 'base' | 'fill' | 'sweetener' | 'topping',
    name: string,
    price: number,
    quantity: number,
};
  
export type Order = {
    id: string,
    customer_id: string,
    employee_id?: string,
    notes: string,
    total: number,
    status: 'pending' | 'completed' | 'cancelled',
};

export type OrderProduct = {
    order_id: string,
    product_id: string,
    quantity: number,
};