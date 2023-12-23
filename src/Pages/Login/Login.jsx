import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { signUpWithGmail, login } = useAuth()
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()

    const handelLogin = () => {
        signUpWithGmail()
            .then((result) => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "User Login Sucessfully",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate('/dashbord')
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        // console.log(email,password)
        login(email, password)
            .then(() => {
                // const user = result.user
                toast.success('User Login Successfully!')

                // Navigate to the specified path
                // navigate(from, { replace: true });
            }).catch((err) => {
                const errorMessage = err.message
                setErrorMessage("Provide a correct email and password")
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4 text-center text-purple-800">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded-md p-2 focus:outline-none focus:border-purple-500"
                            placeholder="Enter your mail"
                            {...register("email")}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full border rounded-md p-2 focus:outline-none focus:border-purple-500"
                            placeholder="Enter your password"
                            {...register("password")}
                        />
                    </div>
                    {/* error */}
                    {
                        errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
                    }
                    <div className="form-control mt-4">
                        <input
                            type="submit"
                            value="Login"
                            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition duration-300"
                        />
                    </div>

                    <p className="text-center my-2">
                        Donot have an account?{" "}
                        <Link to="/signup" className="underline text-red ml-1">
                            Signup Now
                        </Link>{" "}
                    </p>
                </form>
                {/* social login */}
                <div className="text-center space-x-3 mt-5">
                    <button className="btn btn-circle hover:bg-green hover:text-white">
                        <FaGoogle onClick={handelLogin} />
                    </button>
                    <button className="btn btn-circle hover:bg-green hover:text-white">
                        <FaFacebookF />
                    </button>
                    <button className="btn btn-circle hover:bg-green hover:text-white">
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;