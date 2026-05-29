import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ProductCardProps } from '@/constants/types'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'
import { useWishlist } from '@/context/WishlistContext'

export default function ProductCard({product}: ProductCardProps) {

    const isLiked = false
    const {toggleWishlist,isInWishlist} = useWishlist()
    
  return (
    <View className='w-[48%] mb-4'>00
      <Link href={`/product/${product._id}`} asChild>
      <TouchableOpacity className='bg-white rounded-lg overflow-hidden'>
        <View className='relative h-56 w-full bg-gray-100'>
            <Image source={{uri: product.images?.[0] ?? ''}} className='w-full h-full' resizeMode='cover'/>


            {/* favori icon */}
<TouchableOpacity className='absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-sm' onPress={(e)=>{ e.stopPropagation(); toggleWishlist(product)}}>
<Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={20} color={isLiked ? COLORS.accent : COLORS.primary}/>

</TouchableOpacity>
 {/* est specialr */}
{product.isFeatured && (
        <View className='absolute top-2 left-2 bg-black px-2 py-1 rounded'>
            <Text className='text-white text-xs font-bold uppercase'>Special</Text>
        </View>
      )}
        </View>
        {/* info produit */}

        <View className='p-3'>
            <View className='flex-row items-center mb-1'>
                <Ionicons name='star' size={14} color='#FFD700'/>
                <Text className='text-secondary text-xs ml-1'>4.6</Text>
            </View>
            <Text className='text-primary font-medium text-sm mb-1' numberOfLines={1}>{product.name}</Text>
            <View className='flex-row items-center'>
                <Text className='text-primary font-bold text-base'>XOF {product.price.toFixed(2)}</Text>
            </View>

        </View>
      </TouchableOpacity>
      
      </Link>
    </View>
  )
}