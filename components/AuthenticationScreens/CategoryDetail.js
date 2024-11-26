

import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useRoute, useNavigation } from '@react-navigation/native';

const CategoryDetails = () => {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId } = route.params; // Getting the category ID from the route parameters

  // Fetch category and its products from Firestore
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);

        // Fetch category details
        const categoryDoc = await firestore()
          .collection('Categories')
          .doc(categoryId)
          .get();
        
        if (categoryDoc.exists) {
          setCategory(categoryDoc.data());
        } else {
          Alert.alert('Error', 'Category not found');
        }

        // Fetch products for the selected category
        const productsSnapshot = await firestore()
          .collection('Categories')
          .doc(categoryId)
          .collection('Products')
          .get();

        const productsList = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching category or products:', error);
        Alert.alert('Error', 'Failed to fetch category details');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryId]);

  // Navigate back to the previous screen
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        {category && (
          <Text style={styles.categoryName}>{category.name}</Text>
        )}
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.productList}
        ListEmptyComponent={<Text style={styles.emptyText}>No products available</Text>} // Handle empty state
      />
    </SafeAreaView>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginRight: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  productList: {
    marginTop: 20,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
  },
});
