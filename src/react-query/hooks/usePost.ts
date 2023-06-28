import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePost = (postQuery: PostQuery) => {
  const fetchPost = ({ pageParam }: QueryFunctionContext<QueryKey, any>) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (pageParam - 1) * postQuery.pageSize,
          _limit: postQuery.pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", postQuery],
    queryFn: (data) => fetchPost(data),
    staleTime: 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPage) => {
      console.log(lastPage);
      console.log(allPage);

      return lastPage.length > 0 ? allPage.length + 1 : undefined;
    },
  });
};

export default usePost;
