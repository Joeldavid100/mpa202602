import indexContext from './pages/index_page';
import productoscontext from './pages/productos_info'

export default (page)=>{
    switch(page){
        case '/index.html':
            return indexContext;
        case '/productos.html':
            return productoscontext;
        default:
            return {};
    }
};