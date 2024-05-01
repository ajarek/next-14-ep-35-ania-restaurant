import Image from 'next/image'

const Contact = async () => {
  return (
    <div className='w-full min-h-screen -mt-20 grid grid-cols-2 max-sm:grid-cols-1 px-12 max-sm:px-2  place  items-center'>
      <div className='flex justify-center items-center mt-20'>
        <Image
          src='/images/about.jpg'
          alt='contact'
          width={380}
          height={380}
        />
      </div>
      <div className='flex flex-col justify-center items-start  gap-4 mt-20 max-sm:mt-1 max-sm:py-4'>
        <p>
          Specjalizujemy się w tradycyjnych polskich potrawach, przygotowywanych
          ze świeżych, sezonowych składników. Nasze menu jest pełne sycących dań
          głównych i pysznych deserów. Oferujemy dowóz do domu lub biura w
          Kołobrzegu i okolicach. Zamówienia można składać online lub
          telefonicznie. Gwarantujemy szybką dostawę i pyszne jedzenie, które
          zachwyci całą rodzinę. Zamów i przekonaj się, że &#34 Obiadki od Ani &#34 to
          najlepszy wybór dla miłośników domowego jedzenia!
        </p>
        <ul className='list-none '>
          Oto kilka powodów, dla których warto wybrać &#34 Obiadki od Ani &#34:
          <li>Pyszne, domowe jedzenie</li>
          <li>Świeże, sezonowe składniki</li>
          <li>Tradycyjne polskie potrawy</li>
          <li>Szeroki wybór dań</li>
          <li>Szybka dostawa</li>
          <li>Możliwość zamówienia online lub telefonicznie</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
