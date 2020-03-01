import { AppRegistry } from 'react-native'
import App from './src/App'
import { name } from './app.json'

if (__DEV__) {
  import('./reactroton').then(() => console.log('Reactotron Configured'))
}

console.disableYellowBox = true

AppRegistry.registerComponent(name, () => App)
