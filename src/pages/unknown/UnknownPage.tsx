import React from 'react';

const KnownPage: React.FC = () => {
  return (
    <section className='flex flex-row w-screen items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <h1>404</h1>
        <p className='text-4xl'>Oops... Page not found.</p>
      </div>
    </section>
  );
};

export default KnownPage;