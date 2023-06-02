import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
  return (
    <div className="flex justify-center items-center h-screen">
        <h1>Hello , {location.state.email}</h1>
    </div>
  )
}

export default Home