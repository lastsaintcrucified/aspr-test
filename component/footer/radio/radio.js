import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function Radio({able}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.radio}>
        <Switch
        trackColor={{ false: "#767577", true: "#5FE47F" }}
        thumbColor={"white"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        disabled={able}
      />
        <Text>Only Visible to me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    radio:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
});
