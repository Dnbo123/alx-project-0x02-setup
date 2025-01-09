

const PostModal = () => {
    return(
        <div>
            <div>
                <h2>Post Modal</h2>
                <form>
                    <div>
                    <label>Post Title:</label>
                    <input type="text" 
                    id="title" 
                    placeholder="Title"
                    required
                    />
                    </div>
                <div>
                <label>Post Content:</label>
                <textarea 
                id="content"
                placeholder="Content"
               required/>
               </div>
        <div>
            <button type="button">Cancel</button>
            <button type="button">Create Post</button>
        </div>
            </form>
            </div>
        </div>
    )
}

export default PostModal