import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Forside from "../../components/Pages/Forside";
import Maskiner from "../../components/Pages/Maskiner";
import OmPage from "../../components/Pages/Om";
import Udlejning from "../../components/Pages/Udlejning";
import App from "../layout/App";


const url = "/assets/Forside.jpg"
const frontPage = () => {  
    return (
    <div className='contentMid'>
      <img src={url} className= 'imgStyle'></img>
        <Forside/>
    </div>
    );
  }

  const aboutpage = () => {  
    return (
    <div className='contentMid'>
      <img src={url} className= 'imgStyle'></img>
      <OmPage/>
    </div>
    );
  }

  const machinesPage = () => {  
    
    return (
    <div className='contentMid'>
      <Maskiner />
    </div>
    );
  }

  const rentalPage = () => {  
    return (
    <div className='contentMid'>
      <Udlejning/>
    </div>
    );
  }

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: frontPage()},
            {path: 'om', element: aboutpage()},
            {path: 'maskiner', element: machinesPage()},
            {path: 'udlejning', element: rentalPage()},
        ]
    }
]
export const router = createBrowserRouter(routes)