import { Select } from "./select";

export default function OrderForm() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-8">
            <h1 className="text-4xl font-bold">Order your coffee</h1>
            <form className="flex flex-col items-center justify-center w-full h-full p-8">
                <Select name="coffee" id="coffee" label="Coffee"
                options={[
                    {value: "espresso", label: "Espresso"},
                    {value: "latte", label: "Latte"},
                    {value: "cappuccino", label: "Cappuccino"}
                ]} />
                
                <Select name="size" id="size"  label="Size"
                options={[
                    {value: "small", label: "Small"},
                    {value: "medium", label: "Medium"},
                    {value: "large", label: "Large"}
                ]} />
                <Select name="milk" id="milk" label="Milk"
                options={[
                    {value: "none", label: "None"},
                    {value: "whole", label: "Whole"},
                    {value: "skim", label: "Skim"}
                ]} />
                <Select name="sugar" id="sugar" label="Sugar"
                options={[
                    {value: "none", label: "None"},
                    {value: "1", label: "1"},
                    {value: "2", label: "2"},
                    {value: "3", label: "3"}
                ]} />
                <button type="submit">Order</button>
            </form>
        </div>
    );
}