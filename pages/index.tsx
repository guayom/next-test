import Link from 'next/link';
import { NextPage } from 'next';

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <div>
      <h1>Index</h1>
      <pre>{userAgent}</pre>
      <Link href="/page-2">
          <a title="About Page">Page 2</a>
      </Link>
    </div>
  );
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Index;