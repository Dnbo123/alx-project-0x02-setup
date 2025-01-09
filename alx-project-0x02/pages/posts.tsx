import { NextPage, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Header from "@/components/layout/Header";
import {PostCard} from '../components/common/PostCard';
import { PostProps } from '../interfaces/index';


interface PostsPageProps {
    posts: PostProps[];
}

/**
 * The Posts page displays a list of posts from the API.
 * It is a server-rendered page that fetches data at build time.
 * The page is also revalidated every hour, so if the API data changes,
 * the page will be updated after an hour.
 *
 * @param {{ posts: PostProps[] }} props - The props passed to the page
 * @returns The JSX for the page
 */
const Posts: NextPage<PostsPageProps> = ({ posts}) => {
    
    return(
        <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts</h1>
          
          {/* The grid is a wrapper for the posts list. It is a grid of 2 columns on medium and above, and 3 columns on large and above. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Map over the posts and render a PostCard for each one. */}
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        </main>
      </div>
    );
}


export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts1');
    
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await response.json();

       // Transform the API response to match our interface (body -> content)
        const posts = data.map((post: any) => ({
            id: post.id,
            title: post.title,
            content: post.body, // JSONPlaceholder uses 'body' instead of 'content'
            userId: post.userId,
        }));

        return{
            props: {posts,},

            //Revalidate evry hour
            revalidate: 3600,
        };
    } catch (error) {
        // In case of error, return empty posts array
    // You might want to handle this differently based on your requirements
      return {
        props:  {posts: []},
        revalidate: 60, //Try sooner incase of error
      };

}
};

export default Posts