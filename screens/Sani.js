import React, { useState, useEffect } from 'react';
import {
  View
} from 'react-native';
import { OdontList } from '../Components/Odont/OdontList/OdontList';
import Header from '../Components/Odont/Header/Header';
import WrapperContext from '../Components/Wrapper/WrapperContext';
//import AppLoading from 'expo-app-loading';
//import useFonts from '../hooks/useFonts';
export const Sani = () => {

    return (
                <View>
                    <WrapperContext>    
                    <Header/>
                    <OdontList/>
                    </WrapperContext>  
                </View>
                    
    
            )


    // const [IsReady, SetIsReady] = useState(false);

    // const LoadFonts = async () => {
    // await useFonts();
    // };
    // console.log("READY FONTS "+IsReady);
    // if (!IsReady) {
    // return (
    //     <AppLoading
    //     startAsync={LoadFonts}
    //     onFinish={() => {
    //         console.log("ReadyFonts");
    //         SetIsReady(true);
    //     }
    //     }
    //     onError={() => {
    //         console.log("Error Fonts");
    //     }}
    //     />
    // );
    // }
    // else{
    //     return (
    //         <View>
    //             <WrapperContext>    
    //             <Header/>
    //             <OdontList/>
    //             </WrapperContext>  
    //         </View>
                

    //     )
    // }

};
