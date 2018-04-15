import React from 'react';

import Aux from '../../hoc/Aux_';

const layout = (porps) => (
    <Aux>
        <div> SideBar,Main,Notification,callSection </div>
        <main>
            {porps.children}
        </main>
    </Aux>
);

export default layout; 