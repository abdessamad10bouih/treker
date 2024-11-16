import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Login from "./components/Login"
import Planner from "./pages/Planner"
import PlannerSecond from "./pages/PlannerSecond"

function App() {
  return(
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/inscription" element={<Signup />} />
         <Route path="/connexion" element={<Login />} />
         <Route path="/planner" element={<Planner />} />
         <Route path="/planner/:children" element={<PlannerSecond />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
