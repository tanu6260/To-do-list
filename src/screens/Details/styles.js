import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constans';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    // marginTop:SIZES.height*0.02, 
    backgroundColor:COLORS.white
 },
  title: {
    fontSize: SIZES.width*0.05,
    color: COLORS.black,
    fontFamily:FONTS.medium, 
    marginTop:SIZES.height*0.02, 
  },
  label: {
    fontSize:SIZES.width*0.042,
    color: COLORS.blue,
    fontFamily:FONTS.medium, 
    
  },
  text: {
    fontSize:SIZES.width*0.04,
    color: COLORS.black,
    fontFamily:FONTS.medium
  },
  container:{
    flexDirection:'row', 
    gap:4,
    marginTop:SIZES.height*0.02
  }

});

export default styles;
