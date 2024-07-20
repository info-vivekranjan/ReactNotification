import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";

function App() {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type: string) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          backgroundColor: "#d9534f",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          backgroundColor: "#5bc0de",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  return (
    <>
      <h1>React Notification</h1>
      <div className="displayFlex">
        <button onClick={() => showToast("success")}>Success</button>
        <button onClick={() => showToast("danger")}>Danger</button>
        <button onClick={() => showToast("info")}>Info</button>
        <button onClick={() => showToast("warning")}>Warning</button>
      </div>
      <Notification
        toastlist={list}
        position="buttom-right"
        setList={setList}
      />
    </>
  );
}

export default App;
