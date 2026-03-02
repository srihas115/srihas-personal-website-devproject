import React from 'react';
import Image from 'next/image';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Image src="/images/pfp.png" alt="Srihas" width={240} height={240} />
      <p>My name is Srihas and this is my first React component.</p>
    </div>
  );
};

export default HelloWorld;