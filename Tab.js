import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from  './screens/dashboard';
import Cart from './screens/cart';
import Rewards from './screens/rewards';
import Scanner from './screens/scanner';
import Detail from './screens/detail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Splash from './screens/splash';

const Tab = createBottomTabNavigator();

function MyTab(){
    return(
        <Tab.Navigator tabBarOptions={{
            showLabel:false,
            style:{backgroundColor:'#00001f', borderColor:'#00001f', borderTopColor:'#00001f'}
          }}>
          <Tab.Screen options={{tabBarIcon:({focused, color, size}) => (<FontIcon name="th-large" size={20} style={{color:focused ? '#D93069' : '#A7A7A7'}} />)}} name="Splash" component={Splash} />
          <Tab.Screen options={{tabBarIcon:({focused, color, size}) => (<FontIcon name="barcode" size={20} style={{color:focused ? '#D93069' : '#A7A7A7'}} />)}} name="Scanner" component={Scanner} />
          <Tab.Screen options={{tabBarIcon:({focused, color, size}) => (<FontIcon name="trophy" size={20} style={{color:focused ? '#D93069' : '#A7A7A7'}} />)}} name="Rewards" component={Rewards} />
          <Tab.Screen options={{tabBarIcon:({focused, color, size}) => (<FontIcon name="shopping-cart" size={20} style={{color:focused ? '#D93069' : '#A7A7A7'}} />)}} name="Cart" component={Cart} />
        </Tab.Navigator>
    )
}

export default MyTab;