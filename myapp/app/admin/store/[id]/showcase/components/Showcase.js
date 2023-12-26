'use client'
import Heading from '@/components/ui/Heading'
import Link from 'next/link'
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { useParams, useRouter } from 'next/navigation'
import { getSingleStore } from '@/lib/data'
import Modal from '@/components/ui/Modal'
import ShowCaseForm from '@/components/admin/Forms/ShowCaseForm'

const Showcase = ({params}) => {
    // children, title, description, opening 

  return (
    <section className='px-4 py-8 w-full'>
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
        className='rounded-full hover:bg-gray-700 flex items-center gap-2 p-2 hover:text-white'
        children={<ShowCaseForm />}
        />
        </div>
        </div>
    </section>
  )
}

export default Showcase