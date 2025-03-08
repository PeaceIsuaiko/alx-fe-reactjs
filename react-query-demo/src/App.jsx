import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



function App() {
  const QueryClient = new QueryClient()
  

  return (
  < QueryClientProvider client={QueryClient} >
    <h1>Advanced Data Handling with React Query</h1>
   < PostsComponent />
  </QueryClientProvider>
  )
}

export default App
