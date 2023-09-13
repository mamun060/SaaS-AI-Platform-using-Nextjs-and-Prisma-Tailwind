import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'


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

      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
