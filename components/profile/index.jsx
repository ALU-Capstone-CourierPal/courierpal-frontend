/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ProfileContainer,
  Inner,
  Title,
  PicArea,
  Pic,
  UpdateBtn,
  Form,
  InputGroup,
  Label,
  Input,
  SubmitBtn,
} from './index.styles';
import Avatar from 'react-avatar';
import { SpinnerSmall } from '@components/global/spinner';
import messageBanner from '@components/global/messageBanner';
import { useDropzone } from 'react-dropzone';
import axios from 'util/axios';

export default function MyProfile({ profile, rerender }) {
  const [files, setFiles] = useState([]);
  const showError = () => {
    messageBanner({
      status: 'error',
      message: 'Maximum file size is 1MB',
    });
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg',
    onDrop: (acceptedFiles) => {
      const renamedAcceptedFiles = acceptedFiles.slice(0, 1).map(
        (file) =>
          new File([file], `${file.name}_${+new Date()}`, {
            type: file.type,
          }),
      );
      const newFile = renamedAcceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );

      // check if file is > 1MB
      if (newFile[0].size > 1000000) {
        showError();
      } else {
        setFiles(newFile);
      }
    },
  });

  const [userProf, setUserProf] = useState(null);
  useEffect(() => {
    profile && setUserProf(profile);
    if (profile) {
      setFname(profile.firstname);
      setLname(profile.lastname);
      setPhone(profile.phone);
      setEmail(profile.email);
    }
  }, [profile]);

  const [fname, setFname] = useState(userProf?.fname);
  const [lname, setLname] = useState(userProf?.lname);
  const [phone, setPhone] = useState(userProf?.phone);
  const [email, setEmail] = useState(userProf?.email);

  const [updating, setUpdating] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    if (e.target.name === 'fname') {
      setFname(e.target.value);
    } else if (e.target.name === 'lname') {
      setLname(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  const updateProfile = async (e) => {
    rerender();
    e.preventDefault();
    setUpdating(true);
    try {
      const data = {
        firstname: fname,
        lastname: lname,
        phone: phone,
        email: email,
      };
      const res = axios.patch(`/customers/${profile._id}`, data);
      console.log(res);

      setUpdating(false);
      messageBanner({
        status: 'success',
        message: 'Profile updated successfully',
      });
    } catch (error) {
      setUpdating(false);
      messageBanner({
        status: 'error',
        message: 'Something went wrong',
      });
    }
  };

  const uploadPic = async () => {
    setLoading(true);
    try {
      // form data
      const formData = new FormData();
      formData.append('file', files[0]);
      const res = await axios.post(`/customers/profile/upload`, formData);
      console.log(res);
      setLoading(false);
      messageBanner({
        status: 'success',
        message: 'Profile picture uploaded successfully',
      });
    } catch (error) {
      setLoading(false);
      messageBanner({
        status: 'error',
        message: 'Error when uploading. ',
      });
      console.log(error);
    }
  };
  return (
    <ProfileContainer>
      {userProf ? (
        <Inner>
          <Title>My Profile</Title>
          <PicArea>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {userProf?.profilePicture?.url || files.length > 0 ? (
                <Pic
                  src={
                    files.length === 0
                      ? userProf?.profilePicture?.url
                      : files[0].preview
                  }
                >
                  <div className="overlay">
                    <span>Upload new image</span>
                  </div>
                </Pic>
              ) : (
                <Avatar
                  size="180"
                  color="#39aea9"
                  round={true}
                  name={`${userProf?.firstname} ${userProf?.lastname}`}
                />
              )}
            </div>

            <UpdateBtn
              onClick={() => uploadPic()}
              disabled={files.length === 0}
            >
              {loading ? 'Uploading...' : 'Upload profile picture'}
            </UpdateBtn>
          </PicArea>
          <Form>
            <InputGroup>
              <Label>First name</Label>
              <Input
                type="text"
                value={fname}
                name="fname"
                onChange={onChange}
              />
            </InputGroup>
            <InputGroup>
              <Label>Last name</Label>
              <Input
                type="text"
                value={lname}
                name="lname"
                onChange={onChange}
              />
            </InputGroup>
            <InputGroup>
              <Label>Phone</Label>
              <Input
                type="text"
                value={phone}
                name="phone"
                onChange={onChange}
              />
            </InputGroup>
            <InputGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                onChange={onChange}
              />
            </InputGroup>
            <SubmitBtn
              type="submit"
              disabled={
                userProf?.firstname === fname &&
                userProf?.lastname === lname &&
                userProf?.phone === phone &&
                userProf?.email === email
              }
              onClick={updateProfile}
            >
              {updating ? 'Updating...' : 'Save'}
            </SubmitBtn>
          </Form>
        </Inner>
      ) : (
        <SpinnerSmall />
      )}
    </ProfileContainer>
  );
}
