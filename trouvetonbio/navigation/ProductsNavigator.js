// LIBRAIRIES ET COMPOSANT
import React from 'react';
import { Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

// BARRE DE NAVIGATION SCREEN
import ShopScreen from '../screens/ShopScreen';
import ExploreScreen from '../screens/Explore';
import MapScreen from '../screens/MapScreen';
import ProfilScreen from '../screens/ProfilScreen';

// PAGE CATEGORIES + SOUS CATEGORIES + LISTE DES PRODUITS
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import SubcategoriesScreen from '../screens/categories/SubcategoriesScreen';
import ListeProductsScreen from '../screens/categories/ListeProductsScreen';

// SHOP SCREENS
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

const ProductsNavigator = createStackNavigator({
    //all pages of navigation
    Categories: {
        screen: CategoriesScreen,
    },
    SousCategories: {
        screen: SubcategoriesScreen,
    },
    Products: {
        screen: ListeProductsScreen,
        
    },
    ProductsOverview:
    {
        screen: ProductsOverviewScreen,
    },
    ShopScreen:
    {
        screen: ShopScreen,
        navigationOptions:{
            headerTitle: 'Shop Screen',

        }
    },
    ProductDetail:
    {
        screen: ProductDetailScreen,
    },
    Cart: CartScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
});

// Header menu shop
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
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
    }
  );
  
  const ShopNavigator = createDrawerNavigator(
    {
      Products: ProductsNavigator,
      Orders: OrdersNavigator
    },
    {
      contentOptions: {
        activeTintColor: Colors.primaryColor
      }
    }
  );

//create caracteristique navBar
const tabScreenConfig = {
    Accueil: {screen: ExploreScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-home" size={28} color="white" activeColor='white'/>
        },
        tabBarColor: Colors.primaryColor
    }
    },
    Events: {screen: ProductsNavigator, navigationOptions: {
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
    Achat: {screen: ShopScreen, navigationOptions: {
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