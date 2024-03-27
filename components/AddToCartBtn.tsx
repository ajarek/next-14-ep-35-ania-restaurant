'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

type Props = {
  id: number
  title: string
  price: number
  description: string
  image: string
}
const AddToCartBtn = ({ id, title, description, image, price }: Props) => {
  const router = useRouter()
  const { addItem } = useShoppingCart()


  const item: any = {
    id: id,
    title: title,
    description: description,
    image: image,
    price: price,
  }
  const handleCartBtn = () => {
    addItem(item)
    router.push('/all')
  }
  return (
    <Button
      className='btn btn-primary'
      onClick={handleCartBtn}
    >
      Add to cart
    </Button>
  )
}

export default AddToCartBtn