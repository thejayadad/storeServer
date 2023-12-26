import { getSingleStore } from '@/lib/data';
import Link from 'next/link';
import React from 'react'
import { StoreProvider } from '@/lib/storeContext';

const layout = async ({children, params}) => {
  const {id} = params;
  const store = await getSingleStore(id)
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-center gap-6'>
        <Link href={`/admin/store/${store.id}`}>{store.name}</Link>
        <Link href={`/admin/store/${store.id}/settings`}>Settings</Link>
        <Link href={`/admin/store/${store.id}/showcase`}>Showcase</Link>
        </div>
        <StoreProvider storeId={store.id}>
        {children}
        </StoreProvider>
    </div>
  )
}

export default layout