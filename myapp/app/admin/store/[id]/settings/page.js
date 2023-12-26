import React from 'react'
import getServerUser from '@/lib/getServerUser'
import { getSingleStore } from '@/lib/data';
import { SubmitButton } from '@/components/ui/Button/SubmitButton';
import Heading from '@/components/ui/Heading';
import { deleteStore, updateStore } from '@/lib/actions';
import TrashIcon from '@/components/ui/TrashIcon';
import Input from '@/components/ui/Input';


const SettingsPage = async ({params}) => {
    const {id} = params;
    const store = await getSingleStore(id) 
    const user = await getServerUser()
    console.log("SettingsPage " + store)
    if(!user){
        return <p className='text-center'>Ooopppsss... </p>
    }
    if(!store){
        return <p className='text-center'>Oooopppssss.....</p>
    }
    // const storeData = store.toJSON();
    // console.log("StoreData " + store.name)

  return (
    <section className='px-4 py-8'>


<div className='mx-auto max-w-screen-xl'>
<div className='flex justify-between'>
<Heading 
        title={'Settings'}
        description={'Manage Store Settings'}
    /> 

<form
   action={deleteStore}
   >
    <input 
    type='hidden'
    name='id'
    value={store.id}
    />
   <button
   type='submit'
   >
     <TrashIcon
        className={'h-8 w-8 hover:text-gray-500 cursor-pointer'}
        />
    </button>
   </form>

</div>
<div className='border w-full mt-8 mb-8 border-gray-900'></div>


<form
    action={updateStore}
    className='space-y-8 w-full'
    >
    <div className='gap-8'>
        <label>Name</label>
        <Input
        placeholder={store.name}
        name='name'
        type='text'            
        />
    <input 
    hidden
    type='text'
    name='id'
    value={store.id}
    
    />
    </div>
        <SubmitButton/>
    </form>
</div> 
    </section>
  )
}

export default SettingsPage


{/* <form
action={updateStore}
>
  <input
  type='text'
  name='name'
  placeholder='Name....'
  />
  <input
  type='text'
  name='id'
  hidden
  value={store.id}
  />
  <button type='submit'>Update</button>
</form> */}