/* eslint-disable react/prop-types */
import Modal from '@components/global/modalLayout/main';
import React, { useState } from 'react';
import {
  Form,
  FormInput,
  Submit,
  Error,
  InputGroup,
  HorizontalRule,
  FormArea,
} from './index.styles';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';
import axios from 'util/axios';
import messageBanner from '@components/global/messageBanner';
import { SpinnerSmall } from '@components/global/spinner';

export default function AddTripModal(props) {
  const [fromLocationError, setFromLocationError] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const onChangeFromLocation = (e) => {
    if (e.target.value == '') {
      setFromLocationError(true);
      setFromLocation(e.target.value);
    } else {
      toLocation;
      setFromLocationError(false);
      setFromLocation(e.target.value);
    }
  };

  const [toLocationError, setToLocationError] = useState(false);
  const [toLocation, setToLocation] = useState('Kigali');
  const OnchangeToLocation = (e) => {
    if (e.target.value == '') {
      setToLocationError(true);
      setToLocation(e.target.value);
    } else {
      setToLocationError(false);
      setToLocation(e.target.value);
    }
  };

  // luggage capacity
  const [luggageCapacityError, setLuggageCapacityError] = useState(false);
  const [capacityLuggage, setCapacityLuggage] = useState('');
  const onChangeCapacity = (e) => {
    if (e.target.value == '') {
      setLuggageCapacityError(true);
      setCapacityLuggage(e.target.value);
    } else {
      setLuggageCapacityError(false);
      setCapacityLuggage(e.target.value);
    }
  };

  // price per capacity
  const [priceCapacityError, setpriceCapacityError] = useState(false);
  const [capacityprice, setCapacityprice] = useState('');
  const onChangePrice = (e) => {
    if (e.target.value == '') {
      setpriceCapacityError(true);
      setCapacityprice(e.target.value);
    } else {
      setpriceCapacityError(false);
      setCapacityprice(e.target.value);
    }
  };

  // order description
  const [trip, setTripDescription] = useState('');
  const [tripError, setTripDescriptionError] = useState(false);
  const onChangeTripDescription = (e) => {
    if (e.target.value == '') {
      setTripDescriptionError(true);
      setTripDescription(e.target.value);
    } else {
      setTripDescriptionError(false);
      setTripDescription(e.target.value);
    }
  };

  // from date
  const [startDate, setStartDate] = useState(null);

  // to date
  const [endDate, setEndDate] = useState(null);

  const [userId, setUserId] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
  }, []);

  const createTrip = async (obj) => {
    setLoading(true);
    try {
      const res = await axios.post(`/trips/create`, obj);
      console.log(res);
      props.rerender();
      setLoading(false);
      messageBanner({
        status: 'success',
        message: 'Trip created successfully',
      });
      props.close();
    } catch (error) {
      setLoading(false);
      messageBanner({
        status: 'error',
        message: 'Trip creation failed',
      });
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const tripObject = {
      from: fromLocation,
      to: 'Kigali',
      availableLuggageSpace: capacityLuggage,
      pricePerLuggageSpace: capacityprice,
      travelDate: startDate,
      arrivalDate: endDate,
      userId: userId,
      rating: Math.floor(Math.random() * 5) + 1,
      description: trip,
      phone: props.phone,
    };
    setCapacityprice('');
    setCapacityLuggage('');
    setFromLocation('');
    setToLocation('');
    setStartDate('');
    setEndDate('');
    setTripDescription('');

    // traveller ID
    createTrip(tripObject);
  };

  return (
    <Modal
      close={props.close}
      fromTrip
      title={'Add your trip details to start earning'}
    >
      {loading ? (
        <SpinnerSmall />
      ) : (
        <Form>
          <InputGroup>
            <select
              placeholder="Select from city"
              name="countries"
              id="country"
              value={fromLocation}
              onChange={onChangeFromLocation}
            >
              <option value="" disabled selected>
                Select a city
              </option>
              <option value="South Africa">South Africa</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Kenya">Kenya</option>
              <option value="Ghana">Ghana</option>
              <option value="Botswana">Botswana</option>
              <option value="Uganda">Uganda</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            {fromLocationError && <Error>From location required</Error>}
          </InputGroup>
          <InputGroup>
            <DatePicker
              className="date"
              showMonthDropdown
              useShortMonthInDropdown
              closeOnScroll={true}
              selected={startDate}
              placeholderText="Select travel date"
              startDate={startDate}
              minDate={new Date()}
              onChange={(date) => setStartDate(date)}
            />
          </InputGroup>

          <InputGroup>
            <FormInput
              type="text"
              name="toLocation"
              value={toLocation}
              defaultValue="Kigali"
              onChange={OnchangeToLocation}
              maxLength="25"
              readOnly
            />

            {toLocationError && <Error>To location required</Error>}
          </InputGroup>
          <InputGroup>
            <DatePicker
              className="date"
              showMonthDropdown
              useShortMonthInDropdown
              closeOnScroll={true}
              selected={endDate}
              placeholderText="Select arrival date"
              minDate={startDate}
              onChange={(date) => setEndDate(date)}
            />
          </InputGroup>

          <InputGroup>
            <FormInput
              type="number"
              name="luggage"
              value={capacityLuggage}
              defaultValue="0"
              onChange={onChangeCapacity}
              placeholder="Available luggage space/kg"
            />

            {luggageCapacityError && <Error>Luggage capacity required</Error>}
          </InputGroup>

          <InputGroup>
            <FormInput
              type="number"
              name="price"
              defaultValue="0"
              value={capacityprice}
              onChange={onChangePrice}
              placeholder="Price  per Luggage space ($)"
            />

            {priceCapacityError && <Error>Price per Luggage space</Error>}
          </InputGroup>

          <InputGroup>
            <FormArea
              name="description"
              value={trip}
              onChange={onChangeTripDescription}
              placeholder="Description"
              required
            />

            {tripError && <Error>Trip description required</Error>}
          </InputGroup>

          <Submit
            onClick={onSubmit}
            disabled={
              fromLocation.length === 0 ||
              capacityprice == 0 ||
              capacityLuggage == 0 ||
              !startDate ||
              !endDate
            }
            type="submit"
          >
            Add trip
          </Submit>
          <HorizontalRule></HorizontalRule>
        </Form>
      )}
    </Modal>
  );
}
