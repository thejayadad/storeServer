import { createStore } from '@/lib/actions'
import React from 'react'
import Input from '../Input'
import { SubmitButton } from '../Button/SubmitButton'


const CreateStore = () => {
  return (
    <form
    action={createStore}
    >
    <label className=''>Name</label>
    <Input 
    placeholder={'Name'}
    name='name'
    />
    <div className='flex justify-center'>
    <SubmitButton />
    </div>
    </form>
  )
}

export default CreateStore