import React from 'react';

const Sidebar = ({ user }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h2>Sidebar</h2>
      <p>User: {user.name}</p>
    </div>
  );
};

const Profile = ({ user }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const Dashboard = () => {
  const user = { name: 'Alice', email: 'alice@example.com' };

  return (
    <div>
      <Sidebar user={user} />
      <Profile user={user} />
    </div>
  );
};

export default Dashboard;
