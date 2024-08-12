"use client";

import { useState } from "react";
import {
  OrderSection,
  RadioSelectOptions,
  RadioSelectValue,
} from "./order_section";

export default function OrderForm() {
  const [baseValue, setBaseValue] = useState<RadioSelectValue>({
    radioValue: "espresso",
    selectValue: "none",
  });
  const [fillValue, setFillValue] = useState<RadioSelectValue>({
    radioValue: "milk",
    selectValue: "none",
  });
  const [sweetenerValue, setSweetenerValue] = useState<RadioSelectValue>({
    radioValue: "sugar",
    selectValue: "none",
  });
  const [toppingValue, setToppingValue] = useState<RadioSelectValue>({
    radioValue: "whipped-cream",
    selectValue: "none",
  });

  const baseOptions: RadioSelectOptions[] = [
    {
      radioValue: "espresso",
      radioLabel: "Espresso",
      options: [
        { value: "none", label: "None" },
        { value: "espresso-single", label: "Single" },
        { value: "espresso-double", label: "Double" },
        { value: "espresso-triple", label: "Triple" },
      ],
    },
    {
      radioValue: "drip",
      radioLabel: "Drip",
      options: [
        { value: "none", label: "None" },
        { value: "drip-small", label: "Small" },
        { value: "drip-medium", label: "Medium" },
        { value: "drip-large", label: "Large" },
      ],
    },
    {
      radioValue: "cold-brew",
      radioLabel: "Cold Brew",
      options: [
        { value: "none", label: "None" },
        { value: "cold-brew-small", label: "Small" },
        { value: "cold-brew-medium", label: "Medium" },
        { value: "cold-brew-large", label: "Large" },
      ],
    },
  ];

  const fillOptions: RadioSelectOptions[] = [
    {
      radioValue: "milk",
      radioLabel: "Milk",
      options: [
        { value: "none", label: "None" },
        { value: "milk-whole", label: "Whole" },
        { value: "milk-skim", label: "Skim" },
        { value: "milk-soy", label: "Soy" },
        { value: "milk-almond", label: "Almond" },
        { value: "milk-oat", label: "Oat" },
        { value: "milk-coconut", label: "Coconut" },
      ],
    },
    {
      radioValue: "Water",
      radioLabel: "Water",
      options: [
        { value: "none", label: "None" },
        { value: "water-small", label: "Small" },
        { value: "water-medium", label: "Medium" },
        { value: "water-large", label: "Large" },
      ],
    },
  ];

  const sweetenerOptions: RadioSelectOptions[] = [
    {
      radioValue: "sugar",
      radioLabel: "Sugar",
      options: [
        { value: "none", label: "None" },
        { value: "sugar-small", label: "Small" },
        { value: "sugar-medium", label: "Medium" },
        { value: "sugar-large", label: "Large" },
      ],
    },
    {
      radioValue: "syrup",
      radioLabel: "Syrup",
      options: [
        { value: "none", label: "None" },
        { value: "syrup-vanilla", label: "Vanilla" },
        { value: "syrup-caramel", label: "Caramel" },
        { value: "syrup-hazelnut", label: "Hazelnut" },
        { value: "syrup-mocha", label: "Mocha" },
      ],
    },
    {
      radioValue: "sugar-substitute",
      radioLabel: "Sugar Substitute",
      options: [
        { value: "none", label: "None" },
        { value: "sugar-substitute-stevia", label: "Stevia" },
        { value: "sugar-substitute-splenda", label: "Splenda" },
        { value: "sugar-substitute-equal", label: "Equal" },
        { value: "sugar-substitute-sweet-n-low", label: "Sweet 'N Low" },
      ],
    },
  ];

  const toppingOptions: RadioSelectOptions[] = [
    {
      radioValue: "whipped-cream",
      radioLabel: "Whipped Cream",
      options: [
        { value: "none", label: "None" },
        { value: "whipped-cream-small", label: "Small" },
        { value: "whipped-cream-medium", label: "Medium" },
        { value: "whipped-cream-large", label: "Large" },
      ],
    },
    {
      radioValue: "powder",
      radioLabel: "Powder",
      options: [
        { value: "none", label: "None" },
        { value: "powder-cinnamon", label: "Cinnamon" },
        { value: "powder-cocoa", label: "Cocoa" },
        { value: "powder-nutmeg", label: "Nutmeg" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8">
      <form className="flex flex-col gap-16 items-center justify-center w-full h-full">
        <OrderSection
          title="Select your base"
          value={baseValue}
          setValue={setBaseValue}
          options={baseOptions}
        />
        <OrderSection
          title="Select your fill"
          value={fillValue}
          setValue={setFillValue}
          options={fillOptions}
        />
        <OrderSection
          title="Select your sweetener"
          value={sweetenerValue}
          setValue={setSweetenerValue}
          options={sweetenerOptions}
        />
        <OrderSection
          title="Select your topping"
          value={toppingValue}
          setValue={setToppingValue}
          options={toppingOptions}
        />

        <button type="submit">Order</button>
      </form>
    </div>
  );
}
