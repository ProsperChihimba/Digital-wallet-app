import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { Feather, Ionicons, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';

import styles from "./styles";
import appdata from "../data";

export type TransactionProps = {
    id: number,
    spendType: string,
    date: string,
    amount: string,
    iconName: string,
    iconColor: string,
    from?: string,
} 

const Body = () => {

    const renderItem = ({ item }: { item: TransactionProps }) => {
        return (
            <View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 25}}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.bodyIcon}>
                            <Feather name={item.iconName} size={15} color="#32a7e2" />
                        </View>
                        <View style={styles.bodySpend}>
                            <Text style={styles.amountText}>{item.amount}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 11, color: '#415352', fontFamily: 'Gilroy-ExtraBold', }}>{item.spendType} </Text>
                                <Text style={styles.dateText}>- {item.date}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center'}}>
                        <View style={{backgroundColor: '#c9efe1', borderRadius: 15, height: 23, width: 23, justifyContent: 'center', alignItems: 'center'}}>
                            <Ionicons name="checkmark-sharp" size={15} color="#22b07d" />
                        </View>
                        
                    </View>
                </View>
                
            </View>
        )
    }

    const myListEmpty = () => {
        return (
            <View style={{ alignItems:"center" }}>
                <Text>No data found</Text>
            </View>
        );
        };

    return (
        <View style={styles.container}>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{backgroundColor: '#BECECF', height: 7, width: '15%', borderRadius: 25, marginTop: 5 }}>
                </View>
            </View>

            <Text style={styles.headText}>Transaction History</Text>

                <FlatList
                    data={appdata.transactions}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    ListEmptyComponent={myListEmpty}
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingBottom: 30,
                    }}
                />


        </View>
    )
}

export default Body;