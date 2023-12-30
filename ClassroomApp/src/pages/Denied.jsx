import { useNavigate } from "react-router-dom";

function Denied(){
    const navigate = useNavigate();
    return(
        <main className="h-screen w-full flex flex-col items-center justify-center bg-slate-200">
            <h1 className="text-9xl font-semibold text-black">
                403
            </h1>
            <div className="bg-orange-500 text-black px-2 rounded text-sm rotate-12 absolute">
                Access Denied
            </div>
            <button
                onClick={()=> navigate(-1)}
                className="mt-5 "
            >
               <span className="relative block px-8 py-3 border-2 border-current bg-orange-500 text-white rounded">Go Back</span> 
            </button>
        </main>
    )
}
export default Denied;