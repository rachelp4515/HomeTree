import '../App.css';
import { Form, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function PropForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = event => event.preventDefault(); navigate('/hostProp');
    // console.log(watch("name")); // watch input value by passing the name of it

    return (
        <div className='formDiv'> <h2> Create New Property </h2>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}

        <form onSubmit={handleSubmit} className='newPropForm'>
            <label htmlFor="name">Full Name</label>
            {/* register your input into the hook by invoking the "register" function */}
            <div className='nameInputs'>
            <input placeholder='First name' {...register("Fname", { required: true })} />
            <input placeholder='Last name' {...register("Lname", { required: true })} />
            </div>

            <label htmlFor="address">Address</label>
            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder='Address' {...register("address", { required: true })} />
            {/* errors will return when field validation fails  */}
            {/* {errors.address && <span>This field is required</span>} */}

            <label>Property Nick Name (optional)</label>
            <input placeholder='i.e. "The Smith Manor"' type="text" {...register("propNickName")} />

            <label>Phone Number</label>
            <input type="number" />

            <label> Add Property Cover photo (optional) </label>
            <input type='text' />

            {/* <label> Link to airbnb profile (optional) </label>
            <input type="text" /> */}

            <label> About this property </label>
            <textarea placeholder='Say something about the neighborhood, or the history of your property'></textarea>

            <input type="submit" className='submit' />
        </form>
        </div>
    )
}