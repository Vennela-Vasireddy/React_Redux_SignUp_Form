import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SignupForm } from "./components/SignupForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App" 
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
        }}>
        <SignupForm />
      </div>
    </Provider>
  );
}

export default App;
