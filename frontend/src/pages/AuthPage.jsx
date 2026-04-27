import React, { useState } from 'react'
import axios from 'axios';
import { Eye, EyeClosed } from 'lucide-react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='w-full'>
      <div>
        <div className="flex mb-4 border-b">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 ${isLogin ? "border-b-2 border-indigo-600 font-semibold" : ""}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 ${!isLogin ? "border-b-2 border-indigo-600 font-semibold" : ""}`}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? <LoginPage /> : <RegisterPage />}
      </div>
    </div>
  );
}

function RegisterPage() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,16}$/;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage('');

    if (!username || !password || !email) {
      setError(true);
      setMessage('All Fields are Required!');
      return;
    }

    if (!emailRegex.test(email)) {
      setError(true);
      setMessage("Invalid email format");
      return;
    }

    if (password.length < 6 || password.length > 16) {
      setError(true);
      setMessage('Password Between 6 to 16 Characters');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(true);
      setMessage("Password must contain letters and numbers");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/register`,
        { username, email, password },
        { withCredentials: true }
      );

      setError(false);
      setMessage(res?.data?.message);

      if (res.data.success) {
        setEmail('');
        setPassword('');
        setUsername('');
      }

    } catch (err) {

      setError(true);

      setMessage(err?.response?.data?.message || `Something Went Wrong!`);

    } finally {
      setLoading(false);
    }

  }

  return (
    <div className='flex items-center justify-center w-full'>

      <form onSubmit={form} className='shadow-Card-Shadow p-5 rounded-md flex items-center justify-between flex-col gap-5 w-[320px]'>

        <h1 className='text-5xl font-medium text-center'>Register</h1>

        <div className='flex items-start justify-start gap-2 flex-col w-full'>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="name">Name</label>
            <input disabled={loading} value={username} onChange={(e) => setUsername(e.target.value)} className='border-2 px-2 py-1 rounded-md border-Input-Border focus:border-Input-Focus outline-0' type="text" id='name' placeholder='Your Name' name='username' />
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="email">Email</label>
            <input disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 px-2 py-1 rounded-md border-Input-Border focus:border-Input-Focus outline-0' type="email" id='email' placeholder='Your Email' name='email' />
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="pass">Password</label>

            <div className='relative'>
              <input disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} className='w-full border-2 px-2 py-1 rounded-md border-Input-Border focus:border-Input-Focus outline-0' type={showPass ? "text" : "password"} id='pass' placeholder='Password' name='password' />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPass ? <Eye size={16} /> : <EyeClosed size={16} />}
              </button>
            </div>

          </div>


          {message && (
            <p className={`text-sm text-center w-full rounded-md p-2 mt-2 ${error ? 'text-Error bg-red-600/10' : 'text-Success bg-green-600/10'}`}>{message}</p>
          )}

        </div>

        <button className='bg-Btn-BG hover:bg-Primary-Hover text-white w-full text-center rounded-md p-2 cursor-pointer flex items-center justify-center gap-2' type='submit' disabled={loading}>
          Register
          {loading ? <Loading className={`border-2 border-white size-4`} /> : null}
        </button>

        <Link to={'/login'}>Login</Link>

      </form>

    </div>
  )
}



function LoginPage() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,16}$/;

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage('');

    if (!password || !email) {
      setError(true);
      setMessage('All Fields are Required!');
      return;
    }

    if (!emailRegex.test(email)) {
      setError(true);
      setMessage("Invalid email format");
      return;
    }

    if (password.length < 6 || password.length > 16) {
      setError(true);
      setMessage('Password Between 6 to 16 Characters');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(true);
      setMessage("Password must contain letters and numbers");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setError(false);
      setMessage(res?.data?.message);

      if (res.data.success) {
        setEmail('');
        setPassword('');
      }

    } catch (err) {

      setError(true);

      setMessage(err?.response?.data?.message || `Something Went Wrong!`);

    } finally {
      setLoading(false);
    }

  }

  return (
    <div className='flex items-center justify-center w-full'>

      <form onSubmit={form} className='shadow-Card-Shadow p-5 rounded-md flex items-center justify-between flex-col gap-5 h-[400px] w-[320px]'>

        <h1 className='text-5xl font-medium text-center'>Login</h1>

        <div className='flex items-start justify-start gap-2 flex-col w-full'>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="email">Email</label>
            <input disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 px-2 py-1 rounded-md border-Input-Border focus:border-Input-Focus outline-0' type="email" id='email' placeholder='Your Email' name='email' />
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="pass">Password</label>

            <div className='relative'>
              <input disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} className='w-full border-2 px-2 py-1 rounded-md border-Input-Border focus:border-Input-Focus outline-0' type={showPass ? "text" : "password"} id='pass' placeholder='Password' name='password' />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPass ? <Eye size={16} /> : <EyeClosed size={16} />}
              </button>
            </div>

          </div>


          {message && (
            <p className={`text-sm text-center w-full rounded-md p-2 mt-2 ${error ? 'text-Error bg-red-600/10' : 'text-Success bg-green-600/10'}`}>{message}</p>
          )}

        </div>

        <button className='bg-Btn-BG text-white w-full text-center rounded-md p-2 cursor-pointer flex items-center justify-center gap-2' type='submit' disabled={loading}>
          Login
          {loading ? <Loading className={`border-2 border-white size-4`} /> : null}
        </button>

        <Link to={'/register'}>Register</Link>

      </form>

    </div>
  )
}