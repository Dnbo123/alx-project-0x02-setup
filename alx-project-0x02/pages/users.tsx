import {NextPage, GetStaticProps} from 'next',
import Header from '../components/layout/Header',
import UserCard from '../components/common/UserCard';
import {UserProps} from '../interfaces/index';

interface UsersPageProps {
    users: UserProps[];
}

/**
 * The Users page displays a list of users from the API.
 * The page is also revalidated every hour, so if the API data changes,
 * the page will be updated after an hour.
 *
 */
const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
    return (
        <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Users</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Map over the users and render a UserCard for each one. */}
            {users.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
                phone={user.phone}
              />
            ))}
          </div>
        </main>
      </div>
    );
  };

  /**
 * Fetches user data from an external API at build time and returns it as props for the page.
 * This function is executed on the server-side and the data is revalidated every hour.
 *
 */
export const getStaticProps: GetStaticProps = async () => {
    try {
        // Fetch user data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users1');

        // Check if the response is not okay and throw an error
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        // Parse the response JSON
        const users = await response.json();

        // Return the user data as props, and set revalidation interval to 1 hour
        return {
            props: { users },
            revalidate: 3600, // Revalidate every hour
        };
    } catch (error) {
        // In case of an error, return an empty user array and set a shorter revalidation interval
        return {
            props: { users: [] },
            revalidate: 60, // Retry sooner in case of error
        };
    }
};

  export default UsersPage;
    
