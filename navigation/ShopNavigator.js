import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constant/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      headerTitleStyle:{fontFamily:'open-sans-bold'},
      headerBackTitleStyle:{fontFamily:'open-sans-bold'}
    }
  }
);

export default createAppContainer(ProductsNavigator);
