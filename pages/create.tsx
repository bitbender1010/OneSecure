import style from "../styles/create.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";

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
              <img src="/logo.png" alt="logo" /> <span>One Secure</span>
            </div>

            <h2>Create a OneSecure account</h2>
            <p>
              All your personal information, identity documents and more all in
              one place.
            </p>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className={style.box}
            >
              <TextField
                id="outlined-basic"
                label="NIN"
                variant="outlined"
                className={style.boxCon}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className={style.boxCon}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className={style.boxCon}
              />
            </Box>

            <button>Create Account</button>
            <p className={style.login}>
              Already have a OneSecure <br /> accountt?
              <Link className={style.loginC} href="/">Login</Link>
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
