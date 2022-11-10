import style from "../styles/create.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { GrFormCheckmark } from "react-icons/gr";
import { BiErrorCircle } from "react-icons/bi";
import gToken from "./components/getToken";

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().max(16).min(8),
});

const Create = () => {
  const [loading, setLoading] = useState(false);
  const timer: any = useRef();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  let Da: any = gToken();
  let accessToken = Da?.access;



  const onSubmit = (data: FormInput) => {
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 3000);

    Da = gToken();
    accessToken = "Bearer " + Da.access;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    };
    axios
      .post("https://authapitest.herokuapp.com/regUser", {
        headers: headers,
        data,
      })
      .then((res: any) => {
        setSuccess(true);
        timer.current = window.setTimeout(() => {
          setSuccess(false);
        }, 4000);
        setErr(false);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setErr(true);
        timer.current = window.setTimeout(() => {
          setErr(false);
        }, 4000);
      });
  };
  return (
    <div>
      <Head>
        <title>One Secure</title>
        <meta name="description" content="One Secure" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={style.main}>
        {success ? (
          <div>
            <p>
              {" "}
              <GrFormCheckmark /> login was successful
            </p>
          </div>
        ) : null}

        {err ? (
          <div className={success ? "none" : "show"}>
            <p>
              <BiErrorCircle />
              login failed
            </p>
          </div>
        ) : null}

        <div className={style.rightBa}>
          <div className={style.right}>
            <div className={style.logo}>
              <img src="/logo.png" alt="logo" /> <span>One Secure</span>
            </div>

            <h2>Create a OneSecure account</h2>
            <p>
              All your personal information, identity documents and more all in
              one place.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.input}>
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="First Name"
                />
              </div>
              <div className={style.input}>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="First Name"
                />
              </div>
              <div className={style.input}>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                />
              </div>
              <div className={style.input}>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                />
              </div>

              <button>
                {loading ? (
                  <CircularProgress size={30} sx={{ color: "white" }} />
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <p className={style.login}>
              Already have a OneSecure <br /> accountt?
              <Link className={style.loginC} href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Create;
