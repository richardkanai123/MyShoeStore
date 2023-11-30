import AdminNav from './AdminNav'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MenuSquareIcon } from 'lucide-react'
const AdminLayout = ({ children }) => {
    return (
        <div className='w-full min-h-screen flex flex-row justify-start relative'>
            <AdminNav />
            <div className="min-h-full w-full pl-[70px]">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout