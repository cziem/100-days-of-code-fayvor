// Import components
import Layout from '../components/MyLayout';
import Link from 'next/link';

const postTitles = [
  { title: "Hello Next.js" },
  { title: "Learn awesome Next.js" },
  { title: "Deploy your next apps with zeit" },
  { title: "Learn SSR with Next.js" },
  { title: "What about styling?" },
  { title: "What Next?" },
]

const PostLinks = props => (
  props.map(({ title }, idx) => (
    <li key={idx}>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  ))
)

export default function Index() {
  return (
    <Layout>
      <h1>Featured Blog Posts</h1>

      <ul>
        {PostLinks(postTitles)}
      </ul>
    </Layout>
  );
}