import React from 'react';
import {View, Stylesheet, ActivityIndicator} from 'react-native';

const toDoListProgressCircle = () => {
    return (
        <View style = {styles.container}>
            <ActivityIndicator size = "large" color={"#0000ff"}/>
        </View>
    )
}

const barStyle = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default toDoListProgressCircle;
