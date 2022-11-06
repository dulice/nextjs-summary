import React from 'react'
import styles from '../../styles/members.module.css';
import Link from 'next/link';

const Members = ({ users }) => {
  return (
    <div>
        <h3>Members List</h3>
        <div>
          {users.map(user => (
            <div className={styles.member} key={user.id}>
              <Link href={`/members/${user.id}`}>
                <p>{user.name}</p>
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

// static generation
export const getStaticProps = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data
    }
  }
}

export default Members