import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log(params);

  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam.toString());
  console.log(searchParam.get("name"));

  const location = useLocation();
  console.log(location);

  return <p>User {params.id}</p>;
};

export default UserDetail;
