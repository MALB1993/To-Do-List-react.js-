import { Route, Routes } from "react-router-dom"
import Index from "./Index";

const RouteTodo = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    )
}

export default RouteTodo;