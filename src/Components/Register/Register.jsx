import { Link } from "react-router-dom"
import log from '../../assets/images/login/login.svg'
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

const Register = () => {


    const {createUser} = useContext(AuthContext)

    const handleRegister = event=> {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => console.error(error))
    }

  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-center items-center mx-auto ">
    <div>
        <img src={log} alt="" />
    </div>
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border-[1px] border-gray-200 shadow-md bg-white">
<h1 className="text-2xl font-bold text-center">Register</h1>
<form 
onSubmit={handleRegister}
noValidate="" action="" className="space-y-6">
    <div className="space-y-1 text-sm">
        <label htmlFor="name" className="block dark:text-gray-600">Full Name</label>
        <input type="text" name="name" id="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
    </div>
    <div className="space-y-1 text-sm">
        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
    </div>
    <div className="space-y-1 text-sm">
        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
        <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
        </div>
    </div>
    <div>
    <button className="block w-full p-3 text-center rounded-md bg-black text-white ">Register</button>
    </div>
</form>

<p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
    <Link to="/login" rel="noopener noreferrer" href="#" className="underline text-blue-500"> Login</Link>
</p>
</div>
</div>
  )
}

export default Register