import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constans';

const AddTaskInput = ({ taskText, onTaskTextChange, onAddTask }) => (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task..."
        value={taskText}
        onChangeText={onTaskTextChange}
      
      />
      <TouchableOpacity style={styles.addButton} onPress={onAddTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
    container: { flexDirection: 'row', },
    input: {
        width: SIZES.width * 0.75,
        borderWidth: 1,
        borderColor: COLORS.gray10,
        paddingHorizontal: SIZES.width * 0.03,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        fontSize: SIZES.width * 0.04,
        color: COLORS.black,
        fontFamily: FONTS.medium


    },
    addButton: {
        backgroundColor: COLORS.green,
        marginLeft: SIZES.width * 0.03,
        borderRadius: 5,
        padding:SIZES.width*0.033

    },
    addButtonText: {
        color: 'white', fontSize: SIZES.width * 0.04,
        color: COLORS.white,
        fontFamily: FONTS.medium, 
        textAlignVertical:'center', 
        textAlign:'center'
    },
});

export default AddTaskInput;
