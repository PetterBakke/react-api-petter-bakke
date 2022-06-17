import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../heading/Heading";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your full name").min(3, "Minimum 3 characters"),
  age: yup.number().required("Please enter your age").min(10, "Your age must be between 10 and 20").max(20, "Your age must be between 10 and 20"),
  website: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Please enter a valid URL").required("Please enter Website"),
})

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <>
    <Heading title="Contact" />
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
      <input {...register("name")} />
      </label>
      {errors.name && <span>{errors.name.message}</span>}
      <label>
        Age:
      <input {...register("age")} />
      </label>
      {errors.age && <span>{errors.age.message}</span>}
      <label>
        Website:
      <input {...register("website")} />
      </label>
      {errors.website && <span>{errors.website.message}</span>}

      <button>Send</button>
    </form>
    </>
  );
}

export default Contact;