import Image from 'next/image'

const Serwis = async () => {
  return (
    <div className='w-full min-h-screen -mt-20 grid grid-cols-2 max-sm:grid-cols-1 px-12 max-sm:px-2 place  items-center'>
      <div className='flex justify-center items-center mt-20'>
        <Image
          src='/images/serwis.jpg'
          alt='contact'
          width={380}
          height={380}
          className='rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-center items-start  gap-4 mt-20 max-sm:mt-1 max-sm:py-4'>
        <p>
          Szukasz pysznego jedzenia bez wychodzenia z domu? Restauracja "Obiadki
          od Ani" oferuje bezpłatną dostawę posiłków do Twoich drzwi! To idealne
          rozwiązanie dla zabieganych osób, które chcą zjeść smacznie i zdrowo
          bez tracenia czasu na gotowanie.Dostawa jest bezpłatna dla wszystkich
          zamówień powyżej 100,00 PLN. Zamówienie możesz złożyć online lub
          telefonicznie. Restauracja oferuje również możliwość płatności online,
          co dodatkowo ułatwia cały proces.
        </p>
        <ul className='list-none '>
          Dodatkowe informacje:
          <li>Czas dostawy:do 30 minut</li>
          <li>Minimalna kwota zamówienia: 100,00 PLN</li>
          <li>Możliwość płatności online</li>
          <li>Strona internetowa: https://obiadki/od/ani</li>
          <li>Numer telefonu:573 219 230</li>
          <li>Szybka dostawa</li>
        </ul>
      </div>
    </div>
  )
}

export default Serwis
