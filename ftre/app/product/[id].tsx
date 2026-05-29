import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Product } from '@/constants/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { dummyProducts } from '@/assets/assets';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '@/constants';

export default function ProductDetails () {
    const {id} = useLocalSearchParams();
    const router = useRouter()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const {addToCart, cartItems} = useCart();
    const {toggleWishlist, isInWishlist} = useWishlist();
    const[selectedSize, setSelectedSize] = useState<string | null>
(null)
const [activeImageIndex, setActiveImageIndex] = useState(0)

const fetchProduct = async () => { setProduct(dummyProducts.find((product) =>product?._id === id) as any)
    setLoading(false)
}
useEffect(()=>{
    fetchProduct()
},[])

if (loading) {
    return(
        <SafeAreaView className='flex-1 justify-center items-center'>
            <ActivityIndicator size='large' color={COLORS.primary}/>
        </SafeAreaView>
    )
    
}
if (!product) {
    return(
        <SafeAreaView className='flex-1 justify-center items-center'>
            <Text>Produit non trrouver</Text>
        </SafeAreaView>
    )
    
}


  return (
    <View>
      <Text>ProductDetails </Text>
    </View>
  )
}