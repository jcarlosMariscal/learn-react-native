import React from 'react';
import {StatusBar, View} from 'react-native';
// import CalculatorScreen from './presentation/screens/CalculatorScreen';
import {styles} from './config/theme/app-theme';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './presentation/routes/BottomTapsNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.background}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        {/* <CalculatorScreen /> */}
        <BottomTabsNavigator />
      </View>
    </NavigationContainer>
  );
}

export default App;
