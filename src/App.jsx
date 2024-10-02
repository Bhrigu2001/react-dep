import React from "react";
import Header from "./Components/header";
import Nav from "./Components/nav";
import Child from "./Components/child1";

const App = () => {
  return (
    <>
    <Nav title ="NavBar lololo" />
    <Header title ="Header lololo" />
    <Child>
      <h1>hello child </h1>
      <p>dfnhdijkfjmk</p>
      <button>explore</button>
    </Child>
    </>
  )
}

export default App