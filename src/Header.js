import React , {useState} from 'react';
import Contact from './Contact';
import './Header.css';
import Panal from './Panal';
import HomeIcon from '@material-ui/icons/Home';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Home from './Home';
import Humidity from './Humidity';
import Temperature from './Temperature';
import Extras from './Extras';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import SubjectIcon from '@material-ui/icons/Subject';
import Controls from './Controls';

function Header() {
    
    const [activeTab,setActiveTab] = useState('Home');

    const ChangeState = (Active_tab) => {
        setActiveTab(Active_tab);
    };
        
    return (    
    <div className="header">
        <div className="info">    
            <div onClick={() => ChangeState('Home')} >
                <Panal Status={activeTab === 'Home' ? "Active" : "Inactive"} 
                Icon={HomeIcon} title='Home' />
            </div>   
            
            <div onClick={() => ChangeState('Humidity')} >
                <Panal Status={activeTab === 'Humidity' ? "Active" : "Inactive"} Icon={InvertColorsIcon} title='H and T' />
            </div>
            
            <div onClick={() => ChangeState('Controls')} >
                <Panal Status={activeTab === 'Controls' ? "Active" : "Inactive"} Icon={OpenWithIcon} title='Controls' />
            </div>

            <div onClick={() => ChangeState('About')} >
                <Panal Status={activeTab === 'About' ? "Active" : "Inactive"} Icon={SubjectIcon} title='Developers Info' />
            </div>
        </div>
        <div className="content-tabs">
            <div className={activeTab === 'Home' ? "content  active-content" : "content"}>
                <Home />
            </div>
          
            <div className={activeTab === 'Humidity' ? "content  active-content" : "content"}>
                    <div className="Data" >
                                <Temperature /> 
                                <Humidity />
                            </div>
                    <div className="display">
                        <Extras />
                    </div>
            </div>
            
            <div className={activeTab === 'Controls' ? "content  active-content" : "content"}>
               <Controls />
            </div>

            <div className={activeTab === 'About' ? "content  active-content" : "content"}>
            <Contact />
            </div>

        </div>
    </div>
    )
}

export default Header