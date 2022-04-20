import MainLayout from '@components/main';
import MyProfile from '@components/profile';
import React, { useState } from 'react';

export default function Profile() {
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
  const [profile, setProfile] = useState(false);
  const [userProf, setUserProf] = useState(null);
  const [getNew, setGetNew] = useState(false);
  return (
    <MainLayout
      tripShow={showTrip}
      closing={() => {
        setShowTrip(false);
        showReg(false);
      }}
      sendTrips={(val) => console.log()}
      showregg={showingReg}
      closeTrip={() => setShowTrip(false)}
      checkLogin={() => setProfile(!profile)}
      sendMyTrips={(val) => console.log('')}
      sendFilteredTrips={(val) => console.log('')}
      sendOrders={(val) => console.log('')}
      setPhone={(val) => setUserProf(val)}
      getNew={getNew}
    >
      <MyProfile profile={userProf} rerender={() => setGetNew(!getNew)} />
    </MainLayout>
  );
}
