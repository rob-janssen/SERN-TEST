import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import ErrorPage from "./pages/ErrorPage";
import AllTasks from "./pages/AllTasks";

import { loader as dashboardLoader } from "./pages/AllTasks";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 5 minutes
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/all-tasks",
        element: <AllTasks queryClient={queryClient} />,
        loader: dashboardLoader(queryClient),
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
