import { getSingleStore } from '@/lib/data'
import Link from 'next/link';
import React from 'react'


const StoreDashboard = async ({params}) => {
    const {id} = params;
    const store = await getSingleStore(id)
  return (
    <div>
      
    </div>
  )
}

export default StoreDashboard