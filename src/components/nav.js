import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <nav className="fixed z-5 flex justify-between lg:px-20 px-5 py-5 bg-gray-200 w-full">
                <h1 className="lg:text-3xl text-2xl px-3 font-bold"><span className="text-amber-600">Innovative</span>
                    <span className="text-emerald-600">WORLD</span>
                </h1>
                <input type="checkbox" id="menu-toggle" className="peer hidden" />
                <label for="menu-toggle" className="black lg:text-2xl text-4xl cursor-pointer md:hidden">
                    ☰
                </label>
                <ul className="peer-checked:flex hidden flex-col md:flex md:flex-row md:space-x-6 mt-4 md:mt-0 bg-gray-200 md:bg-transparent p-4 md:p-0 rounded md:rounded-none">
                    <li><a href={'/'} className="hover:text-amber-600 hover:underline hover:scale-100 duration-300 lg:text-md text-xl">Home</a></li>
                    <li><a href={'about'} className="hover:text-amber-600 hover:underline hover:scale-100 duration-300 lg:text-md text-xl">About</a></li>
                    <li><a href={'/contact'} className="hover:text-amber-600 hover:underline hover:scale-100 duration-300 lg:text-md text-xl">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}