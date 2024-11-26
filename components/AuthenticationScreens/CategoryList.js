import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Fetch all categories from Firestore
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const snapshot = await firestore().collection('Categories').get();
        if (snapshot.empty) {
          Alert.alert('No categories available');
          return;
        }

        const categoryList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCategories(categoryList);
      } catch (error) {
        console.error('Error fetching categories:', error);
        Alert.alert('Error', 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryPress = (categoryId) => {
    // Navigate to CategoryDetails screen
    navigation.navigate('CategoryDetails', { categoryId });
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading categories...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(item.id)}
          >
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={styles.categoryList}
      />
    </SafeAreaView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  categoryList: {
    marginTop: 20,
  },
  categoryCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
