import React from 'react';
import SideBar from '../../containers/SideBar/SideBar';
import Aux from '../../hoc/Aux_';
import MainSection from '../../containers/MainSection/MainSection'


const layout = (porps) => (
    <div>
        <SideBar />
        <MainSection />
        <main>
            {porps.children}
        </main>
    </div>
);

export default layout; 