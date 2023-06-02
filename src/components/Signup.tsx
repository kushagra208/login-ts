import { Link } from "react-router-dom"
import logo from "../assets/petals.jpg"
import seen from "../assets/seen.png"
import hide from "../assets/hide.png"
import { useState , useEffect } from "react"
type FormData = {
name: String,
email: String,
password: String,
};
const Signup = () => {
  const [name , setName] = useState<FormData["name"]>("");
  const [email , setEmail] = useState<FormData["email"]>("");
  const [password , setPassword] = useState<FormData["password"]>("");
  const [show , setShow] = useState(false);

  function submitHandler (e: React.SyntheticEvent):void {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        name: { value: string };
        email: { value: string };
        password: { value: string };
    };
    setName(target.name.value);
    setEmail(target.email.value);
    setPassword(target.password.value);
}

  useEffect(() => {
    console.log(email , password , name);
  }, [email , password , name])
  

  return (
    <div className="form flex flex-col items-center justify-center w-screen h-screen relative">
    <img src={logo} alt="logo" className="logo w-16" />
    <h1 className="font-Poppins text-2.5xl font-medium">Welcome</h1>
    <p className="text-lg">Glad to see you. Please register</p>
    <form onSubmit = {submitHandler} className="flex flex-col items-center justify-center w-full relative my-16 gap-10">
        <input type="text" 
        placeholder="Enter your name" 
        id = "name"
        className="w-med border-solid border-2 border-custom p-4 rounded-ten" 
        />
        <input type="email" 
        placeholder="Enter your email" 
        id = "email"
        className="w-med border-solid border-2 border-custom p-4 rounded-ten" 
        />
        <div className="relative">
        <input type={show ? "text" : "password"} 
        placeholder = "Enter your password" 
        id = "password"
        className="w-med border-solid border-2 border-custom p-4 rounded-ten"
        />
        <img src={show ? hide : seen} alt="" onClick = {() => setShow(!show)} className="absolute right-4 top-6" />
        </div>
        <button type="submit" id = "btn" className="w-med bg-black text-white p-4 text-xl font-medium rounded-ten shadow-custom">Sign Up</button>
    </form>
    <p className="text-lg">Already have an account ? <Link to = "/login" className="text-teal-blue">Log In</Link></p>
</div>
  )
}

export default Signup