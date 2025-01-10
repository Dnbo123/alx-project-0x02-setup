import { UserCardProps } from "@/interfaces";

/**
 * The UserCard component displays a user's information in a card format.
 * It renders a brief overview of the user, including a name, email, address, and phone number.
 * It also includes a 'View Profile' and 'Send Message' button.
 *
 * @param {{ name: string, email: string, address: UserAddress, phone: string }} props - The props passed to the component
 * @returns The JSX for the component
 */
export const UserCard: React.FC<UserCardProps> = ({ name, email, address, phone }) => {
    return(
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        {/* The user's name and email are displayed in the top section of the card */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            {/* The first letter of the user's name is displayed in the circle */}
            <span className="text-blue-600 text-xl font-semibold">
              {name.charAt(0)}
            </span>
          </div>
          <div className="ml-4">
            {/* The user's name and email are displayed here */}
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800">
              {email}
            </a>
          </div>
        </div>
  
        {/* The user's address is displayed in the middle section of the card */}
        <div className="space-y-2 text-gray-600">
          <p>
            {/* The address is displayed here */}
            <span className="font-medium">Address:</span>{' '}
            {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
          </p>
          <p>
            {/* The phone number is displayed here */}
            <span className="font-medium">Phone:</span>{' '}
            <a href={`tel:${phone}`} className="hover:text-blue-600">
              {phone}
            </a>
          </p>
       
        </div>
        
        {/* The 'View Profile' and 'Send Message' buttons are displayed in the bottom section of the card */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-3">
            {/* The 'View Profile' button is displayed here */}
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Profile
            </button>
            {/* The 'Send Message' button is displayed here */}
            <button className="text-gray-600 hover:text-gray-800 text-sm">
              Send Message
            </button>
          </div>
        </div>
      </div>
    )
}

export default UserCard;