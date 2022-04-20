import MainLayout from "@components/main";
import MyTrips from "@components/myTrips";
import React, { useState } from "react";

export default function MyTripsPage() {
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
  const [filteredTrips, setFilteredTrips] = useState(null);
  const [profile, setProfile] = useState(false);
  const [myTrips, setMyTrips] = useState(null);
  const [orders, setOrders] = useState(null);
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
      sendFilteredTrips={(val) => console.log("")}
      sendOrders={(val) => setOrders(val)}
      sendTripsMine={(val) => setMyTrips(val)}
      setPhone={(val) => console.log("")}
    >
      <MyTrips
        showTripModal={() => setShowTrip(true)}
        trips={myTrips}
        orders={orders}
      />
    </MainLayout>
  );
}
