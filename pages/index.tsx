import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Index: NextPage<{ userAgent: string }> = () => {
  return (
    <div>
      <h1>Index</h1>
      <Link href="/page2">Page 2</Link>
    </div>
  );
};

export default Index;
