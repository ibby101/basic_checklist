import React, {useState} from 'react';
import {CheckBox, Text, StyleSheet, View} from 'react-native';

const buttonPress = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={boxStyle.container}>
            <View style={boxStyle.CheckBoxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={boxStyle.CheckBox}
                />
                <Text style={boxStyle.label}>Item 1</Text>
             </View>
             
            </View>
    )
}

const boxStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default buttonPress;