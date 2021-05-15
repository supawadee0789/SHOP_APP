import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ProductsOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import Colors from "../constant/Colors";


const defaultNavOption = {
 
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    headerTitleStyle: { fontFamily: "open-sans-bold" },
    headerBackTitleStyle: { fontFamily: "open-sans-bold" },

};
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions:{
      drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-cart': 'ios-cart'} size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOption,
  }
);
const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions:{
      drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-create': 'ios-create'} size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOption,
  }
);

const ShopNavigator = createDrawerNavigator({
  Products: ProductsNavigator,
  Orders: OrdersNavigator,
},{
  contentOptions:{
    activeTintColor:Colors.primary
  }

});
export default createAppContainer(ShopNavigator);
