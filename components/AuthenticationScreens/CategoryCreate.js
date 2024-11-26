import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const CategoryCreate = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productInputs, setProductInputs] = useState({}); // State to store product inputs for each category
  const navigation = useNavigation();

  // Fetch categories from Firestore
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Categories')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const categoryList = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setCategories(categoryList);
      });

    return unsubscribe;
  }, []);

  // Function to create a new category
  const handleCreateCategory = async () => {
    if (!categoryName) {
      Alert.alert('Error', 'Please enter a category name');
      return;
    }

    try {
      await firestore().collection('Categories').add({
        name: categoryName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      setCategoryName(''); // Clear input after creating category
      Alert.alert('Success', 'Category created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create category');
    }
  };

  // Function to create a product within a category
  const handleCreateProduct = async (categoryId) => {
    const product = productInputs[categoryId]; // Get product for the specific category
    if (!product || !product.name || !product.price) {
      Alert.alert('Error', 'Please enter product name and price');
      return;
    }

    try {
      await firestore()
        .collection('Categories')
        .doc(categoryId)
        .collection('Products')
        .add({
          name: product.name,
          price: parseFloat(product.price),
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      // Clear product inputs for that specific category after product is added
      setProductInputs(prevState => ({
        ...prevState,
        [categoryId]: { name: '', price: '' },
      }));
      Alert.alert('Success', 'Product created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create product');
    }
  };

  // Function to handle category selection
  const handleCategoryPress = (categoryId) => {
    navigation.navigate('CategoryDetails', { categoryId });
  };

  // Handle changes for product inputs
  const handleProductInputChange = (categoryId, field, value) => {
    setProductInputs(prevState => ({
      ...prevState,
      [categoryId]: {
        ...prevState[categoryId],
        [field]: value,
      },
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headingText}>Admin Category Management</Text>

        <TextInput
          style={styles.inputField}
          placeholder='New Category Name'
          value={categoryName}
          onChangeText={setCategoryName}
        />

        <TouchableOpacity style={styles.createCategoryButton} onPress={handleCreateCategory}>
          <Text style={styles.buttonText}>Create Category</Text>
        </TouchableOpacity>

        {/* Display existing categories */}
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.categoryCard}>
              <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress(item.id)}>
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>

              {/* Display product input for each category */}
              <TextInput
                style={styles.inputField}
                placeholder='Product Name'
                value={productInputs[item.id]?.name || ''}
                onChangeText={(text) => handleProductInputChange(item.id, 'name', text)}
              />
              <TextInput
                style={styles.inputField}
                placeholder='Product Price'
                keyboardType="numeric"
                value={productInputs[item.id]?.price || ''}
                onChangeText={(text) => handleProductInputChange(item.id, 'price', text)}
              />
              <TouchableOpacity
                style={styles.addProductButton}
                onPress={() => handleCreateProduct(item.id)}
              >
                <Text style={styles.buttonText}>Add Product</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={styles.categoryList}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryCreate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputField: {
    borderColor: '#ccc',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  createCategoryButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryCard: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addProductButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryList: {
    marginTop: 20,
  },
});
