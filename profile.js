import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/users/profile')
      .then(res => setProfile(res.data))
      .catch(err => console.error("Error fetching profile:", err));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
