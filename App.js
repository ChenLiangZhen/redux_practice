import {StatusBar} from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {decreaseValue, increaseValue, selectNumbers, setValue} from "./src/dataSlice";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/store";
import {useEffect, useState} from "react";

export default function App() {

    return (

        <Provider store={store}>
            <Content/>
        </Provider>
    );
}

function Content() {

    const numbers = useSelector(selectNumbers)
    const dispatch = useDispatch()

    const [dataDisplay, setDataDisplay] = useState(numbers.displayValue)

    useEffect(()=>{
        setDataDisplay(numbers.displayValue)
    }, [numbers])

    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}>


            <View style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Pressable
                    style={{
                        borderRadius: 6,
                        borderColor: "black",
                        borderWidth: 2,
                        backgroundColor: "white",
                        height: 48,
                        width: 48,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={()=>{
                        console.log("Hello")
                        dispatch(increaseValue())
                    }}>
                    <Text style={{
                        fontSize: 32,
                    }}>
                        +
                    </Text>
                </Pressable>
            </View>

            <Text style={{
                fontSize: 20,
            }}>
                {dataDisplay}
            </Text>

            <View style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Pressable
                    style={{
                        borderRadius: 6,
                        borderColor: "black",
                        borderWidth: 2,
                        backgroundColor: "white",
                        height: 48,
                        width: 48,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={()=>{
                        console.log("Hello minus")
                        dispatch(decreaseValue())
                    }}>
                    <Text style={{
                        fontSize: 32,
                    }}>
                        -
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
