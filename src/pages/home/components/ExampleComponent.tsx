import React from 'react';

export interface ExampleComponentProps {
  exampleString: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  const { exampleString } = props;

  return (
    <section className='min-h-dvh-nav bg-slate-50 p-4 text-slate-950 md:p-8'>
      <div className='mx-auto flex flex-col gap-4'>
        <h1>{exampleString}</h1>
      </div>
    </section>
  );
};

export default ExampleComponent;