import React, { ReactNode } from 'react';

type SectionTypes = {
  title?: string;
  children: ReactNode;
};

const Section = ({ children, title = 'my subHeading' }: SectionTypes) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Section;
