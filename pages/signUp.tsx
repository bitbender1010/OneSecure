import style from "../styles/create.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Image from 'next/image'

const Create = () => {
  return (
    <div>
      <Head>
        <title>One Secure</title>
        <meta name="description" content="One Secure" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={style.main}>
        <div className={style.rightBa}>
          <div className={style.right}>
            <div className={style.logo}>
              <Image src="/logo.png" alt="logo" /> <span>One Secure</span>
            </div>

            <h2>Create a OneSecure account</h2>
            <p>
              All your personal information, identity documents and more all in
              one place.
            </p>

            <div className={style.input}>
              <input type="text" placeholder="First Name" />
            </div>
            <div className={style.input}>
              <input type="text" placeholder="Email" />
            </div>
            <div className={style.input}>
              <input type="text" placeholder="Password" />
            </div>

            <button>
              <Link href="/kubaverify">Create Account</Link>
            </button>
            <p className={style.login}>
              Already have a OneSecure <br /> accountt?
              <Link className={style.loginC} href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className={style.leftBa}>
          <Image src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Create;
