import MenubarTop from '../../components/TopMenu';
import Footer from '../../components/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CreateDialog from '../../components/dialogs/createDialog';
import ConfirmDialog from '../../components/dialogs/confirmDialog';
import ConfirmRentalDialog from '../../components/dialogs/confirmRentalDialog';
import CreateRentalDialog from '../../components/dialogs/createRentalDialog';
import LoginDialog from '../../components/dialogs/loginDialog';
import { useStore } from '../stores/store';
import { useEffect } from 'react';

function App() {
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser();
    } 
  }, [commonStore, userStore])

  return (
<div>
  <ScrollRestoration/>
  <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
  <CreateDialog/>
  <ConfirmDialog/> 
  <ConfirmRentalDialog/>
  <CreateRentalDialog/>
  <LoginDialog/>     
      <MenubarTop />
        <div>
          <Outlet/>
        </div>
      <Footer/>
</div>
  )  
}

export default App;
