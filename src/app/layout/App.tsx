import MenubarTop from '../../components/TopMenu';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (

<div>
  <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>      
      <MenubarTop />
        <div className='contentMid'>
          <Outlet/>
        </div>
      <Footer/>
</div>
  )  
}

export default App;
