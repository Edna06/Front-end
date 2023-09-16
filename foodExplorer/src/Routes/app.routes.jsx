import { Routes, Route } from 'react-router-dom';

// páginas que serão das rotas da aplicação
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details/>}/>

        </Routes>
    )
}