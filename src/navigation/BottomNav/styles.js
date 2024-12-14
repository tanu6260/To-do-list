import { Dimensions, StyleSheet } from 'react-native';
import { FONTS } from '../../constans';
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    bottomTabIcon: {
        marginBottom: height * -0.014,
        fontFamily:FONTS.medium
    },

});
export default styles;
