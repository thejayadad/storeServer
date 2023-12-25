import Modal from "@/components/ui/Modal";

export default function Home() {
  return (
   <main>
    homePage
    <div className='flex items-center justify-center w-full'>
    <Modal children={'testing'} opening={'New Store'} description={'Sample Description'} />
    </div>
   </main>
  )
}
