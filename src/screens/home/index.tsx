import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    return (
      <View>
          <StatusBar />
         <Text>HomeScreen</Text>
      </View>
    );
}
