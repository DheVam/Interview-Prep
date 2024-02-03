import logo from "./logo.svg";
import "./App.css";
import Counter from "./Concepts/Basics";
import HooksExample from "./Concepts/Hooks";
import {
  MyProvider,
  useMyContext,
} from "./Concepts/ContextExample/ContextProvider";
import ContextChild from "./Concepts/ContextExample/ContextChild";
import { ContextChildTwo } from "./Concepts/ContextExample/ContextChildTwo";
import { ReactForm, UncontrolledForm } from "./Concepts/ReactForms";
import BasicEvents, { EventDelegation } from "./Concepts/BasicEvents";
import { GetResponse } from "./Concepts/API";

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Counter />
        <hr />
        <HooksExample />
        <hr />
        <ContextChild />
        <hr />
        <ContextChildTwo />
        <hr />
        <ReactForm />
        <hr />
        <UncontrolledForm />
        <hr />
        <BasicEvents />
        <hr />
        <EventDelegation />
        <hr />
        <GetResponse />
      </div>
    </MyProvider>
  );
}

export default App;
