import {Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";
import Download from "./Download";



function AllRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<Navbar />}/>
            <Route path="/download" element={<Download />}  />
        </Routes>


    )
}

export default AllRoutes;