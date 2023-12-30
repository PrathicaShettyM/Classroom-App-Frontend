import PageLayout from "../layout/PageLayout";

function Register(){

    return(
            <PageLayout>
                <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                    <form noValidate className="flex flex-col items-center justify-center gap-3 rounded-lg px-16 py-8 border-2 border-teal-800">
                        <h1 className="text-3xl text-center font-bold text-teal-800">Registration Page</h1>
                      
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="fullName">Name</label>
                            <input
                                required
                                type="text"
                                name="fullName"
                                id="fullName"
                                className="px-2 py-1 w-full"
                                placeholder="Enter your username ..."
                            />   
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="fullName">Branch</label>
                        <select className="px-2 py-1">
                            <option value="CSE">CSE</option>
                            <option value="ISE">ISE</option>
                            <option value="CY">CY</option>
                            <option value="CD">CD</option>
                            <option value="AIML">AIML</option>
                          </select>  
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                type="text"
                                name="email"
                                id="email"
                                className="px-2 py-1"
                                placeholder="Enter your email ..."
                            />    
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="password">Password</label>
                        <input
                                required
                                type="password"
                                name="password"
                                id="password"
                                className="px-2 py-1 border"
                                placeholder="Enter your password ..."
                        />  
                        </div>
                        <button className="w-full mt-4 py-2 rounded bg-green-500 hover:bg-green-700 transition-all ease-in-out duration-300 font-semibold cursor-pointer text-lg">
                            Register user
                        </button>
                    </form>
                </div>
            </PageLayout>
    )
}
export default Register