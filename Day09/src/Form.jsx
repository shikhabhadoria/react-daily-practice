import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit, formState: { errors },} = useForm();

    function submitForm(data) {
        console.log(data);
    }

    console.log("render");

    return (
        <>
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="first" >Name:</label>
                <input id="first" {...register('name' , 
                    { required: "Name can't be empty"}
                )}></input>

                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="second" >Age:</label>
                <input id="second" {...register('age', 
                    {
                        min:{
                            value:10,
                            mesasage: "Minimum age should be 10"
                        },
                        max:{
                            value:80,
                            message:"Maximum Age should be 80"
                        }

                   }
                )}></input>

                {errors.age && <span>{errors.age.message}</span>}
            </div>
            <div>
                <label htmlFor="third" >Password:</label>
                <input id="third" {...register('password',
                    {required: "Password is required"}
                )}></input>

                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Form;