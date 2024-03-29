import Image from 'next/image'


const Hero = () => {
  return (
    <>
      <Image
      src="/images/hero.jpg"
      alt='hero'
      width={400}
      height={400}
      className='rounded-lg mt-20'
      />
     
    </>
  )
}

export default Hero
