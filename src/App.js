import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/partials/Header"
import RouteTodo from "./pages/todos/RouteTodo";
import TodoProvider from "./context/todos/TodoProvider";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos/*" element={<TodoProvider> <RouteTodo /> </TodoProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;