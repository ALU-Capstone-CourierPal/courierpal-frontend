import React, { useState } from "react";

import MainLayout from "@components/main";

import OneTrip from "@components/oneTrip";

export default function MyTrip() {
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
  const [filteredTrips, setFilteredTrips] = useState(null);
  const [profile, setProfile] = useState(false);

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
      sendFilteredTrips={(val) => setFilteredTrips(val)}
      setPhone={(val) => console.log("")}
    >
      <OneTrip />
    </MainLayout>
  );
}
