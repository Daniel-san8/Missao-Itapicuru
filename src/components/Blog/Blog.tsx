import { IPosts } from '@/models/posts.interface';

export default async function Blog() {
  const reqBlog = await fetch(
    `${process.env.API}/${process.env.BLOG_ID}/posts?key=${process.env.SECRET_KEY}`,
    {
      cache: 'no-store',
    }
  );
  const json: IPosts = await reqBlog.json();

  return (
    <main className='pt-[72px] text-wrap'>
      {json.items.slice(0, 3).map((post, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      ))}
    </main>
  );
}
