import Navbar from "@/components/nav"

export default function About() {

    return (
        <>
            <div className="bg-gray-200 pb-15 overflow-hidden">
                <Navbar />
                <div className="lg:px-0 px-10">
                    <div className="flex justify-center pt-20">
                        <h1 className="dark:text-black text-3xl underline">ABOUT</h1>
                    </div>
                    <div className="dark:text-black flex justify-center text-center text-2xl py-10">
                        <h1></h1>
                    </div>
                </div>
                
            </div>
        </>
    )
}