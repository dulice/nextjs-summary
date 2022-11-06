import React from 'react'
import useSWR from 'swr';

const Dashboard = () => {
  // swr will automatically update data without reloading.
  const { data, error } = useSWR('dashboard', fetchData );
  if(error){
    return {
      notFound: true
    }
  }
  if(!data) return <div>Loading...</div>
  return (
        <div>
            <h3>Dashboard</h3>
            <p>Likes: {data.likes}</p>
            <p>Posts: {data.posts}</p>
            <p>followers: {data.followers}</p>
            <p>followings: {data.followings}</p>
        </div>
  )
}
export default Dashboard

export const fetchData = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};
