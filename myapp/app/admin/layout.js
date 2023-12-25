import AdminNavbar from '@/components/admin/AdminNavbar'
import CreateStore from '@/components/ui/Forms/CreateStore'
import Modal from '@/components/ui/Modal'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <AdminNavbar />
        {children}
    </div>
  )
}

export default layout