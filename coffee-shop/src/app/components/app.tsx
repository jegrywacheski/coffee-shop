"use client";

import { PropsWithChildren, useState } from "react";
import { NavBar } from "./navbar";

export function App(props: PropsWithChildren) {

    const [auth, setAuth] = useState(true);

  return (
    <>
    <main className="flex min-h-screen flex-col items-center">
    <NavBar auth={auth}/>
    {props.children}
    </main>
    </>
  );
}