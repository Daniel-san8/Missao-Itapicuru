import { IPosts } from '@/models/posts.interface';

export default async function Blog() {
  const reqBlog = await fetch(
    `${process.env.API}/${process.env.BLOG_ID}/posts?key=${process.env.SECRET_KEY}`
  );
  const json: IPosts = await reqBlog.json();
  console.log(json);
  return (
    <main className='pt-[72px] text-wrap'>
      {JSON.stringify(json.items[0].url)}
    </main>
  );
}
