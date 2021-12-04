import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function Tarefas({ route, navigation }) {
    const { pessoaId } = route.params

    const [data, setData] = useState({})

    useEffect( () => {
        console.log(pessoaId)
        fetch('http://localhost:5000/tarefas/' + JSON.stringify(pessoaId)).then(
            response => response.json()
        ).then(
            dataResponse => {
                setData(dataResponse)
                console.log(dataResponse)
            }
        ).catch((response) => {
            console.log(response)
        });

    }, [])

    const _renderItem = ({ item }) => (
        <Item title={item.titulo} />
    ) 

    return (
        <View style={styles.container}>
            <Text>Tarefas</Text>

            <FlatList 
                data = {data.tarefas}
                renderItem = {_renderItem}
                keyExtractor = {item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });