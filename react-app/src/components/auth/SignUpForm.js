import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [img_url, setImg_url] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory(); // so that we can redirect after the image upload is successful

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, img_url));
      if (data) {
        setErrors(data)
      }
    }

    // image uploading to AWS here

    const formData = new User();
    formData.append("img_url", img_url);
    
    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);

    const res = await fetch('/api/images', {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        await res.json();
        setImageLoading(false);
        history.push("/images");
    }
    else {
        setImageLoading(false);
        // a real app would probably use more advanced
        // error handling
        console.log("error");
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

const updateImage = (e) => {
    const file = e.target.files[0];
    setImg_url(file);
}


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Profile Image</label>
        <input
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            {(imageLoading)&& <p>Loading...</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
