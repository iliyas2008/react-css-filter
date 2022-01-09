import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallary from './componentes/gallery/Gallery';
import Display from './componentes/main-div/Display';
import './App.css';

export default function App(props) {
   return (
    <div className="App">
      <header className="App-header">
      <h1>React CSS Filter</h1>
      <p>Refer github <a style={{textDecoration:"none", color:"lightseagreen", fontWeight:"700"}} href="https://github.com/iliyas2008/react-css-filter">Repo</a></p>
      </header>
      <section className="App-body">
        <Router>
          <Routes>
            <Route path="/" element={<Gallary />} ></Route>
            <Route path="/edit" element={<Display />} ></Route>
          </Routes>
        </Router>
      </section>
    </div>
  );
}