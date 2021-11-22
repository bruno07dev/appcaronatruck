import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Activities from '../pages/Activities';
import Local from '../pages/Local';
import Call from '../pages/Call';
import Inbox from '../pages/Inbox';
import PackageReview from '../pages/PackageReview';
import Payment from '../pages/Payment';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />

    <App.Screen name="Profile" component={Profile} />
    <App.Screen name="Activities" component={Activities} />
    <App.Screen name="Local" component={Local} />
    <App.Screen name="Call" component={Call} />
    <App.Screen name="Inbox" component={Inbox} />
    <App.Screen name="PackageReview" component={PackageReview} />
    <App.Screen name="Payment" component={Payment} />
  </App.Navigator>
);

export default AppRoutes;
