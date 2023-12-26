import { getSingleStore } from '@/lib/data'
import Link from 'next/link';
import React from 'react'


const StoreDashboard = async ({params}) => {
    const {id} = params;
    const store = await getSingleStore(id)
  return (
    <div>
        {store.name}
        <Link href={`/admin/store/${store.id}/settings`}>Settings</Link>
    </div>
  )
}

export default StoreDashboard