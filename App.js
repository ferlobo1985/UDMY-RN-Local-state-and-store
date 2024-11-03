import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// SCREENS
import Home from './screens/home';
import CreateUser from './screens/createUser';
import Posts from './screens/posts';

// import StoreContextProvider from "./store/context";
// REDUX
import { store } from './store/redux/store';
import { Provider } from "react-redux";


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Provider store={store}>
    {/* // <StoreContextProvider> */}
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Create user" component={CreateUser}/>
          <Drawer.Screen name="Posts" component={Posts}/>
        </Drawer.Navigator>
      </NavigationContainer>
    {/* // </StoreContextProvider> */}
    </Provider>
  );
}