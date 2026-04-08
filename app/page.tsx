import { redirect } from 'next/navigation';

// This page only renders when the app is running locally (npm run dev)
// When deployed on Vercel, the middleware handles the redirect
export default function RootPage() {
  redirect('/es');
}
