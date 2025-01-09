import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from "@/components/layout/Header";
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces/index';


/**
 * A page that displays a list of posts from the JSONPlaceholder API.
 * 
 * The page fetches the posts on mount and displays them in a grid.
 * If there's an error, it displays an error message.
 * If the data is still loading, it displays a loading message.
 * 
 * @returns The component.
 */
export const Posts: NextPage = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fetches the posts from the API and transforms the response to match our interface.
     * If there's an error, it sets the error state.
     * If the data is fetched successfully, it sets the posts and loading state.
     */
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch the posts from the API
                const response = await fetch('https://jsonplaceholder.typicode.com/posts1');
                // Throw an error if the response is not OK
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                // Transform the API response to match our interface (body -> content)
                const data = await response.json();
                const transformedPosts = data.map((post: any) => ({
                    ...post,
                    content: post.body, // JSONPlaceholder uses 'body' instead of 'content'
                }));
                setPosts(transformedPosts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occured');
            } finally {
                // Set the loading state to false when the data is fetched or an error occurs
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);
    
    
    return(
        <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts</h1>
          
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="text-gray-600">Loading posts...</div>
            </div>
          )}
  
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
              {error}
            </div>
          )}
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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


export default Posts