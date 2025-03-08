import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/post");
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
};


const PostsComponent = () => {
    const {data, error, isLoading, fetch} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 60000,
    });
   if (isLoading) return <p>Loading posts.......</p>
   if (error)  return <p>Error: {error.message}</p>
    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};


export default PostsComponent;