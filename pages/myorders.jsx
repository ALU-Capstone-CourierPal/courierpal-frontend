import MainLayout from '@components/main';
import MyOrders from '@components/myOrders';
import React, { useState } from 'react';

export default function MyOrdersPage() {
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
  const [filteredTrips, setFilteredTrips] = useState(null);
  const [profile, setProfile] = useState(false);
  const [userProf, setUserProf] = useState(null);
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
      sendMyTrips={(val) => setFilteredTrips(val)}
      sendFilteredTrips={(val) => console.log('')}
      sendOrders={(val) => console.log('')}
      setPhone={(val) => setUserProf(val)}
      sendTripsMine={(val) => console.log('')}
    >
      <MyOrders orders={filteredTrips} profile={userProf} />
    </MainLayout>
  );
}
