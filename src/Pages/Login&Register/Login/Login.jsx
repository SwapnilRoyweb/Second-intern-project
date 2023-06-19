import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-transparent shadow-2xl body-bg shadow-black rounded-3xl p-5">
            <div className="hero-content flex-col lg:flex-row justify-between gap-40">
                <div className="bg-gradient-to-r from-slate-700 to-cyan-600 rounded-xl shadow-2xl shadow-cyan-900">
                    <img src="https://i.ibb.co/5kzpDtC/3343730-490426-PHQANV-332-removebg-preview-removebg-preview.png" alt=""  className='shadow-inner rounded-xl px-36 py-5 shadow-cyan-300 hover:-translate-y-6'/>
                </div>
                <div className="card p-3 backdrop-blur-xl flex-shrink-0 w-full max-w-sm shadow-inner shadow-white transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-110  ">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold text-white text-center my-5">Sign-In now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input bg-transparent input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline bg-transparent hover:bg-gradient-to-r from-cyan-700 to-slate-700 hover:text-white">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;