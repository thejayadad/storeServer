import React from 'react'
import Showcase from './components/Showcase'
import { getSingleStore } from '@/lib/data'
import Modal from '@/components/ui/Modal';
import ShowCaseForm from '@/components/admin/Forms/ShowCaseForm';
import { FiPlusCircle } from 'react-icons/fi';
import Heading from '@/components/ui/Heading';
import { createShowcase } from '@/lib/actions';
import Input from '@/components/ui/Input';
import { SubmitButton } from '@/components/ui/Button/SubmitButton';

const ShowcasePage = async({params}) => {
    const {id} = params;
    const store = await getSingleStore(id) 
    const newId = store._id
    console.log("ShowCasePage " + newId)
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl flex flex-1 '>
            <div className='flex w-full justify-between items-center p-4'>
        <Heading
        title={'ShowCase'}
        description={'Manage ShowCases Below'}
        />
        <div className='flex items-center'>
        <Modal
        opening={<div className='flex-col items-center flex'><FiPlusCircle className='h-8 w-8' /><span>Add ShowCase</span> </div>}
        title={'New Showcase'}
        description={'Start Building Your ShowCase Below'}
        className='rounded-full hover:bg-gray-700 flex items-center gap-2 p-2 hover:text-white'>
                    <form
        action={createShowcase}
        className='flex flex-col gap-4'
        >
            <Input
            placeholder='Name'
            name='name'
            />
            <Input
            placeholder='Label'
            name='label'
            />
            <Input
            placeholder='ImageUrl'
            name='imageUrl'
            />
            <input
            type='text'
            hidden
            name='storeId'
            defaultValue={id}
            />
            <SubmitButton
            />
        </form>
        </Modal>
     
        </div>
        </div>

        </div>
    </section>
  )
}

export default ShowcasePage