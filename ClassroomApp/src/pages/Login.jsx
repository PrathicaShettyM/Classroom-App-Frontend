import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isEmail } from "../helper/regexMatcher";
import PageLayout from '../layout/PageLayout'
import { login } from "../redux/slices/authSlice";

function Login(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [logindetails, setLoginDetails] = useState({
        email:'',
        password: '',
    });

    function handleUserInput(e){
        const {name, value} = e.target;
        setLoginDetails({
            ...logindetails,
            [name]: value
        })

    }

    async function onFormSubmit(e){
        // to prevent page refresh during form submission
        e.preventDefault();
        console.log(logindetails);
        if(!logindetails.email || !logindetails.password){
            toast.error("Please fill all the details");
            return;
        }
        if(!isEmail(logindetails.email)){
            toast.error("Invalid email provided")
            return;
        }

        const response = await dispatch(login(logindetails));
        console.log(response);

        // redirect to home page after account sign up
        if(response?.payload?.data){
            navigate("/")
        }
        // reset the form
        setLoginDetails({
            email:'',
            password: '',
            });
    }

    return(
            <PageLayout>
                <div className="flex overflow-x-auto items-center justify-center h-[90vh]">
                    <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-3 rounded-lg px-16 py-8 text-teal-700 border-2 border-teal-700">
                        <h1 className="text-3xl text-center font-bold mb-3">Log In</h1>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={handleUserInput}
                                value={logindetails.email}
                                required
                                type="text"
                                name="email"
                                id="email"
                                className="px-2 py-1 border"
                                placeholder="Enter your email ..."
                            />    
                        </div>

                        <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                                onChange={handleUserInput}
                                value={logindetails.password}
                                required
                                type="password"
                                name="password"
                                id="password"
                                className="px-2 py-1 border"
                                placeholder="Enter your password ..."
                        />  
                        </div>
                        <button className="w-full mt-2 py-2 rounded bg-green-400 hover:bg-green-600 transition-all ease-in-out duration-300 font-semibold cursor-pointer text-lg text-white">
                            LogIn
                        </button>
                    </form>
                </div>
            </PageLayout>
    )
}
export default Login;