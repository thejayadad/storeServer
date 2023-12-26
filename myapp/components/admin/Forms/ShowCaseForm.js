
import { SubmitButton } from '@/components/ui/Button/SubmitButton'
import Input from '@/components/ui/Input'
import { createShowcase} from '@/lib/actions'
import React from 'react'

const ShowCaseForm = (id) => {
    console.log("Form " + id)
  return (
    <div>
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
    </div>
  )
}

export default ShowCaseForm