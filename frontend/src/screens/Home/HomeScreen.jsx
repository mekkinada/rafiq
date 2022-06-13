import React from 'react';


import Meta from '../../components/Helmet/Meta';
import SliderComponent from '../../components/Slider/Slider';
import Activities from '../../components/Activities/Activities';

import Partners from '../../components/Partner/Partner';

import GenralMap from '../Map/GenralMap';


const HomeScreen = () => {

    return (
        <>
            <Meta />
            
            <SliderComponent />

            

            <Activities/>


            <Partners/>

            
 
            <GenralMap />

        </>
    )
}

export default HomeScreen;
