import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header/header'
import MainPage from './components/pages/MainPage'
import ComicsPage from './components/pages/ComicsPage'
import Page404 from './components/pages/404'

import './reset.scss'
import './style.scss'
import ComicsItem from './components/comicsItem/ComicsItem'



function App() {

  return (
    <Router basename='/marvel-app'>
        <>
            <Header/>
            <Routes>         

              <Route path='/' element={<MainPage/>}/>

              <Route path='comics' element={<ComicsPage/>}/>
              <Route path='comics/:comicsId' element={<ComicsItem/>}/>
              
              <Route path='*' element={<Page404/>}/>

            </Routes>
        </>
    </Router>
  )
}

export default App
