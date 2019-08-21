// Import components
import Layout from '../components/MyLayout';
import Link from 'next/link';

const postTitles = [
  { title: "Hello Next.js", id: "hello-nextjs" },
  { title: "Learn awesome Next.js", id: "learn-awesome-nextjs" },
  { title: "Deploy your next apps with zeit", id: "deploy-your-next-apps-with-zeit" },
  { title: "Learn SSR with Next.js", id: "learn-ssr-with-nextjs" },
  { title: "What about styling?", id: "what-about-styling?" },
  { title: "What Next?", id: "what-next?" },
]

const PostLinks = props => (
  props.map(({ title, id }, idx) => (
    <li key={idx}>
      <Link href={`p/[id]`} as={`/p/${id}`} title={title}>
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