import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from 'components/BlogCard';

const graph = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/clbogk62k0d0x01uq8rcf36i8/master')

const QUERY = gql`
    {
      posts{
        title,
        datePublished,
        slug,
        coverPhoto{
          url
        },
        content{
          html
        }
      
      }
      authors{
        name,
        photo{
          url
        }
      }
    }
`;

export async function getStaticProps(){
  const {posts} = await graph.request(QUERY);
  return{
    props:{
      posts,
    },
    revalidate: 30, 
  };
}

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>airdward</title>
        <meta name="description" content="my blog repository" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        {posts.map((post) => (
          <BlogCard
          title = {post.title}
          author = {post.author}
          coverPhoto = {post.coverPhoto}
          key = {post.id}
          datePublished = {post.datePublished}
          slug = {post.slug}
          />

        ))}
        
      </main>
    </>
  );
}
