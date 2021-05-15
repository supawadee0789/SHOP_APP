import React from "react";
import { FlatList,Text } from "react-native";
import {useSelector} from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../component/UI/HeaderButton';
import OrderItem from '../../component/shop/OrderItem';

const OrdersScreen = (props) => {
    const orders = useSelector(state=>state.orders.orders);
    return<FlatList
    data={orders} keyExtractor={item=>item.id} renderItem={itemData=>
        <OrderItem amount={itemData.item.totalAmount} date={itemData.item.readableDate} items={itemData.item.items}/>
    }
    />
};

OrdersScreen.navigationOptions = navData =>{
    return{
        headerTitle:'Your Orders',
        headerLeft:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName={Platform.OS=== 'android' ? 'menu' : 'ios-menu' } onPress={()=> navData.navigation.toggleDrawer()}/></HeaderButtons>,
        headerRight:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Cart" iconName={Platform.OS=== 'android' ? 'md-cart' : 'ios-cart' } onPress={()=> navData.navigation.navigate('Cart')}/></HeaderButtons>
    };
    
};

export default OrdersScreen;
