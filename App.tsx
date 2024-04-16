import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import MainTabs from './src/components/MainTabs';


export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
                      <MainTabs/>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
