import {Login} from './pages/Login/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export function App() {
    return (
        <BrowserRouter>             
            <Routes>
                <Route path='/Login' element={<Login/>}></Route>            
            </Routes>
        </BrowserRouter>        
    )
}