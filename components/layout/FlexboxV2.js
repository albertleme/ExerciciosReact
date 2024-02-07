import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV1}>
            <Quadrado cor='#E40303'></Quadrado>
            <Quadrado cor='#FF8C00'></Quadrado>
            <Quadrado cor='#FFED00'></Quadrado>
            <Quadrado cor='#008026'></Quadrado>
            <Quadrado cor='#24408E'></Quadrado>
            <Quadrado cor='#732982'></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flex:1,
        width:'100%',
        alignItems:"flex-end",
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})