import Btncomp from "./components/Btncomp";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "./components/Select";
import IconBtn from "./components/IconBtn";
import SwitchLabels from "./components/SwitchLabels";
import CInput from "./components/CInput";
import Datepicker from "./components/Datepicker";
import Table from "./components/Table";

import "./App.css";

const buttons = ["button1", "button2", "button3"];


function App() {
  return (

    <div className="App">
      <h1>Button component</h1>
      <Btncomp buttons={buttons} />


    <h1>Select component</h1>
    <Select
    getValue={(e) => {
        console.log(e);
        }}
        label="Select Gender"
        options={[
          {
            value: "male",
            displayName: "Male",
          },
          {
            value: "female",
            displayName: "Female",
          },
    ]}
    />

    <h1 className="m-3">IconBtn component</h1>
    <IconBtn/>


    <h1 className="m-3">Switchlables component</h1>
    <SwitchLabels/>


    <h1 className="m-3">Inputs component</h1>
   <CInput />


    <Datepicker/>



    <h1 className="text-center p-3 "> Table</h1>
    <Table/>

    </div>
  );
}

export default App;