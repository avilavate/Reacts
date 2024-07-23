import { useLoaderData } from "react-router-dom";
export function UserDetails() {
  const userData = useLoaderData();
 
  return (
    <div>
      <img className="p-4" src={userData["avatar_url"]} alt="User Avatar" />
      <div className="p-10">{userData["bio"]}</div>
    </div>
  );
}

export default UserDetails;
