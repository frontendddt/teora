import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');  
  }
  return ( 
      <section>
           <h4 className="heading_titles purpleColor">Dashboard</h4> 
           
      </section> 
  );
}

// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
 
// import { redirect } from 'next/navigation';

// export default async function DashboardPage() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     redirect('/admin/login'); // redirect if not logged in
//   }

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <p>Welcome, {session.user.email}</p>
//     </div>
//   );
// }


