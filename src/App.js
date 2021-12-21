import React, {useState} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import music_data from './music-data.json';
import  SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

export default function App() {
  const [list,setList]= useState(music_data);
  
  const renderSong = ({item}) => <SongCard song={item}/>
  
  const handleSearch = text => {
    const filteredList= music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLocaleLowerCase() + song.artist.toLocaleLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
      
    });
    setList(filteredList);
  };

  const renderSeperator= () => <View style={styles.seperator}></View>
  return (
   <SafeAreaView style={styles.container}>
     <SearchBar handleSearch={handleSearch}/> 
      <FlatList
        keyExtractor={(item)=> item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
   />
   </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {flex : 1 },
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0'

  }
})