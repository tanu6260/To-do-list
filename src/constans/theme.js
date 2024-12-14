import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#363795',
    primary2: '#005C97',
    lightblue: '#F1F5FF',
    yellow: 'rgb(253, 203,15)',
    blue: 'blue',
    lightblue2: '#ECF8FF',
    // light

    lightyellow: 'rgba(252, 248, 237, 1)',
    lightgray1: '#F5F5F5',
    lightgray2: '#D9D9D9',
    // lightblue: '#DBDFFF',
    lightblue1: '#DBDFFF',
    pink: 'rgba(201, 44, 81, 1)',
    green: 'rgba(52, 161, 34, 1)',
    red: 'rgba(229, 55, 55, 1)',

    white: '#FFFFFF',

    // black
    black: '#000000',
    gray: '#F5F5F5',
    gray1: 'rgba(101, 98, 98, 1)',
    // gray10: 'rgba(89, 84, 84, 1)',
    gray10: '#D9D9D9',
    gray20: 'rgba(217, 217, 217, 1)',


    // lightGray
    lightGray: '#C1C1C1',
    lightGray1: '#DDDDDD',
    lightGray10: 'rgba(242, 242, 242, 1)',
    lightGray31: 'rgba(196, 196, 196, 0.31)',



    green10: 'rgba(30, 125, 40, 1)',
    green1: 'rgba(71, 183, 43, 1)',


};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding1: 15,
    margin: 20,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    //Font family
    black: 'Poppins-Black-900',
    bold: 'Poppins-Bold-700',
    semiBold: 'Poppins-SemiBold-600',
    medium: 'Poppins-Medium-500',
    regular: 'Poppins-Regular-400',
    light: 'Poppins-Light-300',
    thin: 'Poppins-Thin-250',

    fourHundred: { fontFamily: 'Poppins-Regular-400' },
    fiveHundred: { fontFamily: 'Poppins-Medium-500' },
    sixHundred: { fontFamily: 'Poppins-SemiBold-600' },
    sevenHundred: { fontFamily: 'Poppins-Bold-700' },
    eightHundred: { fontFamily: 'Poppins-ExtraBold-800' },
    nineHundred: { fontFamily: 'Poppins-Black-900' },
};


const appTheme = { COLORS, FONTS, SIZES };

export default appTheme;