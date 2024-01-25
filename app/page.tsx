import { Categories } from '@/components/categories'
import { Logo } from '@/components/logo'



export default function Home() {
  return (
    <main className='flex flex-col items-center'  >
      <Logo />
      <Categories />
    </main>
  )
}
