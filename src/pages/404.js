import * as React from 'react';
import { Link } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

// markup
function NotFoundPage() {
  return (
    <main className='px-5 flex flex-col justify-center items-center text-center py-32 gap-y-4'>
      <h1 className='text-9xl font-black text-darkish-blue font-mono'>404</h1>
      <h5 className='text-2xl font-semibold'>Page Not Found</h5>
      <p className='text-lg font-light'>
        The page your'e looking for does not exist or is not available.
      </p>
    </main>
  );
}

export default NotFoundPage;
