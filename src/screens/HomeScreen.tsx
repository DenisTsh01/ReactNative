import {Button, FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/userAction';
// import { getUsersBooks, loginAction } from '../store/userActions';
// import { RootState } from '../store/store';
// import Book from '../components/Book';

const HomeScreen = () => {
  // const {userBooks} = useSelector((state: RootState) => state.userData)
  const isSignedIn = useSelector(state => state.userData.isSignedIn)

  const dispatch = useDispatch()

  // console.log(JSON.stringify( userBooks, null, 2));

  useEffect(() => { 
  
  },[])

  return (
   
    // <View style={styles.cont}>
    //   <FlatList 
    //     data={userBooks}
    //     renderItem={renderItem}
    //     keyExtractor={(_, index) => index.toString()}
    //   />
    // </View>

    <>

    <View style={styles.cont}>
       <Text style={{color:'red'}}>Signed in status: {isSignedIn ? 'yes' : 'no'} </Text>
    
      {isSignedIn ? (
        <View>
          
          <Text style={styles.text}>Your Name: {userName} </Text>
          <Button title="change" onPress={() => dispatch(changeNameAction("test"))} />
        </View>
      ) : (
        <View>
          
          <Text style={styles.text}>Please Sign In First </Text>
          <Button title="log in" onPress={()=>{dispatch(loginAction())}} />
        </View>
       )}
    </View>
    

    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});