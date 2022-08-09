import * as React from 'react';
import { Link } from 'gatsby';
import Button from '../components/common/buttons/Button';
import Head from '../components/common/Head';

export default function NotFoundPage() {
  return (
    <main className='flex flex-col items-center justify-center px-5 py-32 text-center gap-y-4'>
      <Head title='Page Not Found' />
      <h1 className='font-mono font-black text-9xl text-darkish-blue'>404</h1>
      <h5 className='text-2xl font-semibold'>Page Not Found</h5>
      <p className='text-lg font-light'>
        The page you're looking for does not exist or is not available.
      </p>

      <Link to='/' className='mt-2'>
        <Button
          textColor='text-white'
          color='bg-darkish-blue'
          text='Go Back Home'
        />
      </Link>
    </main>
  );
}
