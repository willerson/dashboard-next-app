import SideNav from '@/app/ui/dashboard/sidenav';
import Loading from './(overview)/loading';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children !== null && children !== undefined ? children : <Loading />}
      </div>
    </div>
  );
}