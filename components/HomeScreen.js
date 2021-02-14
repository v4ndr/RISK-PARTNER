import * as React from 'react'
import {FlatList, View, StyleSheet, Button} from 'react-native'
import {ListItem} from 'react-native-elements'
import NumericInput from 'rn-numeric-input'
import {FAB} from 'react-native-paper'
import prompt from 'react-native-prompt-android';
import {useNavigation} from '@react-navigation/native'
import { Text } from 'react-native'

const renderItem = ({item}) => {
  return(
    <ListItem style={styles.item} bottomDivider>
      <ListItem.Content style={styles.title}>
        <ListItem.Title numberOfLines={1}  style={{flex:2}}>
          {item}
        </ListItem.Title>
        <NumericInput containerStyle={styles.numInput} totalHeight={50} minValue={0}  totalWidth={70} type='up-down' rounded onChange={()=>{}}/>
        <NumericInput containerStyle={styles.numInput} totalHeight={50} minValue={0}  totalWidth={70} type='up-down' rounded onChange={()=>{}}/>
      </ListItem.Content>
    </ListItem>
  )
} 

const HomeScreen = () => {
  const navigation = useNavigation()
  const [players, setPlayers] = React.useState(Array)

  

  const addPlayer = ({}) => {
    prompt(
      'Nouveau joueur',
      'Entrez le nom du joueur à ajouter',
      [
       {text: 'Cancel', style: 'cancel'},
       {text: 'OK', onPress: userName => setPlayers([...players, userName])},
      ],
      {
          cancelable: false,
          placeholder: 'nom du joueur'
      }
    )
  }

  const resetPlayers = () => {
    setPlayers([])
  }

  React.useEffect(()=>{
    navigation.setOptions({headerRight:()=>(
      <Button title='Reset' onPress={resetPlayers}/>
    )})
  })

  return (
    <View style={styles.container}>
      <ListItem style={styles.item} bottomDivider>
        <ListItem.Content style={styles.title}>
          <ListItem.Title style={{flex:2, textAlign:'left'}}>Joueur</ListItem.Title>
          <ListItem.Title style={{flex:1, marginHorizontal:10, textAlign:'center'}}>Armées</ListItem.Title>
          <ListItem.Title style={{flex:1, marginHorizontal:10, textAlign:'center'}}>Pays</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={addPlayer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item:{
    marginTop:10,
    marginHorizontal:10,
  },
  title:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  fab: {
    position: 'absolute',
    alignSelf:'center',
    bottom: 0,
    margin:16,
    backgroundColor:'#f2e96d'
  },
  numInput:{
    flex:1,
    marginHorizontal:10
  }
})

export default HomeScreen