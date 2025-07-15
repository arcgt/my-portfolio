import React from 'react';

const HomePage: React.FC = () => {
  return (
    <section className='mt-36 w-full'>
      <div className='flex bg-[url(assets/home/header.jpg)] w-screen h-120 bg-no-repeat bg-cover items-center justify-center gap-4'></div>
      <div className='flex flex-col h-screen'>about</div>
    </section>
  );
};

export default HomePage;