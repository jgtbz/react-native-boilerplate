import AsyncStorage from '@react-native-community/async-storage'
import Reactotron from 'reactotron-react-native'

console.log = Reactotron.log

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect()
