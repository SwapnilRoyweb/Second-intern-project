import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className="hero min-h-screen shadow-2xl shadow-blue-900 card-bg rounded-3xl p-10">
            <div className="hero-content flex-col lg:flex-row-reverse gap-40 justify-between">
                <div className="text-center rounded-2xl">
                    <img src="https://i.ibb.co/nPXNsRm/12953560-Data-security-01-removebg-preview.png" alt="" className='shadow-2xl shadow-sky-700 rounded-full hover:origin-bottom hover:-rotate-12 hover:-translate-x-12 ' />
                </div>
                <div className="card flex-1 w-full max-w-sm shadow-2xl shadow-transparent hover:scale-110 duration-300 hover:shadow-black ">
                    <div className="card-body shadow-inner shadow-blue-700 rounded-3xl">
                    <h1 className="text-5xl font-bold text-white rounded-3xl my-5">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input bg-transparent input-bordered text-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input bg-transparent input-bordered text-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo url</span>
                            </label>
                            <input type="file" placeholder="Your Picture" className="file-input input-bordered text-white bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input bg-transparent input-bordered text-white" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline bg-transparent hover:bg-cyan-500 hover:text-white">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;