import {NextPage} from 'next'
import Header from '@/components/layout/Header'
/**
 * The Home page displays a heading and a paragraph of text.
 * It  fetches data at build time.
 * The page is also revalidated every hour, so if the API data changes,
 * the page will be updated after an hour.
 */
export const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* The Header component is used to render the navigation bar at the top of the page. */}
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* The heading displays the title of the page. */}
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Home Page
        </h1>
      </main>
    </div>
  );
};


export default Home;