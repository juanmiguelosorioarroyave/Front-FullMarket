import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingIn from "./Components/UI/Login/SingIn";
import { LayoutCards } from "./Components/Layout/LayoutCards/LayoutCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SingIn/>}>
        </Route>
        <Route exact path='/LayoutCards' element={<LayoutCards/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
