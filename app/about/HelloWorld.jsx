import React from 'react';
import Image from 'next/image';

const HelloWorld = () => {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <Image
        src="/images/pfp.png"
        alt="Srihas"
        width={180}
        height={180}
        className="rounded-full"
      />
      <h2 className="text-3xl font-bold mt-4">Hi, I&apos;m Srihas 👋</h2>
      <p className="mt-2 text-gray-600 max-w-xl">
        CS student at UIC, upcoming ACM AI Theory SIG Co-Lead, and aspiring backend developer.
      </p>
    </section>
  );
};

export default HelloWorld;