'use client'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
const LogoutBtn = () => {
  const router = useRouter()
  const { clearCart } = useShoppingCart()
  const handleLogout = () => {
    router.push('/api/auth/signout')
    clearCart()
  }
  return (
    <Button
      variant='destructive'
      onClick={handleLogout}
    >
      Logout
    </Button>
  )
}

export default LogoutBtn
