import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function Home({ navigation }) {

    const [data, setData] = useState({})
    const [selectedPessoa, setSelectedPessoa] = useState("")

    useEffect( () => {

        fetch("http://localhost:5000/pessoas").then(
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

    return (
        <View style={styles.container}>
            {
                (typeof data.pessoas === 'undefined'  ) ? (

                    <Text>Carregando....</Text>

                ):(

                    <Picker
                        selectedValue={selectedPessoa}
                        onValueChange={(itemValue, itemIndex) => setSelectedPessoa(itemValue)}>
                            
                            {data.pessoas.map( (pessoa, index) => (

                                <Picker.Item key={pessoa.id} label={pessoa.nome} value={pessoa.id} />

                            ))}
                    </Picker>

                ) 
    
            }

            <Button title="Continuar" onPress={ () => navigation.navigate("Tarefas", { pessoaId: selectedPessoa }) }/>
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