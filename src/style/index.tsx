import React from 'react'
import { StyleSheet } from 'react-native'

const color = 'rgba(121, 121, 121, 1)'
const width = 1.3;
export const styles = StyleSheet.create({
    bg:{
        backgroundColor:color,
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    triangleUp: {
        width: 0,
        height: 0,
        borderLeftWidth: width,
        borderLeftColor:'transparent',
        borderRightWidth: width,
        borderRightColor: 'transparent',
        borderBottomWidth: width,
        borderBottomColor:color,
    },
    triangleRight: {
        width: 0,
        height: 0,
        borderTopWidth: width,
        borderTopColor:'transparent',
        borderLeftWidth: width,
        borderLeftColor: color,
        borderBottomWidth: width,
        borderBottomColor:'transparent',
    },
    right: {
        width: 0,
        height: 0,
        borderTopWidth: width,
        borderTopColor:'transparent',
        borderLeftWidth: width*2,
        borderLeftColor: color,
        borderBottomWidth: width,
        borderBottomColor:'transparent',
    },
    triangleDown: {
        width: 0,
        height: 0,
        borderLeftWidth: width,
        borderLeftColor:'transparent',
        borderRightWidth: width,
        borderRightColor: 'transparent',
        borderTopWidth: width,
        borderTopColor:color,
    },
    triangleLeft: {
        width: 0,
        height: 0,
        borderTopWidth: width,
        borderTopColor:'transparent',
        borderRightWidth: width,
        borderRightColor: color,
        borderBottomWidth: width,
        borderBottomColor:'transparent',
    },
    left: {
        width: 0,
        height: 0,
        borderTopWidth: width,
        borderTopColor:'transparent',
        borderRightWidth: width*2,
        borderRightColor: color,
        borderBottomWidth: width,
        borderBottomColor:'transparent',
    },
    topLeft: {
        width: 0,
        height: 0,
        borderTopWidth: width,
        borderTopColor: color,
        borderRightWidth: width*2,
        borderRightColor: 'transparent',
    },
    topRight: {
        width: 0,
        height: 0,
        borderTopWidth: width,
        borderTopColor: color,
        borderLeftWidth: width*2,
        borderLeftColor: 'transparent',
    },
    bottomLeft: {
        width: 0,
        height: 0,
        borderBottomWidth: width,
        borderBottomColor: color,
        borderRightWidth: width*2,
        borderRightColor: 'transparent',
    },
    bottomRight: {
        width: 0,
        height: 0,
        borderBottomWidth: width,
        borderBottomColor: color,
        borderLeftWidth: width*2,
        borderLeftColor: 'transparent',
    },
    column:{
        width:width*2,
        height:width*6,
        backgroundColor:color,
    },
    row:{
        height:width*2,
        width:width*6,
        backgroundColor:color,
    },
    horizontal:{
        flexDirection:'row'
    },
    margin: {
        marginBottom:- (width/1.4)
    }
})