import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ForgotPassword = () => {

  const { resetPassword } = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLogin = data => {
    console.log(data);
    if(data.email){
      resetPassword(data.email)
      .then(() => {
          toast.success('A reset link has been sent to your email!')
        })
        .catch((error) => {
          toast.error('Something went wrong!')
      });
  }
  else{
      toast('Input your email address.  Then, click Reset.')
  }

}

  return (
    <div className='h-[650px] flex justify-center '>
    <div className='w-96 p-7'>
        <h2 className='text-2xl text-center mb-2'>Password Recovery</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Email</span></label>
                <input type="text"
                    {...register("email", {
                        required: "Email Address is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
            </div>
            <label className="label"> <span className="label-text text-gray-400">	
Enter your email to recover the password</span></label>
            <input className='btn btn-primary w-full mt-2' value="Send Link" type="submit" />
            
        </form>
        <p className='text-center my-2'>New to Doctors Portal ? <Link className='text-accent-focus' to="/signup">Create new Account</Link></p>
    </div>
</div>
  );
};

export default ForgotPassword;