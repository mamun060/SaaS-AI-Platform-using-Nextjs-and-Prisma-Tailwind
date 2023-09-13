import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function DashboardPage() {
  return (
    <div>
      <p className=' text-2xl text-center py-5'>
        Dashboard Page is protected page
      </p>
      <div className=' text-center'>
      <Button variant="destructive" size="sm"  >
        Hello
      </Button>
      </div>
    </div>
  )
}
