import { createRoot } from "react-dom/client";
import Dashboard from "./pages/Dashboard";


const AppLayout = ()=>{
    return (
        <div className="">
            <Dashboard/>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<AppLayout />);