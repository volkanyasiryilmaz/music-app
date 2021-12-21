import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = ({handleSearch}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Ara..'
                onChangeText={handleSearch}
            />

        </View>
    )
}

export default SearchBar;