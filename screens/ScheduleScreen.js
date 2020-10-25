import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import * as firebase from 'firebase'

export default class ScheduleScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{justifyContent: "center"}}>Select the times you are available to study. When you are done, click NEXT.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    }
});