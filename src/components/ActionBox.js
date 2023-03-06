import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import actionImg from '../assets/images/action_img.png';
import settingImg from '../assets/images/settingButton.png';

import DayList from './DayList';

const Action = props => {
  return (
    <View style={styles.actionBoxContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={actionImg} style={{marginLeft: 14, marginRight: 15}} />
        <View>
          <Text style={{fontWeight: 700, fontSize: 16, color: '#4C4C4C'}}>
            {props.name}
            <Text style={{fontWeight: 600, fontSize: 16, color: '#808080'}}>
              {' '}
              +{props.limit_time}분
            </Text>
          </Text>
          <View style={{flexDirection: 'row', paddingTop: 5}}>
            <DayList id={props.id} active_day={props.active_day} />
          </View>
        </View>
      </View>
      <View style={{height: '100%', paddingTop: 15, paddingRight: 10}}>
        <TouchableOpacity
          onPress={() => alert('Routine Edit Button')}
          activeOpacity={1}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Image source={settingImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionBoxContainer: {
    width: '100%',
    height: 92,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
});

export default Action;
