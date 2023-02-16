import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LoginButton = () => {
	return(
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={()=>alert('Login')}
			>
				<Text
					style={styles.text}
				>
					로그인
				</Text>
			</TouchableOpacity>
		</View>
	)
}


const styles = StyleSheet.create({
	button: {
		backgroundColor: '#3CE3AC',
		width: 329,
		height: 56,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 14
	}
});

export default LoginButton;