import React from 'react'
import Showcase from './components/Showcase'
import { getSingleStore } from '@/lib/data'

const ShowcasePage = ({params}) => {
    const {id} = params
    const store = getSingleStore(id)
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl flex flex-1 '>
            <Showcase />
        </div>
    </section>
  )
}

export default ShowcasePage