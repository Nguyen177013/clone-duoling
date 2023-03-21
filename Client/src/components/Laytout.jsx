import Navbar from "../components/Navbar/Navbar";
import Quizs from "../pages/Quizs/Quizs";
import { useAuthContext } from "../hooks/useAuthContext";

const Layout = () => {
    return ( 
        <div className="Layout">
        <Navbar/>
        <Quizs/>
        </div>
     );
}
 
export default Layout;