import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn ,signInWithGoogle,updateUser} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

 



    const handlGoogleSubmit = () => {
        signInWithGoogle(googleProvider)
          .then((result) => {
            const user = result.user
            console.log(user);
            navigate(from, { replace: true })
            toast('Successfully logged in!')

            if(!user.displayName){

                const userInfo = {
                    displayName:user?.email?.split("@")[0].toUpperCase()
                }
                updateUser(userInfo)
                .then(() => {
                    console.log('inside');
                    saveUser(user.displayName, user.email);
                })
                .catch(err => console.log(err));
            }
            else{
                const userInfo = {
                    displayName: user.displayName
                }
                console.log(userInfo);

                updateUser(userInfo)
                    .then(() => {
                        console.log('inside');
                        saveUser(user.displayName, user.email);
                    })
                    .catch(err => console.log(err));
            }
          })
          .catch((error) =>{
            toast('Something went wrong!')
          })
      }

      const saveUser = (name, email) =>{
        const user ={name, email};
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            console.log('confirm');
        })
    }


    return (
        <div className='h-[650px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
<Link to='/forgotpassword'>
<label className="label"> <span className="label-text text-primary mb-2">Forget Password?</span></label>
</Link>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-center my-2'>New to Doctors Portal ? <Link className='text-accent-focus' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handlGoogleSubmit} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;