import HomeComponent from '@components/home';
import MainLayout from '@components/main';

import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
  const [trips, setTrips] = useState(null);
  const [orders, setOrders] = useState(null);
  const [checkProfile, setCheckProfile] = useState(false);

  const countries = [
    'US',
    'Uganda',
    'Tanzania',
    'South Africa',
    'Sierra Leone',
    'Nigeria',
    'UK',
    'Kenya',
    'Ghana',
    'Botswana',
  ];

  const [newTrips, setNewTrips] = useState(null);

  const removeSimilar = () => {
    let doneCountries = [];
    let newList = [];
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      for (let j = 0; j < trips.length; j++) {
        const trip = trips[j];
        if (trip.from === country && doneCountries.indexOf(country) === -1) {
          // add trip to newList
          newList.push(trip);
          doneCountries.push(country);
        }
      }
    }
    setNewTrips(newList);
    doneCountries = [];
  };

  useEffect(() => {
    if (trips) {
      removeSimilar();
    }
  }, [trips]);

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
      checkLogin={() => setCheckProfile(!checkProfile)}
      sendOrders={(val) => setOrders(val)}
      setPhone={(val) => console.log('')}
      sendFilteredTrips={(val) => console.log('')}
      sendTripsMine={(val) => console.log('')}
      sendMyTrips={(val) => console.log('')}
    >
      <HomeComponent
        showtrip={() => setShowTrip(true)}
        showreg={() => showReg(true)}
        trips={newTrips}
        checkProfile={checkProfile}
        orders={orders}
      />
    </MainLayout>
  );
}
