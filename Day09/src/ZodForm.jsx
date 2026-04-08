import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(3, "Minimum length should be 3").max(20, "Maximum length should be 20"),
    age: z.coerce.number().min(10, "Minimum age should be 10").max(80, "Maximum age should be 80"),
    password: z.string().min(6, "MInimum Length should be 6").max(20, "Maximum length should be 20")
})

function ZodForm() {
    const { register, handleSubmit, formState: { errors },} = useForm({
        resolver: zodResolver(formSchema)
    });

    function submitForm(data) {
        console.log(data);
    }

    console.log("render");

    return (
        <>
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="first" >Name:</label>
                <input id="first" {...register('name')}></input>

                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="second" >Age:</label>
                <input id="second" {...register('age')}></input>

                {errors.age && <span>{errors.age.message}</span>}
            </div>
            <div>
                <label htmlFor="third" >Password:</label>
                <input id="third" {...register('password')}></input>

                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default ZodForm;