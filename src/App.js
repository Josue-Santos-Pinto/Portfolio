import { Header } from "./components/Header";
import { Home } from "./screens/Home";

function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#fcfbff" }}
    >
      <Header />
      <Home />
    </div>
  );
}

export default App;
