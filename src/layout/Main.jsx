import { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);
    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    return (
     
           <>
            <Header toggleDrawer={toggleDrawer} ></Header>
            <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer}></SideBar>
            </>

    );
};

export default Main;