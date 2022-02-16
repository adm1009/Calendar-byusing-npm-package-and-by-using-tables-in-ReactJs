import logo from "./logo.svg";
import "./App.css";
import Select from "./Other/Select";
import Apr from "./Month/Apr";
import Aug from "./Month/Aug";
import Dec from "./Month/Dec";
import Feb from "./Month/Feb";
import Jan from "./Month/Jan";
import July from "./Month/July";
import June from "./Month/June";
import May from "./Month/May";
import Nov from "./Month/Nov";
import Oct from "./Month/Oct";
import Sep from "./Month/Sep";
import Mar from "./Month/Mar";
function App() {
  return (
    <div>
      <h1 style={{ textDecoration: "underline"}}>Calendar of the Year-2022</h1>
      {/* <Select />  */}
      <div>
        <div>
          <Jan />
        </div>
        <div>
          <Feb />
        </div>
        <div>
          <Mar />
        </div>
        <div>
          <Apr />
        </div>
        <div>
          <May />
        </div>
        <div>
          <June />
        </div>
        <div>
          <July />
        </div>
        <div>
          <Aug />
        </div>
        <div>
          <Sep />
        </div>
        <div>
          <Oct />
        </div>
        <div>
          <Nov />
        </div>
        <div>
          <Dec />
        </div>
      </div>
    </div>
  );
}

export default App;
