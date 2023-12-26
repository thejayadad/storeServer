import CreateStore from '@/components/ui/Forms/CreateStore'
import Modal from '@/components/ui/Modal'
import { getStores } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const AdminPage = async () => {
  const stores = await getStores()
  return (
    <div className='max-w-screen-lg mx-auto'>AdminPage
    <Modal
      children={
      <CreateStore
      opening={'New Store'}
      title='New Store'
      description='Name Your New Store'
        />}

    />
      {stores.map((store) => (
        <div key={store.id}>
          <Link href={`/admin/store/${store.id}`}>
            {store.name}
          </Link>
          </div>
      ))}
    </div>
  )
}

export default AdminPage