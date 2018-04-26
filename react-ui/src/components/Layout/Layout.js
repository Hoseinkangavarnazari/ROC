import React from 'react';
import SideBar from '../../containers/SideBar/SideBar';
import MainSection from '../../containers/MainSection/MainSection';
import ListExampleChat from '../../components/ListExampleChat/ListExampleChat';



const layout = (porps) => (
    <div>
        <ListExampleChat />
        {/* <SideBar />
        <MainSection /> */}
        <main>
            {porps.children}
        </main>
    </div>
);

export default layout; 