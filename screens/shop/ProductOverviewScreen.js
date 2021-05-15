import React from "react";
import { FlatList, Platform} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import ProductItem from "../../component/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import HeaderButton from '../../component/UI/HeaderButton';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onViewDetail={() =>
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            })
          }
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return{
  headerTitle: "All Products",
  headerLeft:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName={Platform.OS=== 'android' ? 'menu' : 'ios-menu' } onPress={()=> navData.navigation.toggleDrawer()}/></HeaderButtons>,
  headerRight:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Cart" iconName={Platform.OS=== 'android' ? 'md-cart' : 'ios-cart' } onPress={()=> navData.navigation.navigate('Cart')}/></HeaderButtons>
}};

export default ProductsOverviewScreen;
