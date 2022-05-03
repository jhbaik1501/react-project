import Header from "./components/navbar/Header";
import { Outlet } from "react-router-dom";
function App({ children }) {
  return (
    
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
