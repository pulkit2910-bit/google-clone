import { createContext, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// reducer.js
import reducer, { initialState } from "./reducer";

// Pages
import Home from "./pages/Home";
import ResultHome from "./pages/Result/ResultHome";
import Images from './pages/Result/Images'
import News from './pages/Result/News'
import Videos from './pages/Result/Videos'

export const SearchContext = createContext();

// https://cse.google.com/cse/create/new -> To create a search engine for your site

function App() {

  return (
    <SearchContext.Provider value={useReducer(reducer, initialState)}>

      <div className="App">

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<ResultHome />} />
            <Route path="/images" element={<Images />}/>
            <Route path="/news" element={<News />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </Router>
      </div>

    </SearchContext.Provider>
  );
}

export default App;
