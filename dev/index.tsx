import { useState } from "react";

import { createRoot } from "react-dom/client";
import "./../dist/style.css";

import { Button } from "@binarynest/modularis";

// import { Button } from "./../dist/index.es";
import { Icon } from "./../dist/index.es";

/*
To test a component locally, uncomment the line avobe and import the component from "/dist/index.es". 
Then run 'npm run dev' 
*/

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="lib-outer-container">
      <div className="lib-header">Local Test</div>
      <div className="lib-inner-container">
        <Button
          variant="secondary"
          size="md"
          onClick={() => {
            window.alert("button was clicked");
          }}
        >
          Button
        </Button>
        <div>
          <Icon
            icon="Checkbox"
            size="24"
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            className={isChecked ? "tw:fill-primary" : "tw:fill-gray-300"}
          />
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
