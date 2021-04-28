import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import "antd/dist/antd.css";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
