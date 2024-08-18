"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "./lib/definitions";
import React from "react";

export default function Home() {
  const [drinkType, setDrinkType] = useState<string>("hot");
  const [items, setItems] = useState<Omit<Product, "quantity">[]>([]);
  const onSelectDrinkType = (type: string) => {
    setDrinkType(type);
  };

  const addItem = (item: Omit<Product, "quantity">) => {
    setItems([...items, item]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fcded2] text-black">
      <div className="flex flex-row gap-4 justify-evenly w-full p-4">
        <div className="flex flex-col justify-center items-center gap-4 w-1/3">
          <p className="text-xl">Bases and Fillers</p>
          <div className="flex flex-wrap justify-center">
            {baseInventoryItems.map((item) => (
              <InventoryItem
                key={item.name}
                item={item}
                onClick={() => addItem(item)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-1/3">
          <p className="text-xl">Sweeteners</p>
          <div className="flex flex-wrap justify-center">
            {sweetenerInventoryItems.map((item) => (
              <InventoryItem
                key={item.name}
                item={item}
                onClick={() => addItem(item)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-1/3">
          <p className="text-xl">Toppings</p>
          <div className="flex flex-wrap justify-center">
            {toppingInventoryItems.map((item) => (
              <InventoryItem
                key={item.name}
                item={item}
                onClick={() => addItem(item)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center m-8">
        <button
          className={`p-2 rounded-lg ${
            drinkType === "hot" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => onSelectDrinkType("hot")}
        >
          Hot Drink
        </button>
        <button
          className={` p-2 rounded-lg ${
            drinkType === "cold" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => onSelectDrinkType("cold")}
        >
          Cold Drink
        </button>
      </div>
      <Cup items={items} />
    </main>
  );
}

function InventoryItem({
  item,
  onClick,
}: {
  item: Omit<Product, "quantity">;
  onClick: () => void;
}) {
  return (
    <div
      className="rounded-full text-center font-bold text-xs p-2 m-1 bg-white border-2 border-black cursor-pointer"
      onClick={onClick}
    >
      {item.name}
    </div>
  );
}

function Cup({ items }: { items: Omit<Product, "quantity">[] }) {
  return (
    <div className="w-52 h-72 border-2 border-black rounded-b-full bg-white overflow-hidden p-2">
      <div className="flex flex-col-reverse items-center h-full overflow-auto scroll-hidden">
        {items.map((item, index) => (
          <InventoryItem key={index} item={item} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}

const baseInventoryItems: Omit<Product, "quantity">[] = [
  {
    name: "espresso",
    price: 0.75,
    unit: "oz",
  },
  {
    name: "matcha powder",
    price: 1.0,
    unit: "tsp",
  },
  {
    name: "chai concentrate",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "green tea",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "black tea",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "peppermint tea",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "brewed coffee",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "cold brew",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "water",
    price: 0,
    unit: "oz",
  },
  {
    name: "3% milk",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "1% milk",
    price: 0.25,
    unit: "oz",
  },
  {
    name: "soy milk",
    price: 0.35,
    unit: "oz",
  },
  {
    name: "almond milk",
    price: 0.35,
    unit: "oz",
  },
  {
    name: "oat milk",
    price: 0.35,
    unit: "oz",
  },
];

const sweetenerInventoryItems: Omit<Product, "quantity">[] = [
  {
    name: "vanilla syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "sf vanilla syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "caramel syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "sf caramel syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "hazelnut syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "brown sugar syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "honey",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "chocolate syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "white chocolate syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "peppermint syrup",
    price: 0.25,
    unit: "pump",
  },
  {
    name: "white sugar",
    price: 0.1,
    unit: "tsp",
  },
  {
    name: "brown sugar",
    price: 0.1,
    unit: "tsp",
  },
  {
    name: "splenda",
    price: 0.1,
    unit: "tsp",
  },
];

const toppingInventoryItems: Omit<Product, "quantity">[] = [
  {
    name: "caramel drizzle",
    price: 0.25,
    unit: "tsp",
  },
  {
    name: "whipped cream",
    price: 0.25,
    unit: "cup",
  },
  {
    name: "cinnamon powder",
    price: 0,
    unit: "sprinkle",
  },
  {
    name: "cocoa powder",
    price: 0,
    unit: "sprinkle",
  },
  {
    name: "matcha powder",
    price: 0,
    unit: "sprinkle",
  },
];
