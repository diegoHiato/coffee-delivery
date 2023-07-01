import { useContext } from 'react'
import { CartContext } from '../Cart/Context'

export const useCart = () => useContext(CartContext)
