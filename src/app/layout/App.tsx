import MenubarTop from '../../components/TopMenu';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CreateDialog from '../../components/dialogs/createDialog';
import ConfirmDialog from '../../components/dialogs/confirmDialog';

function App() {
  
  return (

<div>
  <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
  <CreateDialog/>
  <ConfirmDialog/>      
      <MenubarTop />
        <div className='contentMid'>
          <Outlet/>
        </div>
      <Footer/>
</div>
  )  
}

export default App;
