export type User = {
    id: string,
    name: string,
    type: 'customer' | 'employee',
};

export type Product = {
    name: string,
    price: number,
    quantity: number,
    unit: string,
};
  
export type Order = {
    id: string,
    customer_id: string,
    employee_id?: string,
    order: Product[],
    notes: string,
    total: number,
    status: 'pending' | 'completed' | 'cancelled',
};
