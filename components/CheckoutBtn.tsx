'use client'
import { useShoppingCart } from 'use-shopping-cart'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from './ui/button'

export default function CheckoutButton() {
  const { cartCount = 0, cartDetails, clearCart } = useShoppingCart()

  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string
      )

      if (!stripe) throw new Error('Stripe failed to initialize.')

      const checkoutResponse = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartDetails }),
      })

      const { sessionId } = await checkoutResponse.json()
      const stripeError = await stripe.redirectToCheckout({ sessionId })

      if (stripeError) {
        console.error(stripeError)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button
      onClick={() => {
        cartCount > 0 && redirectToCheckout()
        clearCart()
      }}
      disabled={cartCount === 0}
      className=''
    >
      Checkout
    </Button>
  )
}
