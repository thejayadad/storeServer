'use client'
import Heading from '@/components/ui/Heading'
import TrashIcon from '@/components/ui/TrashIcon'
import React from 'react'
import Input from '@/components/ui/Input';
import { SubmitButton } from '@/components/ui/Button/SubmitButton';
import { deleteStore, updateStore } from '@/lib/actions';

const SettingsForm = ({initialData}) => {
  return (
    <section className='px-4 py-8'>
            <div className='flex items-center justify-between'>
        <Heading 
            title={'Settings'}
            description={'Manage Store Settings'}
        />        
       <form
       action={deleteStore}
       >
       <button
       type='submit'
       >
        <input 
        type='hidden'
        name='id'
        value={initialData.id}
        />
            <TrashIcon
            className={'h-8 w-8 hover:text-gray-500 cursor-pointer'}
            />
        </button>
       </form>
    </div>
    <div className='border w-full mt-8 mb-8 border-gray-900'></div>
    <form
        action={updateStore}
        className='space-y8 w-full'
        >
        <div className='gap-8'>
            <label>Name</label>
            <Input
            placeholder={initialData.name}
            name='name'
            
            />
        </div>
            <SubmitButton/>
        </form>
    </section>
  )
}

export default SettingsForm