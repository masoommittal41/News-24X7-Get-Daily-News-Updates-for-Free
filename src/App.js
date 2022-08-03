import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App= ()=>{
  const pageSize = 6;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)
    return (
      <div>
        <Router>
            <Navbar/>
            <LoadingBar
        color='#f11946'
        progress={progress}
      />
            <Routes>
              <Route path="/" element={
                <News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize}country="in" key="general" category="general"/>}>
              </Route>
              <Route path="/business" element={
                <News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="business" category="business"/>}>
              </Route>
              <Route path="/entertainment" element={
                <News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="entertainment" category="entertainment"/>}>
              </Route>
              <Route path="/health" element={
                <News   setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="health" category="health"/>}>
              </Route>
              <Route path="/science"element={
                <News   setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="science" category="science"/>}>
              </Route>
              <Route path="/sports" element={
                <News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="sports" category="sports"/>}>
              </Route>
              <Route path="/technology" element={
                <News   setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="technology" category="technology"/>}>
              </Route>
            </Routes>
        </Router>
      </div>     
    )
  }
export default App
