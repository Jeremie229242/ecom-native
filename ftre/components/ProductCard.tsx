import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ProductCardProps } from '@/constants/types'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'

export default function ProductCard({product}: ProductCardProps) {
    const isLiked = true
  return (
    <View>
      <Link href={`/product/${product._id}`} asChild>
      <TouchableOpacity className='w-[48%] mb-4 bg-white rounded-lg overflow-hidden'>
        <View className='relative h-56 w-full bg-gray-100'>
            <Image source={{uri: product.images[0]}} className='w-full h-full' resizeMode='cover'/>


            {/* favori icon */}
<TouchableOpacity className='absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-sm' onPress={(e)=>{ e.stopPropagation();}}>
<Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={20} color={isLiked ? COLORS.accent : COLORS.primary}/>

</TouchableOpacity>
        </View>

      </TouchableOpacity>
      
      </Link>
    </View>
  )
}