import Link from 'next/link'
export default function DashboardLayout({children}:{children:React.ReactNode}){
    return (
        <div>
        <Link href='/'>Home</Link>
        </div>
    );
}
    
  