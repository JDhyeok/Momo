import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import AddButton from '../assets/images/add.png';

const RoutineAddButton = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => alert('Routine Add Button')}>
        <Image source={AddButton}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default RoutineAddButton;
