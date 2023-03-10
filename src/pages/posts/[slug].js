
import styles from '@/styles/slug.module.css'
import {GraphQLClient, gql} from 'graphql-request';
import moment from "moment";


const graph = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/clbogk62k0d0x01uq8rcf36i8/master');

const QUERY = gql`
    query Post($slug: String!){
      post (where: {slug: $slug}) {
        id,
        title,
        slug,
        datePublished,
        
        author{
          id,
          name,
          photo{
            url
          }
        }
        content{
          html
        }
        
      }
    }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graph.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graph.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
     
      <div className={styles.title}>
        <h2>{post.title}</h2>
        <h3>{post.datePublished}</h3>
      </div>

      <div className={styles.contain}>
        
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>

      <div className={styles.about}></div>  
      </div>
    </main>
  )
}