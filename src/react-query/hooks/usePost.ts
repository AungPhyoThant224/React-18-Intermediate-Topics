import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePost = (userId: number | undefined) => {
  const fetchPost = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId,
        },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: userId ? ["user", userId, "posts"] : ["posts"],
    queryFn: fetchPost,
    staleTime: 60 * 1000,
  });
};

export default usePost;
