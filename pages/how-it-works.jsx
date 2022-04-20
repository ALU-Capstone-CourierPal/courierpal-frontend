import MainLayout from "@components/main";
import HowItWorks from "@components/works";
import React, { useState } from "react";

export default function HowItWorksPage() {
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
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
      sendMyTrips={(val) => console.log("")}
      sendFilteredTrips={(val) => console.log("")}
      sendOrders={(val) => console.log("")}
      setPhone={(val) => console.log("")}
    >
      <HowItWorks />
    </MainLayout>
  );
}
