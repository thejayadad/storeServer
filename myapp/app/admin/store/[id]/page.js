import { getStore } from '@/lib/data'
import React from 'react'


const StoreDashboard = async ({params}) => {
    const {id} = params;
    const store = await getStore(id)
    console.log(store)
  return (
    <div>StoreDashboard
        {store.name}
    </div>
  )
}

export default StoreDashboard