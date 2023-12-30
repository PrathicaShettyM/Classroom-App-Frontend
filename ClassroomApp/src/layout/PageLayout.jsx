import {AiFillCloseCircle} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

import Footer from '../components/Footer'

function PageLayout({ children }){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state)=> state?.auth?.role);

    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }
    
    function hideDrawer(){
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    return(
        <div className="min-h-[90vh] bg-teal-900 text-white">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={changeWidth} size={"40px"} className="font-bold text-white m-4 border-2 p-1 border-white rounded"/>
                    </label>
                </div>
                <div className="drawer-side w-0 bg-teal-400">
                    <label htmlFor="my-drawer" className="drawer-overlay bg-teal-400"></label>
                    <ul className="menu p-4 w-48 sm:w-80 text-white bg-teal-400 relative">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                </div>
            </div>
            {children}
            <Footer/>
        </div>
    )
}
export default PageLayout;