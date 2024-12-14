// --- components/TaskItem.js ---
import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constans';


const TaskItem = ({ task, onDelete, onPress }) => (
    <TouchableOpacity 
      style={[styles.container, task.completed && styles.completedBackground]} 
      onPress={onPress} 
    >
        <View style={{ flex: 1 }}>
            <Text style={[styles.text, task.completed && styles.completedText]}>
                {task.text}
            </Text>
        </View>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: SIZES.height * 0.02,
        padding: SIZES.width * 0.02,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 3,
        width: SIZES.width * 0.92,
        alignSelf: 'center',
        alignItems: 'center'
    },
    completedBackground: {
        backgroundColor: COLORS.green,
    },
    text: { 
        fontSize: SIZES.width * 0.035, 
        fontFamily: FONTS.medium, 
        color: COLORS.black, 
        textAlignVertical: 'center' 
    },
    completedText: {
        color: COLORS.white,
    },
    deleteButton: {
        backgroundColor: COLORS.red,
        padding: SIZES.width * 0.02,
        borderRadius: 5,
    },
    deleteText: { 
        fontSize: SIZES.width * 0.035, 
        fontFamily: FONTS.medium, 
        color: COLORS.white 
    },
});

export default TaskItem;