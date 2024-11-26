import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params;  // Receive product data from the navigation params
  const [quantity, setQuantity] = useState(1);  // Initial quantity is set to 1

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart or proceed with checkout
    Alert.alert('Added to Cart', `${product.name} x${quantity} added to cart.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productCard}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        <Text style={styles.productDescription}>{product.description || 'No description available'}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  quantityText: {
    color: '#fff',
    fontSize: 18,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
