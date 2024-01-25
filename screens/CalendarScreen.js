import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LogContext from '../contexts/LogContext';

const CalendarScreen = () => {
  const {text} = useContext(LogContext);
  return (
    <View style={styles.block}>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default CalendarScreen;
