import { createRoot } from "react-dom/client";
import "./../dist/style.css";

import { Button } from "./../dist/index.es";
/*
To test a component locally, uncomment the line avobe and import the component from "/dist/index.es". 
Then run 'npm run dev' 
*/

const App = () => (
  <div className="lib-outer-container">
    <div className="lib-header">Local Test</div>
    <div className="lib-inner-container">
      <Button variant="primary" onClick={() => {window.alert("button was clicked")}}>
        Button
      </Button>
    </div>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
