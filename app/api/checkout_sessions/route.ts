import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

import stripe from '@/config/stripe'

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers()
  const { cartDetails } = await req.json()
  const cartDetailsArray: any = Object.values(cartDetails) as any[]

  const lineItems = cartDetailsArray.map((item: any) => {
    return {
      price_data: {
        currency: 'pln',
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }
  })

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${headersList.get('origin')}/thank-you`,
      cancel_url: `${headersList.get('origin')}/`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Error creating checkout session' })
  }
}
