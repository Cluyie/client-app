import MenubarTop from '../../components/TopMenu';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (

<div>      
      <MenubarTop />
        <div className='contentMid'>
          <Outlet/>
        </div>
      <Footer/>
</div>
  )  
}

export default App;
