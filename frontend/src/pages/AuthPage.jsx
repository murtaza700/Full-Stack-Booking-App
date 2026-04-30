import React, { useState } from 'react'
import axios from 'axios';
import { AppleIcon, ArrowRight, Eye, EyeClosed, GemIcon, LockIcon, Mail, MessageSquare, UserRound, Zap } from 'lucide-react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='w-full flex items-center justify-center flex-col p-5'>

      <div className='flex flex-col items-center justify-center mb-5'>
        <div className="icon bg-Primary text-white size-10 flex items-center justify-center rounded-md">
          <Zap size={22} />
        </div>
        <h1 className='text-[32px] font-semibold'>ServiceSmart</h1>
        <p className='text-sm text-gray-500'>The high-trust marketplace for local experts.</p>
      </div>

      <div className='border border-Border bg-white max-w-[480px] p-7 w-full shadow-Card-Shadow rounded-md'>

        <div className="flex mb-7 bg-gray-200 rounded-md overflow-hidden p-2">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-md font-medium cursor-pointer ${isLogin ? "bg-white text-Primary" : ""}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-md font-medium cursor-pointer ${!isLogin ? "bg-white text-Primary" : ""}`}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? <LoginPage /> : <RegisterPage />}
      </div>

      <p className='text-sm text-black/80 mt-5'>By signing in, you agree to our <span className='font-semibold cursor-pointer'>Terms</span> and <span className='font-semibold cursor-pointer'>Privacy Policy</span>.</p>

      <div className='flex items-center justify-center gap-5 text-sm font-bold text-black/60 mt-8 mb-2'>
        <span className='cursor-pointer'>Support</span>
        <span className='cursor-pointer'>Trust & Safety</span>
        <span className='cursor-pointer'>Community</span>
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
  const [role, setRole] = useState('user');

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
        { username, email, password, role },
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
    <div className='flex items-center justify-center flex-col w-full min-h-[400px]'>

      <form
        onSubmit={form}
        className='rounded-md flex items-start justify-start flex-col  w-full'
      >

        <div className='mb-6'>
          <h2 className='text-2xl font-semibold'>Welcome back</h2>
          <p className='text-sm text-Text-Secondary'>Enter your details to access your account</p>
        </div>

        <div className='flex items-start justify-start gap-4 flex-col w-full'>

          <div className='flex flex-col gap-1 w-full'>
            <label
              className='text-[13px] font-semibold text-Text-Primary'
              htmlFor="username"
            >Name</label>

            <div className='w-full flex items-center justify-center py-2 px-4 border rounded-md border-Input-Border focus:border-Input-Focus'>

              <UserRound size={20} className='text-Text-Secondary' />

              <input
                disabled={loading}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='px-3 py-1 w-full rounded-md border-0 outline-0 text-sm'
                type="text"
                id='username'
                placeholder='Jhon Doe'
                name='username'
              />
            </div>

          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label
              className='text-[13px] font-semibold text-Text-Primary'
              htmlFor="email"
            >Email Address</label>

            <div className='w-full flex items-center justify-center py-2 px-4 border rounded-md border-Input-Border focus:border-Input-Focus'>

              <Mail size={20} className='text-Text-Secondary' />

              <input
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='px-3 py-1 w-full rounded-md border-0 outline-0 text-sm'
                type="email"
                id='email'
                placeholder='name@example.com'
                name='email'
              />
            </div>

          </div>

          <div className='flex flex-col gap-1 w-full'>

            <div className='flex items-center justify-between'>
              <label className='text-[13px] font-semibold text-Text-Primary' htmlFor="pass">Password</label>
              <span className='text-[13px] text-Primary font-bold cursor-pointer'>Forgot Password?</span>
            </div>

            <div className='flex items-center justify-center w-full border rounded-md py-2 px-4 border-Input-Border focus:border-Input-Focus active:border-Input-Focus'>

              <LockIcon className='text-Text-Secondary' size={20} />

              <input
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border-0 px-3 py-1 rounded-md outline-0 text-sm'
                type={showPass ? "text" : "password"}
                id='pass'
                placeholder='••••••••'
                name='password'
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="text-Text-Secondary cursor-pointer"
              >
                {showPass ? <Eye size={17} /> : <EyeClosed size={17} />}
              </button>
            </div>

          </div>


          <div className='flex items-start justify-start flex-col w-full'>

            <label className='text-[13px] font-semibold text-Text-Primary' htmlFor="role">Are you service provider?</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className='flex items-center justify-center w-full border rounded-md py-3 px-4 border-Input-Border cursor-pointer text-[13px]'
              name="role"
              id="role">
              <option className='text-sm' value="user">No! I'm not service provider</option>
              <option className='text-sm' value="provider">Yes! I'm service provider</option>
            </select>

          </div>
          {console.log(role)}
        </div>

        <div className='flex items-center justify-start gap-3 px-1 my-4'>
          <input type='checkbox' id='keepsigned' />
          <label className='cursor-pointer text-[13px] font-[500] text-Text-Primary' name='keepsigned' htmlFor="keepsigned">Keep me signed in for 30 days</label>
        </div>

        {message && (
          <p className={`text-sm text-center w-full rounded-md p-2 mt-2 mb-3 ${error ? 'text-Error bg-red-600/10' : 'text-Success bg-green-600/10'}`}>{message}</p>
        )}

        <button className='bg-Primary hover:bg-Primary-Hover transition-all duration-300 text-white w-full text-center rounded-md p-2 cursor-pointer flex items-center justify-center gap-1' type='submit' disabled={loading}>
          Sign Up <ArrowRight size={17} />
          {loading ? <Loading className={`border-2 border-white size-4`} /> : null}
        </button>

      </form>

      <div className='flex items-center justify-center w-full my-6'>
        <div className='h-[1px] bg-Text-Secondary w-full'></div>
        <span className='w-full text-[10px] font-bold text-Text-Secondary text-center'>OR CONTINUE WITH</span>
        <div className='h-[1px] bg-Text-Secondary w-full'></div>
      </div>

      <div className='flex items-center justify-center gap-10 w-full'>
        <button className='w-full flex items-center justify-center border border-black/10 rounded-md p-3 cursor-pointer text-sm gap-1'>
          <GemIcon size={20} />
          Google
        </button>

        <button className='w-full flex items-center justify-center border border-black/10 rounded-md p-3 cursor-pointer text-sm gap-1'>
          <AppleIcon size={20} />
          Apple
        </button>
      </div>


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
    <div className='flex items-center justify-center flex-col w-full min-h-[400px]'>

      <form
        onSubmit={form}
        className='rounded-md flex items-start justify-start flex-col  w-full'
      >

        <div className='mb-6'>
          <h2 className='text-2xl font-semibold'>Welcome back</h2>
          <p className='text-sm text-Text-Secondary'>Enter your details to access your account</p>
        </div>

        <div className='flex items-start justify-start gap-4 flex-col w-full'>

          <div className='flex flex-col gap-1 w-full'>
            <label
              className='text-[13px] font-semibold text-Text-Primary'
              htmlFor="email"
            >Email Address</label>

            <div className='w-full flex items-center justify-center py-2 px-4 border rounded-md border-Input-Border focus:border-Input-Focus'>

              <Mail size={20} className='text-Text-Secondary' />

              <input
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='px-3 py-1 w-full rounded-md border-0 outline-0 text-sm'
                type="email"
                id='email'
                placeholder='name@example.com'
                name='email'
              />
            </div>

          </div>

          <div className='flex flex-col gap-1 w-full'>

            <div className='flex items-center justify-between'>
              <label className='text-[13px] font-semibold text-Text-Primary' htmlFor="pass">Password</label>
              <span className='text-[13px] text-Primary font-bold cursor-pointer'>Forgot Password?</span>
            </div>

            <div className='flex items-center justify-center w-full border rounded-md py-2 px-4 border-Input-Border focus:border-Input-Focus active:border-Input-Focus'>

              <LockIcon className='text-Text-Secondary' size={20} />

              <input
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border-0 px-3 py-1 rounded-md outline-0 text-sm'
                type={showPass ? "text" : "password"}
                id='pass'
                placeholder='••••••••'
                name='password'
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="text-Text-Secondary cursor-pointer"
              >
                {showPass ? <Eye size={17} /> : <EyeClosed size={17} />}
              </button>
            </div>

          </div>

        </div>

        <div className='flex items-center justify-start gap-3 px-1 my-4'>
          <input type='checkbox' id='keepsigned' />
          <label className='cursor-pointer text-[13px] font-[500] text-Text-Primary' name='keepsigned' htmlFor="keepsigned">Keep me signed in for 30 days</label>
        </div>

        {message && (
          <p className={`text-sm text-center w-full rounded-md p-2 mt-2 mb-3 ${error ? 'text-Error bg-red-600/10' : 'text-Success bg-green-600/10'}`}>{message}</p>
        )}

        <button className='bg-Primary hover:bg-Primary-Hover transition-all duration-300 text-white w-full text-center rounded-md p-2 cursor-pointer flex items-center justify-center gap-1' type='submit' disabled={loading}>
          Sign In <ArrowRight size={17} />
          {loading ? <Loading className={`border-2 border-white size-4`} /> : null}
        </button>

      </form>

      <div className='flex items-center justify-center w-full my-6'>
        <div className='h-[1px] bg-Text-Secondary w-full'></div>
        <span className='w-full text-[10px] font-bold text-Text-Secondary text-center'>OR CONTINUE WITH</span>
        <div className='h-[1px] bg-Text-Secondary w-full'></div>
      </div>

      <div className='flex items-center justify-center gap-10 w-full'>
        <button className='w-full flex items-center justify-center border border-black/10 hover:border-Btn-BG transition-all duration-300 rounded-md p-3 cursor-pointer text-sm gap-1'>
          <GemIcon size={20} />
          Google
        </button>

        <button className='w-full flex items-center justify-center border border-black/10 hover:border-Btn-BG transition-all duration-300 rounded-md p-3 cursor-pointer text-sm gap-1'>
          <AppleIcon size={20} />
          Apple
        </button>
      </div>


    </div>
  )
}