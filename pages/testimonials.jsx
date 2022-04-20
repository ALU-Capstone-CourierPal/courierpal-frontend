import React, { useState } from "react";
import MainLayout from "@components/main";
import Testimonials from "@components/testimonials";

export default function AboutPage() {
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
      <Testimonials />
    </MainLayout>
  );
}
