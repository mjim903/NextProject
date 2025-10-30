// import Hero from '../images/hero.jpg'
import Navbar from "@/components/nav"

export default function HeroPage() {
    return (
        <>
            <div className="bg-white">
                <Navbar />
                <div className="lg:absolute flex lg:flex-row flex-col justify-center items-center lg:h-screen w-full lg:pt-0 py-20">
                    <h1 className="lg:text-9xl md:text-7xl text-5xl font-bold text-amber-800 lg:pt-0 pt-10">INNOVATION</h1>
                    <div className="lg:text-start text-center lg:py-2 py-4">
                        <h1 className="lg:text-5xl text-4xl text-lime-950 font-semibold lg:py-0 py-3">Your LIFE!</h1>
                        <h1 className="lg:text-5xl text-4xl text-emerald-950 font-semibold">Your FUTURE!</h1>
                    </div>
                </div>
                <div class="bg-[url(https://images.unsplash.com/photo-1599394407175-b6da85464b90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074)] 
                bg-center bg-cover w-full lg:h-screen min-h-100">
                </div>
            </div>
        </>
    )
}