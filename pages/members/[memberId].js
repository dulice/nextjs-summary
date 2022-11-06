import React from 'react'

const Member = ({ user }) => {
  return (
    <div>
        <h3>{user.name}</h3>
        <p>email: {user.email}</p>
        <p>phone number: {user.phone}</p>
        <p>Address: {user.address.suite}, {user.address.street}, {user.address.city}</p>
    </div>
  )
}
export default Member

export const getStaticPaths = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const paths = data.map(user => {
        return {
            params: {memberId: `${user.id}`}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
  const response = await fetch(`http://jsonplaceholder.typicode.com/users/${params.memberId}`);
  const data = await response.json();
  return {
    props: {
      user: data
    }
  }
}
