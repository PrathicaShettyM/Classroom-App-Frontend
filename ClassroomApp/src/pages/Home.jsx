import { Link } from "react-router-dom";

import HomePage from '../assets/Images/HomePage.jpg'
import PageLayout from "../layout/PageLayout";

function Home(){
    return(
        <PageLayout>
            <div className="pt-10 flex items-center justify-center gap-10 mx-16 h-[100vh] p-8">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">Plug into digital learing with <span className="text-emerald-600 font-bold">Campus Connect</span></h1>
                    <p className="text-xl">
                        The ultimate digital learning hub is here! Organize your classes, access assignments, lectures, and discussions anytime, anywhere. Campus Connect streamlines your academic journey, freeing you to focus on what matters most - learning and thriving.
                    </p>

                    <div className="space-x-6">
                        <Link to="/signin">
                            <button className="border-2 border-emerald-500 bg-emerald-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-emerald-600 transition-all ease-in-out duration-300 text-white">Get started</button>
                        </Link>
                        <Link to="/aboutus">
                            <button className="border-2 border-pink-700 text-pink-700 px-7 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-pink-700 transition-all ease-in-out duration-300 hover:text-white">About us</button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img src={HomePage} alt="homepage"/>
                </div>
            </div>
        </PageLayout>

    )
}
export default Home;