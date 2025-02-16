import React, { Suspense } from 'react';

const LazyBlog = React.lazy(() => import('@/components/Blog/Blog'));

export default function PageBlog() {
  return <Suspense fallback={<div className='loader mx-auto my-96'></div>}>
    <LazyBlog />
  </Suspense>;
}
