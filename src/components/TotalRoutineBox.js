import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import TimerImage from '../assets/images/Timer.png';

const RoutineAddButton = props => {
  return (
    <View style={styles.container}>
      <View style={styles.totalbox}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <Text
                style={{marginLeft: 20, marginTop: 25, fontSize: 16, fontWeight: '500', color: '#4C4C4C'}}>
                총 루틴 시간
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{marginLeft: 20, fontSize: 40, fontWeight: '900', color: '#3CE3AC'}}>
                +{props.state.totalRoutineTime}
                <Text
                  style={{marginLeft: 20, fontSize: 40, fontWeight: '500', color: '#222222'}}>
                  분
                </Text>
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{marginBottom: 3, marginLeft: 20, fontSize: 12, fontWeight: '700', color: '#808080'}}>
                <Text style={{fontWeight: '900', color: '#595959'}}>
                  {props.state.wakeUpTime.slice(0, 2)}시{' '}
                </Text>
                <Text style={{fontWeight: '900', color: '#595959'}}>
                  {props.state.wakeUpTime.slice(3, 5)}분
                </Text>
                에 일어나서
              </Text>
              <Text
                style={{marginLeft: 20, fontSize: 12, fontWeight: '700', color: '#808080'}}>
                <Text style={{fontWeight: '900', color: '#595959'}}>
                  {props.state.endTime.slice(0, 2)}시{' '}
                </Text>
                <Text style={{fontWeight: '900', color: '#595959'}}>
                  {props.state.endTime.slice(3, 5)}분
                </Text>
                에 마쳐요.
              </Text>
            </View>
          </View>

          <View style={{flex: 1, paddingRight: 25}}>
             <Image source={TimerImage} />
             <View style={{position: 'absolute', bottom: 10, right: 20}}>
              <TouchableOpacity>
                <Text style={{fontWeight: '600', fontSize: 12}}>
                  수정하기 >
                </Text>
              </TouchableOpacity>
             </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#F9F9F9',
  },
  totalbox: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 17,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
});

export default RoutineAddButton;
