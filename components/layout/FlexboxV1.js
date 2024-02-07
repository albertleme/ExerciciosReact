import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV1}>
            <Quadrado cor='#F0F'></Quadrado>
            <Quadrado cor='#F00'></Quadrado>
            <Quadrado cor='#0F0'></Quadrado>
            <Quadrado cor='#00F'></Quadrado>
            <Quadrado cor='#0FF'></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#000'
    }
})