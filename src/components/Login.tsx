import { Link } from "react-router-dom"
import logo from "../assets/petals.jpg"
import text from "../assets/text.png"
import seen from "../assets/seen.png"
import hide from "../assets/hide.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import web from "../assets/web.png"
import { useState , useEffect } from "react"
import { Carousel } from "@material-tailwind/react"

type FormData = {
email: string,
password: string,
};
const Login = () => {
    const [email , setEmail] = useState<FormData["email"]>("");
    const [password , setPassword] = useState<FormData["password"]>("");
    const [show , setShow] = useState(false);
    function submitHandler (e: React.FormEvent):void {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        setEmail(target.email.value);
        setPassword(target.password.value);

    }
    
    useEffect(() => {
        console.log(email , password);
    }, [email , password])

  return (
    <div className="relative gap-10 flex flex-col justify-center items-center min-h-screen p-5 md:flex-row overflow-hidden">
        <div className="relative w-full flex items-center justify-center bg-background bg-cover h-full rounded-3xl md:w-half">
            <img src={text} alt="exo" className="absolute top-8 left-8 w-20" />
            <div className="slider h-1/2 relative">
            <Carousel
            style={{ height: "60%" , left: "-20vw" , top: 100 , width: "100%" , position: "absolute"  }}
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-12 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "bg-white w-8" : "bg-white/50 w-2"
                        }`}
                        onClick={() => setActiveIndex(i)}
                        />
                    ))}
                    </div>
                )}
                >
                    <div className="w-96 z-10 h-1/2 font-Poppins">
                        <h1 className="text-white text-4xl">100% Uptime</h1>
                        <h1 className="text-gray-400 text-3xl">Zero Infrastructure<br />Management </h1>
                    </div>
                    <div className="h-1/2">

                    </div>
                    <div className="h-1/2">
                        
                    </div>
                </Carousel>

            </div>
            <div className="absolute bottom-8 flex w-ninety justify-between">
                <div className="flex gap-6 items-center">
                <img src={web} id = "webLink" alt="web" className="w-8 z-10"/>
                <label htmlFor="webLink" className="text-white"><Link to = "https://aesthisia.com/">aesthisia.com</Link></label>
                </div>
                <div className="flex gap-1">
                <Link to = "https://www.facebook.com/Aesthisia-107243424903291">
                    <img src={facebook} alt="facebook" className="w-8 h-8 z-10"/>
                </Link>
                <Link to = "https://www.linkedin.com/company/aesthisia/?originalSubdomain=in">
                    <img src={linkedin} alt="linkedIn" className="w-8 h-8 z-10"/>
                </Link>
                <Link to = "https://www.instagram.com/aesthisia/">
                    <img src={instagram} alt="instagram" className="w-8 h-8 z-10" />
                </Link>
                </div>
            </div>
        </div>
        <div className="form flex flex-col items-center justify-center w-half relative">
            <img src={logo} alt="logo" className="logo w-16" />
            <h1 className="font-Poppins text-2.5xl font-medium">Welcome <span className="text-teal-blue">Back!</span></h1>
            <p className="text-lg">Glad to see you again</p>
            <form onSubmit = {submitHandler} className="flex flex-col items-center justify-center w-full relative my-16 gap-10">
                <input type="email" 
                placeholder="Enter your email" 
                id = "email"
                className=" w-med md:w-half flex border-solid border-2 border-custom p-4 rounded-ten" 
                />
                <div className="relative w-med md:w-half flex">
                <input type={show ? "text" : "password"} 
                placeholder = "Enter your password" 
                id = "password"
                className="w-full border-solid border-2 border-custom p-4 rounded-ten"
                />
                <img src={show ? hide : seen} alt="" onClick = {() => setShow(!show)} className="absolute right-4 top-6" />
                </div>
                <button type="submit" id = "btn" className="w-med md:w-half bg-black text-white p-4 text-xl font-medium rounded-ten shadow-custom">Log In</button>
            </form>
            <p className="text-lg">Don't have an account yet? <Link to = "/signup" className="text-teal-blue">Sign Up</Link></p>
        </div>
    </div>
  )
}

export default Login