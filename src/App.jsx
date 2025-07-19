import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./test/Login";
import Home from "./test/Home";
import Signup from "./test/Signup";
import UserProvider from "./Contexts/UserContext";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<Home />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
