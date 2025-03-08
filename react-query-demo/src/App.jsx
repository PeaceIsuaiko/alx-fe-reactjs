import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient()

function App() {
  
  

  return (
  < QueryClientProvider client={queryClient} >
    <h1>Advanced Data Handling with React Query</h1>
   < PostsComponent />
  </QueryClientProvider>
  )
}

export default App
