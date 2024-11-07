import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (<div>
        <Header />

        <div className=" relative">
            <img className=" brightness-50"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/CA-en-20241028-TRIFECTA-perspective_91099d29-c7e2-44bd-a152-bff3af9d980a_large.jpg"
                alt="back pic" />

            <form
                className=" h-3/4 w-2/5 px-16 pt-6 absolute bg-black top-[62%] left-[50%] -translate-x-2/4 -translate-y-2/4 bg-opacity-75 rounded-xl ">
                <h2 className="text-white brightness-200 text-3xl  pt-6 pb-8 pr-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>
                <input
                    type="text"
                    placeholder="Email or mobile number"
                    className=" p-3 mb-5 w-full rounded-lg bg-zinc-900 placeholder-zinc-600"
                />

                {<input
                    type="text"
                    placeholder="Full Name"
                    className=" p-3 mb-5 w-full rounded-lg bg-zinc-900 placeholder-zinc-600"
                />
                }

                <input
                    type="password"
                    placeholder="Password"
                    className="  p-3 rounded-lg w-full bg-zinc-900  placeholder-zinc-600  "
                />
                <button
                    className="text-white brightness-200 text-lg bg-net p-2 mt-7 w-full rounded hover:bg-red-950">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                {isSignInForm ?
                    <p className="text-gray-400 pt-6">New to Netflix? <span className="text-gray-100 cursor-pointer"
                        onClick={toggleSignInForm}>Sign Up Now.</span>
                    </p> :
                    <p className="text-gray-400 pt-6">Already Registered? <span className="text-gray-100 cursor-pointer"
                        onClick={toggleSignInForm}>Sign In Now.</span>
                    </p>}

            </form>


        </div>
    </div>)
}
export default Login