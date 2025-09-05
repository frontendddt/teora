// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import pool from '../../../../lib/db';
 
// import bcrypt from 'bcryptjs';

// export default NextAuth({
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email', placeholder: 'admin@gmail.com' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials;

//         const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
//         const user = rows[0];

//         if (!user) {
//           throw new Error('No user found');
//         }

//         const isValid = await bcrypt.compare(password, user.password);
//         if (!isValid) {
//           throw new Error('Invalid password');
//         }

//         return { id: user.id, email: user.email };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/admin/login',
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

 
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db'; // ✅ Correct named import

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];

        if (!user) throw new Error('No user found');

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error('Invalid password');

        return { id: user.id, email: user.email };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/admin/login',
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
