import '../App.css';
import { Form, Link, useNavigate } from "react-router-dom";
import Backend from "../backend"
import { useForm } from "react-hook-form";

export default function PropForm(props) {
    const {userId} = props
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = event => {

        console.log(event);
        Backend.createNewProperty({...event, hostID: userId })
        window.scrollTo(0, 0);
        navigate('/hostProp')
    };
    // const onSubmit = data => console.log(data);

    return (
        <div className='formDiv'> <h2> Create New Property </h2>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}

            <form onSubmit={handleSubmit(onSubmit)} className='newPropForm'>
                <label htmlFor="name">Full Name</label>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='nameInputs'>
                    <input placeholder='First name' {...register("fName")} />
                    <input placeholder='Last name' {...register("lName")} />
                </div>

                <label htmlFor="address">Address</label>
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder='Address' {...register("adrs")} />
                {/* errors will return when field validation fails  */}
                {/* {errors.address && <span>This field is required</span>} */}

                <label>Property Nick Name (optional)</label>
                <input placeholder='"The Smith Manor"' type="text" {...register("propNN")} />

                <label>Phone Number</label>
                <input placeholder='(123) 456 - 7890' type="number" {...register("phone")} />
                {/* 
                <label> Add Property Cover photo (optional) </label>
                <input type='text' /> */}

                {/* <label> Link to airbnb profile (optional) </label>
            <input type="text" /> */}

                <label> About this property </label>
                <textarea placeholder='Say something about the neighborhood, or the history of your property' {...register("about")}></textarea>

                <input type="submit" className='submit' />
            </form>
        </div>
    )
}