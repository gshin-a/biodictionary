import "./App.css";
import { requestList, requestOne } from "./services/api";
import { useEffect } from "react";

// 저작권자 표시하기!!

function App() {
  useEffect(() => {
    requestList({
      type: "mamm",
      searchName: "",
      numOfRows: 20,
      pageNo: 1,
    }).then((res) => console.log(res));
    requestOne({
      type: "mamm",
      id: "A000000996",
    }).then((res) => console.log(res));
  }, []);

  return <div className="App"></div>;
}

export default App;
