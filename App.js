import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
        <stack.Screen name='RregisterScreen' component={RregisterScreen} options={{headerShown: false}}/>
        <stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
 
const Home = () =>{
  return(<View className = 'flex-1 justify-center items-center'>
  <ScrollView>
  <Image source={require('../react_task/assets/images/leo.png')} 
          style={{width: 200, height: 200}} />
          <Image source={require('../react_task/assets/images/leo1.png')} 
          style={{width: 200, height: 200}} />
          <Image source={require('../react_task/assets/images/leo2.png')} 
          style={{width: 200, height: 200}} />
          <Image source={require('../react_task/assets/images/leo3.png')} 
          style={{width: 200, height: 200}} />
          <Image source={require('../react_task/assets/images/leo4.png')} 
          style={{width: 200, height: 200}} />
          <Image source={require('../react_task/assets/images/leo5.png')} 
          style={{width: 200, height: 200}} />
          <Image source={require('../react_task/assets/images/leo6.png')} 
          style={{width: 200, height: 200}} />
  </ScrollView>
  <StatusBar style="auto" />
</View>)
  
}

const LoginScreen = (props) =>{
  return(
    <View className="flex-1 bg-white" style={{backgroundColor:'#877dfa'}}>
      <SafeAreaView className="flex">
      <View  className="flex-row justify-center " style={{width:400,height:200,paddingTop:50}}>
          <Image source={require('../react_task/assets/images/leo.png')} 
          style={{width: 200, height: 200}} />
        </View>
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50 , height:300}} 
        className="flex-1 bg-white px-8 pt-8">
        <View className = 'from space-y-2'>
          <Text className ='text-grey-700 ml-4'>Email Address</Text>
          <TextInput
             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="enter your email"
          />
           <Text className ='text-grey-700 ml-4'>Password</Text>
          <TextInput
             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="enter your password"
          />
           <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
               onPress={()=>props.navigation.navigate('Home')}
              className="py-3 bg-yellow-400 rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Login
                </Text>
             </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../react_task/assets/icons/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../react_task/assets/icons/apple.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../react_task/assets/icons/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=>props.navigation.navigate('RregisterScreen')}   >
                  <Text className="font-semibold text-yellow-500"> Sign Up</Text>
              </TouchableOpacity>
          </View>
        


</View>
    </View>
    
  )
  
}


const RregisterScreen = (propsRregister) =>{
  return(
    <View className="flex-1 bg-white" style={{backgroundColor:'#877dfa'}}>
      <SafeAreaView className="flex">
      <View  className="flex-row justify-center " style={{width:400,height:150,paddingTop:50}}>
          <Image source={require('../react_task/assets/images/leo.png')} 
          style={{width: 200, height: 200}} />
        </View>
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50 , height:300}} 
        className="flex-1 bg-white px-8 pt-8">
        <View className = 'from space-y-2'>
        <Text className ='text-grey-700 ml-4'>name</Text>
          <TextInput
             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="enter your name"
          />
          <Text className ='text-grey-700 ml-4'>Email Address</Text>
          <TextInput
             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="enter your email"
          />
           <Text className ='text-grey-700 ml-4'>Password</Text>
          <TextInput
             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="enter your password"
          />
           <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
               onPress={()=>propsRregister.navigation.navigate('Home')}
              className="py-3 bg-yellow-400 rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Craet account
                </Text>
             </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../react_task/assets/icons/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../react_task/assets/icons/apple.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../react_task/assets/icons/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  already have an account?
              </Text>
              <TouchableOpacity onPress={()=>propsRregister.navigation.navigate('LoginScreen')}  >
                  <Text className="font-semibold text-yellow-500"> Sign Up</Text>
              </TouchableOpacity>
          </View>
        


</View>
    </View>
    
  )
  
}

