"use client";

import { useState } from "react";
import { NavBar } from "./components/navbar";

export default function Home() {
  const [auth, setAuth] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center">
    <NavBar auth={auth}/>
    <section className="flex flex-col items-center justify-center w-full h-full p-8">
      <h1 className="text-4xl font-bold">Welcome to Coffee Shop</h1>
      <p className="text-lg">The best coffee in town</p>
    </section>
    </main>
  );
}
