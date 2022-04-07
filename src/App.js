import "./App.css";
import Article from "./components/molecule/Article/Article";
import AllArticles from "./components/organism/AllArticles/AllArticles";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from '../src/components/organism/Footer/Footer'
import Reporting from '../src/components/organism/Reporting/Reporting'

function App() {
  const [listOfArticles, setListOfArticles] = useState([]);
  const [clickedArticleId, setClickedArticleId] = useState();

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AllArticles listOfArticles={listOfArticles} setListOfArticles={setListOfArticles} setClickedArticleId={setClickedArticleId} />} />
        <Route path="/:id" element={<Article clickedArticleId={clickedArticleId} listOfArticles={listOfArticles}/>} />
        </Routes>
      <Reporting />
      <Footer />
    </div>
  );
}

export default App;
