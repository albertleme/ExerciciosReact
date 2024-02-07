import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV1}>
            <Quadrado cor='#E40303' lado={20}></Quadrado>
            <Quadrado cor='#FF8C00' lado={30}></Quadrado>
            <Quadrado cor='#FFED00' lado={40}></Quadrado>
            <Quadrado cor='#008026' lado={50}></Quadrado>
            <Quadrado cor='#24408E' lado={60}></Quadrado>
            <Quadrado cor='#732982' lado={70}></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        height:350,
        width:'100%',
        backgroundColor: '#000'
    }
})