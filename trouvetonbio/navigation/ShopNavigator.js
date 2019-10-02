import React from 'react';
import {
  createSwitchNavigator,
} from 'react-navigation';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfilScreen from '../screens/ProfilScreen';

// CATEGORIES SCREEN
import Categories from '../screens/categories/CategoriesScreen';
import SousCategories from '../screens/categories/SousCategoriesScreen';
import ListeProduits from '../screens/categories/ListeProduitsScreen';

// EVENTS SCREEN
import EventsScreen from '../screens/eventtypes/TypesofEventsScreen';
import EventsList from '../screens/eventtypes/EventsScreen';
import EventDetail from '../screens/eventtypes/EventsDetailScreen';
import EventsOverviewScreen from '../screens/eventtypes/EventsOverviewScreen';

// SHOP SCREENS
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import * as authActions from '../store/actions/auth';

// COLORS
import Colors from '../constants/Colors';


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
    Categories: Categories,
    SousCategories: SousCategories,
    ListeProduits: ListeProduits,
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const EventsNavigator = createStackNavigator(
  {
    EventsScreen: EventsScreen,
    EventsList: EventsList,
    EventDetail:EventDetail,
    EventsOverview:EventsOverviewScreen,
    HomeScreen:HomeScreen,
  },
  {
    navigationOptions: {
    },
    defaultNavigationOptions: defaultNavOptions
  }
);




const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const CategoriesNavigator = createStackNavigator(
  {
    Categories: Categories,
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-apps' : 'ios-apps'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);


const ShopNavigator = createDrawerNavigator(
  {
    Categories: CategoriesNavigator,
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);


//create caracteristique navBar
const tabScreenConfig = {
  Accueil: {screen: HomeScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-home" size={28} color="white" activeColor='white'/>
      },
      tabBarColor: Colors.primaryColor
  }
  },
  Events: {screen: EventsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
          return <MaterialIcons name="event-available" size={28} color="white" activeColor='white'/>
      },
      tabBarColor: Colors.accentColor
  }
  },
  Carte: {screen: MapScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
          return <MaterialCommunityIcons name="map-marker-radius" size={28} color="white" activeColor='white'/>
      },
      tabBarColor: Colors.primaryColor
  }
  },
  Profil: {screen: ProfilScreen, navigationOptions: {
      tabBarIcon: (tabInfo) => {
          return <MaterialCommunityIcons name="account" size={28} color="white" activeColor='white'/>
      },
      tabBarColor: Colors.accentColor
  }
  },
  Achat: {screen: ProductsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
          return <Ionicons name="md-cart" size={28} color="white" activeColor='white'/>
      },
      tabBarColor: Colors.primaryColor
  }
  }
};


//create the bar navigation!
const TabNavigator  = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primaryColor,
        shifting: true,
    })
    :createBottomTabNavigator(
        tabScreenConfig, {
    tabBarOptions: {
        height: 150,
        activeTintColor: Colors.primaryColor,
        activeColor: Colors.primaryColor,
        inactiveTintColor: 'white',
        activeBackgroundColor: Colors.accentColor,
        alignContent: 'center',
        style: {
            backgroundColor: Colors.primaryColor,
            alignContent: 'center',
            height: 150,
            paddingTop: 50,
            borderTopWidth: 5,
        },
        tabStyle: {
            height: 150,
        }
    }
});


export default createAppContainer(TabNavigator);
