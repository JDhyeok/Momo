import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

import ActionBox from '../components/ActionBox';
import RoutineAddButton from '../components/RoutineAddButton';
import TotalRoutineBox from '../components/TotalRoutineBox';

const RoutineScreen = () => {
  const [state, setState] = useState({
    totalRoutineTime: 30,
    wakeUpTime: '08:20',
    endTime: '08:50',
  });

  const [actionList, setActionList] = useState([
    {id: 1, name: '물 마시기', type: 'living', limit_time: 5, active_day: 127},
    {id: 2, name: '요가', type: 'living', limit_time: 15, active_day: 3},
    {id: 3, name: '일본어 공부', type: 'self improvement', limit_time: 20, active_day: 127},
    {id: 4, name: '명상', type: 'living', limit_time: 5, active_day: 84},
    {id: 5, name: '영양제', type: 'living', limit_time: 1, active_day: 72},
  ]);

  const renderActionList = action => (
    <ActionBox
      id={action.id}
      name={action.name}
      complete={action.complete}
      limit_time={action.limit_time}
      active_day={action.active_day}
    />
  );
  return (
    <View style={styles.contianer}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#F9F9F9', width: '100%'}}>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>마이 루틴</Text>
        </View>

        <TotalRoutineBox state={state} />

        <View style={styles.routineListContainer}>
          <ScrollView width="100%" showsVerticalScrollIndicator={false}>
            {actionList.map(action => renderActionList(action))}
          </ScrollView>
          <RoutineAddButton />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.13,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routineListContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    marginHorizontal: 20,
  },
});

export default RoutineScreen;
