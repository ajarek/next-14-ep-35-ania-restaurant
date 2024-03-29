import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
const Contact = async () => {
  return (
    <div className='w-full min-h-screen -mt-20 grid grid-cols-2 max-sm:grid-cols-1 px-12 py-24 '>
      <div className='flex justify-center items-center'>
        <Image
          src='/images/contact.png'
          alt='contact'
          width={380}
          height={380}
        />
      </div>
      <div className='flex justify-center items-center px-4'>
        <form
          action=''
          className='w-full flex flex-col gap-4'
        >
          <Input
            type='text'
            placeholder='Imię i Nazwisko'
            
            required
          />
          <Input
            type='email'
            placeholder='Adres email'
            
            required
          />
          <Input
            type='text'
            placeholder='Numer telefonu (Opcjonalnie)'
            
          />
          <Textarea placeholder="Wiadomość." required />
          <Button className=' '>Wyślij</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact