import React from "react";
import Todo from "./components/Todo/Todo";
import CryptoItem from "./components/Crypto/CryptoItem";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <Todo /> */}
        <CryptoItem />
      </Provider>
    </>
  );
};

export default App;
