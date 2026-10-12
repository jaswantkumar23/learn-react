import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "Jaswant", age: 22 });

  const btnClicked = () => {
    const newNum = { ...num };
    newNum.user = "Aakash";
    newNum.age = 23;
    newNum.subject = "E-Commerce";
    setNum(newNum);
  };

  return (
    <div>
      <h1>
        {num.user} , {num.age}, {num.subject}
      </h1>
      <button onClick={btnClicked}>Click Me!</button>
    </div>
  );
};

export default App;
