import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
