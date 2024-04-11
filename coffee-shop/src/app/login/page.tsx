import Image from 'next/image';

export default function Login() {
    return (
        <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image src="/coffee.png" width={200} height={200} alt='https://www.vecteezy.com/png/23617247-coffee-shop-logo' />
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="flex flex-col space-y-8">
          <input
            type="email"
            placeholder="Email"
            className="p-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="p-4 bg-gold-100/90 text-white rounded-md"
          >
            Login
          </button>
        </form>
      </main>
    </>
    );
}