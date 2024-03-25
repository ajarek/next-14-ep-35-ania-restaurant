import Image from 'next/image'


const Hero = () => {
  return (
    <div className=''>
      <Image
      src="/images/hero.jpg"
      alt='hero'
      width={500}
      height={500}
      className='rounded-lg'
      />
     
    </div>
  )
}

export default Hero
