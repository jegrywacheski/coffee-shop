import { App } from "../components/app";
import OrderForm from "../components/order_form";

export default function Order() {
    return (
        <App>
            <section className="flex flex-col items-center justify-center w-full h-full p-8">
                <h1 className="text-4xl font-bold">Order your coffee</h1>
                <OrderForm />
            </section>
        </App>
    );
}