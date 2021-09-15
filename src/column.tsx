import React from 'react'
import {View} from 'react-native'
import { styles } from './style'

const Column = ()=>{
    return (
        <View>
            <View style={[styles.center,styles.margin]}>
                <View style={styles.horizontal}>
                    <View style={styles.triangleLeft}/>
                    <View style={styles.row} />
                    <View style={styles.triangleRight}/>
                </View>
            </View>

            <View style={[styles.horizontal,styles.center,styles.margin]}>
                <View>
                    <View style={styles.triangleUp}/>
                    <View style={styles.column} />
                    <View style={styles.topLeft}/>
                </View>
                <View style={[styles.row,{backgroundColor:'transparent'}]}/>
                <View>
                    <View style={styles.triangleUp}/>
                    <View style={styles.column} />
                    <View style={styles.topRight}/>
                </View>
            </View>

            <View style={[styles.center,styles.margin]}>
                <View style={styles.horizontal}>
                    <View style={styles.left}/>
                    <View style={styles.row} />
                    <View style={styles.right}/>
                </View>
            </View>

            <View style={[styles.horizontal,styles.center,styles.margin]}>
                <View>
                    <View style={styles.bottomLeft}/>
                    <View style={styles.column} />
                    <View style={styles.triangleDown}/>
                </View>
                <View style={[styles.row,{backgroundColor:'transparent'}]}/>
                <View>
                    <View style={styles.bottomRight}/>
                    <View style={styles.column} />
                    <View style={styles.triangleDown}/>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.horizontal}>
                    <View style={styles.triangleLeft}/>
                    <View style={styles.row} />
                    <View style={styles.triangleRight}/>
                </View>
            </View>
        </View>
    )
}

export default Column