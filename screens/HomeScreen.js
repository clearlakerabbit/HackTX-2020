import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'
import DropDownPicker from 'react-native-dropdown-picker';

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>Welcome, {this.state.displayName}!</Text>
                <Text style={styles.opening}>Please input the subject you would like to study for: </Text>
                <DropDownPicker style={styles.dropdown}
                    items={[
                        {label: 'Economics', value: 'item1'},
                        {label: 'Education', value: 'item2'},
                        {label: 'Engineering', value: 'item1'},
                        {label: 'English', value: 'item2'},
                        {label: 'Ensemble', value: 'item1'},
                        {label: 'Finance', value: 'item2'},
                        {label: 'Fine Arts', value: 'item1'},
                        {label: 'French', value: 'item2'},
                        {label: 'Geography', value: 'item1'},
                        {label: 'German', value: 'item2'},
                    ]}
                    defaultIndex={0}
                    placeholder="subject/class name"
                    dropDownStyle={{ marginTop: 10, backgroundColor: "#98BB9B" }}
                    containerStyle={{ height: 60 }}
                    itemStyle={{ backgroundColor: "#98BB9B", justifyContent: 'flex-start' }}
                    labelStyle={{title: "Section", justifyContent: 'flex-start', textTransform: "uppercase", color: "white"}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.props.navigation.navigate("Schedule")}>
                    <Text style={{ color: "#FFF", fontWeight: "500", textTransform: "uppercase" }}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    greeting: {
        marginTop: 150,
        fontSize: 30,
        fontWeight: "400",
        textAlign: "center"
    },
    opening: {
        marginTop: 15,
        textAlign: "center",
        fontSize: 15,
    },
    dropdown: {
        marginTop: 10,
        backgroundColor: "#55995C", 
        color: "#fff"
    },
    button: {
        marginLeft: 220,
        marginRight: 20,
        marginTop: 250,
        backgroundColor: "#55995C",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    }
});