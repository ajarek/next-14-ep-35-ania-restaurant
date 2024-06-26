import Hero from '@/components/Hero'
import BestDishes from '@/components/BestDishes'

export default function Home() {
  return (
    <main className=' min-h-screen -mt-20 grid grid-cols-2 max-sm:grid-cols-1 place-items-center px-24 max-sm:px-2  gap-4'>
      <Hero />
      <BestDishes />
    </main>
  )
}
