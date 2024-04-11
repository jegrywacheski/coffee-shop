import Image from 'next/image';


export function NavBar(props: {auth: boolean}) {
  return (
    <>
    <nav className="flex items-center justify-between w-full py-4 px-8 bg-gold-100">
      <div className='flex flex-row items-center' >
        <Image src="/coffee.png" alt="Coffee Shop" width={75} height={75} />
        <a href="/order" className="text-2xl font-bold pl-8">
            Order Now
        </a>
      </div>
      <ul className="flex gap-4">

        {props.auth && (
        <>
        <li>
          <a href="/saved" className="text-lg">
            Saved
          </a>
        </li>
        <li>
          <a href="/cart" className="text-lg">
            Cart
          </a>
        </li>
        <li>
          <a href="/logout" className="text-lg">
            Logout
          </a>
        </li>
        </>
        )}


        {!props.auth && (
        <li>
          <a href="/login" className="text-lg">
            Login
          </a>
        </li>
        )}
      </ul>
    </nav>
    </>
  );
}