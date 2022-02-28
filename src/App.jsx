import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
}

export default App;
