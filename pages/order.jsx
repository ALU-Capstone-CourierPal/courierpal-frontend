import MainLayout from "@components/main";
import React, { useState, useEffect } from "react";
import OrderSteps from "@components/order";

export default function Order() {
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
  const [trips, setTrips] = useState(null);
  const [phone, setPhone] = useState("");
  return (
    <MainLayout
      tripShow={showTrip}
      closing={() => {
        setShowTrip(false);
        showReg(false);
      }}
      showregg={showingReg}
      closeTrip={() => setShowTrip(false)}
      sendTrips={(val) => setTrips(val)}
      setPhone={(val) => setPhone(val.phone)}
    >
      <OrderSteps phone={phone} />
    </MainLayout>
  );
}
