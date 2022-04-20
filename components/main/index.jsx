import Footer from '@components/footer';
import Header from '@components/navigation';
import React, { useState, useEffect } from 'react';
import { Main, Body } from './index.styles';
import PropTypes from 'prop-types';
import axios from 'util/axios';
import messageBanner from '@components/global/messageBanner';
import RegisterModal from '@components/home/modals/register';
import LoginModal from '@components/home/modals/login';
import AddTripModal from '@components/home/modals/addtrip';

import { getCookie } from 'cookies-next';

import Head from 'next/head';

export default function MainLayout({
  children,
  showregg,
  closing,
  tripShow,
  closeTrip,
  sendTrips,
  checkLogin,
  sendOrders,
  sendFilteredTrips,
  sendMyTrips,
  sendTripsMine,
  setPhone,
  getNew,
}) {
  const [showReg, setShowReg] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showTrip, setShowTrip] = useState(false);

  const [loading, setLoading] = useState(false);

  const [userId, setUserId] = useState(null);

  const [profile, setProfile] = useState(null);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    localStorage.getItem('userId')
      ? setUserId(localStorage.getItem('userId'))
      : setUserId('notloggedin');
  }, [check]);

  // get user useEffect
  useEffect(() => {
    userId && userId !== 'notloggedin' && getProfile(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, getNew]);

  const getProfile = async (val, first = false) => {
    try {
      const res = await axios.get(`/customers/${val}`);
      setLoading(false);
      setProfile(res.data.data);
      checkLogin();
      first &&
        messageBanner({
          status: 'success',
          message: `Login success, welcome back ${res.data.data.firstname}`,
        });
      // window.location.reload();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [showAddTrip, setShowAddTrip] = useState(false);
  const [signInFirst, setSignInFirst] = useState(false);
  useEffect(() => {
    showTrip && setShowAddTrip(true);
  }, [showTrip]);

  const [afterReg, setAfterReg] = useState(false);

  useEffect(() => {
    profile && setPhone(profile);
  }, [profile]);

  const [isLogged, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(!!getCookie('token'));
  }, []);

  // get logged in user
  const getUser = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/user`);
      localStorage.setItem('userId', res.data.data.userId);
      localStorage.setItem('userType', res.data.data.userType);
      setCheck(true);
      setAllTrips(null);
      getProfile(res.data.data.userId, true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // orders
  const [allOrders, setAllOrders] = useState(null);
  const getOrders = async () => {
    try {
      const res = await axios.get('/orders/all');
      sendOrders(res.data.data);

      if (userId) {
        const myTrips = res.data.data.filter(
          (item) => item.customer === localStorage.getItem('userId'),
        );
        sendMyTrips(myTrips);
      } else {
        sendMyTrips(res.data.data);
      }

      setAllOrders(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !allOrders && getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const [checkItems, setCheckItems] = useState(false);

  // trips
  const [allTrips, setAllTrips] = useState(null);
  const getTrips = async () => {
    try {
      const res = await axios.get('/trips');
      // filter items with traveler[0] equal to localStorage.getItem("userId")
      if (userId) {
        const filtered = res.data.data.filter(
          (item) => item.traveler[0] !== userId,
        );
        sendFilteredTrips(filtered);
        console.log('filtered ', filtered);
      } else {
        sendFilteredTrips(res.data.data);
      }

      if (userId) {
        const myTrips = res.data.data.filter(
          (item) => item.traveler[0] === userId,
        );
        sendTripsMine(myTrips);
      } else {
        sendTripsMine(res.data.data);
      }

      sendTrips(res.data.data);
      setAllTrips(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (!allTrips || checkItems) && getTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkItems, userId]);

  return (
    <>
      <Head>
        <title>CourierPal</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dpnbddror/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1637870721/brand_assets/LOGO_Karent_tx5hn5.png"
        />
        <meta
          name="description"
          content="Connecting shoppers and travelers who assist each other
            in getting items across the world"
        />

        <meta
          name="og:description"
          content="Connecting shoppers and travelers who assist each other
            in getting items across the world"
        />
        <meta property="og:title" content="CourierPal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://courierpal.vercel.app/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpnbddror/image/upload/v1647870021/courier-pal/Rectangle_14_pe8p1f.png"
        />
      </Head>
      <Main>
        <Header
          profile={profile}
          showLogin={() => setShowLogin(true)}
          showReg={() => setShowReg(true)}
          showTrip={() => setShowTrip(true)}
        />
        <Body>{children}</Body>
        <Footer />
        {(showReg || showregg) && (
          <RegisterModal
            showLogin={() => setAfterReg(true)}
            close={() => {
              closing();
              setSignInFirst(false);
              setAfterReg(false);
              setShowReg(false);
            }}
            showlogin={() => {
              closing();
              setShowReg(false);
              setAfterReg(true);
              setAfterReg(true);
              setSignInFirst(false);
            }}
          />
        )}
        {(showLogin || afterReg) && (
          <LoginModal
            showreg={() => {
              setShowReg(true);
              setAfterReg(false);
              setSignInFirst(true);
              setShowLogin(false);
            }}
            getUserInfo={() => getUser()}
            close={() => {
              setSignInFirst(false);
              setAfterReg(false);
              setShowLogin(false);
            }}
          />
        )}
        {(tripShow || showTrip) && (
          <AddTripModal
            rerender={() => setCheckItems(!checkItems)}
            close={() => {
              closeTrip();
              setShowTrip(false);
            }}
            phone={profile?.phone}
          />
        )}
      </Main>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
  showReg: PropTypes.func,
  showLogin: PropTypes.func,
  profile: PropTypes.object,
};
