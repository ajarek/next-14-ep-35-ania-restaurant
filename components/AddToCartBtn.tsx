'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { BiCartAdd } from 'react-icons/bi'
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
    router.push('/cart')
  }
  return (
    <Button
      className=' rounded-full  flex items-center justify-center'
      size='icon'
      onClick={handleCartBtn}
    >
      <BiCartAdd
        color='white'
        size={30}
      />
    </Button>
  )
}

export default AddToCartBtn
