import React from 'react';

const LazyBlog = React.lazy(() => import('@/components/Blog/Blog'));

export default function PageBlog() {
  return <LazyBlog />;
}
