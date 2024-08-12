import { App } from "./components/app"


export default function Home() {

  return (
    <App>
    <section className="flex flex-col items-center justify-center w-full h-full p-8">
      <h1 className="text-4xl font-bold">Welcome to Coffee Shop</h1>
      <p className="text-lg">The best coffee in town</p>
      <a href="/products" className="text-lg">View our products</a>
      <a href="/order" className="text-lg">Order now!</a>
    </section>
    </App>
  );
}
