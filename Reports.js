import React from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground, Button } from 'react-native';
import { BarChart } from "react-native-chart-kit";


export default function App() {

    const SwitchButton = () => {
        return <View >

            <
            /View>
    }

    return (

        <
        View style = { styleSheet.MainContainer } >
        <
        ImageBackground source = { require('../MidTerm/assets/bg2.jpeg') }
        resizeMode = 'cover'
        style = {
            { width: '100%', height: '100%', flex: 1, opacity: '0.9', justifyContent: 'center' } } >
        <
        View style = { styleSheet.Button } >
        <
        Button title = "Daily"
        color = "#f194ff" /
        >
        <
        Button title = "Weekly"
        color = "#f194ff" /
        >
        <
        Button title = "Monthly"
        color = "#f194ff" /
        >
        <
        Button title = "Range"
        color = "#f194ff" /
        >
        <
        /View> <
        Text style = {
            { fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'center' } } > Namaz Reports < /Text> <
        BarChart data = {
            {
                labels: ['Fajr', 'Zahar', 'Asar', 'Maghrib', 'Isha'],
                datasets: [{ data: [10, 20, 50, 40, 20] }],
            }
        }
        width = { Dimensions.get('window').width }
        height = { 230 }

        chartConfig = {
            {
                backgroundColor: 'black',

                color: (opacity = 225) => '#ECEFF1',
                style: {
                    borderRadius: 12,
                    padding: 10
                },
            }
        }
        />


        <
        /ImageBackground> <
        /View>
    );
}

const styleSheet = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});