import { Routes, Route } from 'react-router-dom';

// páginas que serão das rotas da aplicação
import { Home } from '../pages/Home';


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    )
}