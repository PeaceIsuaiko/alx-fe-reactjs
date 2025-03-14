import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
};


function PostsComponent()  {
    const {data, isError, error, isLoading,  refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 60000,
        cacheTime: 300000,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
   if (isLoading) return <p>Loading posts.......</p>
   if (isError)  return <p>Error: {error.message}</p>
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