
import { PostProps } from "@/interfaces/index";

export const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return(
       <div>
            <div>
                <h3>{title}</h3>
                <span>User ID: {userId}</span>
            </div>
            <p>{content}</p>
            <div>
                <div>
                    <button>Read More</button>
                    <span>Comments</span>
                    <button>Like</button>
                </div>
            </div>
       </div>
    )
    
}