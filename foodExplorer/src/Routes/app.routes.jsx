import { Routes, Route } from 'react-router-dom';

// páginas que serão das rotas da aplicação
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import {OrderPage} from '../pages/OrderPage'
import {OrderHistory} from '../pages/OrderHistory'
import { EditDish } from '../pages/EditDish';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details/>}/>
            <Route path="/orderpage" element={<OrderPage/>}/>
            <Route path="/orderhistory" element={<OrderHistory/>}/>
            <Route path="/editdish" element={<EditDish/>}/>



        </Routes>
    )
}