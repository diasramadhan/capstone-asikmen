import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword, signOut, updateProfile
} from 'firebase/auth';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill, RiImageAddFill } from 'react-icons/ri';
import { AiFillIdcard } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, storage } from '../../utils/firebaseConfig';
import useInput from '../../hooks/useInput';
import './RegisterInput.scss';

function RegisterInput() {
  const [name, nameChange] = useInput('');
  const [email, emailChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [passwordConfirm, passwordConfirmChange] = useInput('');
  const [picture, setPicture] = React.useState(null);

  const navigate = useNavigate();

  const pictureChange = (e) => setPicture(e.target.files[0]);

  const registerFormHandle = async (e) => {
    e.preventDefault();

    try {
      if (password === passwordConfirm) {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        if (picture) {
          const storageRef = ref(storage, `${+new Date()}-${name}`);
          await uploadBytesResumable(storageRef, picture);
          const downloadURL = await getDownloadURL(storageRef);

          await updateProfile(user, {
            displayName: name,
            photoURL: downloadURL,
          });
        } else {
          await updateProfile(user, {
            displayName: name,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/capstone-asikmen.appspot.com/o/blank-picture.png?alt=media&token=e8b78f0a-151c-4960-8c43-98ff1dfc39e7',
          });
        }

        await signOut(auth);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Akun berhasil dibuat',
          confirmButtonColor: '#00adb5',
        });
        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Konfirmasi password tidak sama',
          confirmButtonColor: '#00adb5',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: err.code,
        confirmButtonColor: '#00adb5',
      });
    }
  };

  return (
    <form onSubmit={registerFormHandle}>
      <label className="d-block text-primary fw-bold" htmlFor="name">
        <div className="d-flex align-items-center">
          <AiFillIdcard className="me-2 fs-2" />
          Nama
        </div>
        <input
          className="form-control border-0 rounded-0 border-bottom border-2 shadow-none p-0 pt-1 border-primary"
          type="text"
          id="name"
          onChange={nameChange}
          required
        />
      </label>
      <label className="d-block mt-3 text-primary fw-bold" htmlFor="email">
        <div className="d-flex align-items-center">
          <MdEmail className="me-2 fs-2" />
          Email
        </div>
        <input
          className="form-control border-0 rounded-0 border-bottom border-2 shadow-none p-0 pt-1 border-primary"
          type="email"
          id="email"
          onChange={emailChange}
          required
        />
      </label>
      <label className="d-block mt-3 text-primary fw-bold" htmlFor="password">
        <div className="d-flex align-items-center">
          <RiLockPasswordFill className="me-2 fs-2" />
          Password
        </div>
        <input
          className="form-control border-0 rounded-0 border-bottom border-2 shadow-none p-0 pt-1 border-primary"
          type="password"
          id="password"
          onChange={passwordChange}
          required
        />
      </label>
      <label className="d-block mt-3 text-primary fw-bold" htmlFor="passwordConfirm">
        <div className="d-flex align-items-center">
          <RiLockPasswordFill className="me-2 fs-2" />
          Konfirmasi Password
        </div>
        <input
          className="form-control border-0 rounded-0 border-bottom border-2 shadow-none p-0 pt-1 border-primary"
          type="password"
          id="passwordConfirm"
          onChange={passwordConfirmChange}
          required
        />
      </label>
      <label className="d-flex mt-3 text-primary fw-bold register-input__input-picture" htmlFor="picture">
        {picture && <img src={URL.createObjectURL(picture)} className="me-2 border border-2" height="200" alt="profile" />}
        <div className="d-flex align-items-center pe-auto">
          <RiImageAddFill className="me-2 fs-2" />
          Pilih Foto (Square 1:1)
        </div>
        <input
          className="d-none"
          type="file"
          id="picture"
          onChange={pictureChange}
          accept="image/png, image/jpeg, image/jpg"
        />
      </label>
      <button className="btn btn-primary p-2 text-white border-0 mt-3 w-100 login-input__btn-login" type="submit">Buat akun baru</button>
    </form>
  );
}

export default RegisterInput;
