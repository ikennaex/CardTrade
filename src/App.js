import {Routes, Route} from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage";
import LoginPage from "./Pages/Homepage/LoginPage/LoginPage";
import Missing from "./Pages/Homepage/Missing/Missing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Homepage />} />
        <Route path="/signin" element ={<LoginPage />} />
        {/* <Route path="/signup" element ={<SignUp />} /> */}
        <Route path="*" element = {<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
