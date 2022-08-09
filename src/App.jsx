

// import './css/style.css'
/* Routes */
import { HashRouter, Routes, Route } from 'react-router-dom'
/*  Import Component */
import { Home, Login, Purchases, Details, PurchasesIdList, Product } from './pages'
import { NavBar } from './components';
import { useSelector } from "react-redux";

/* Esta IMPOTADO EN MAIN Instalar antes de llamar npm install bootswatch */
// import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import LoadingScreen from './components/LoadingScreen';
import ProtectedRoutes from './components/ProtectedRoutes';
import Footer from './components/Footer';


/* Import pages */

/*  Importar variable de Store  */


/* import useDispach */


function App() {
  /* useSelector */
  const isLoading = useSelector((state) => state.isLoading);


  return (
    <div className='App'>
      <HashRouter>
        <NavBar />
        { isLoading && <LoadingScreen /> }

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/details/:id" element={<Details />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/purchases/:id" element={<PurchasesIdList />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
