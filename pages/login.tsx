import style from "../styles/create.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const Login = () => {
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

            <h2>Log in to your OneSecure account</h2>
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
                label="OneSecure Email"
                variant="outlined"
                className={style.boxCon}
              />
              <TextField
                id="outlined-basic"
                label="OneSecure Password"
                variant="outlined"
                className={style.boxCon}
              />
            </Box>

            <button>Login</button>
            <p className={style.login}>
              Don't have a OneSecure <br /> account?
              <Link className={style.loginC} href="/">
                Sign up for free
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

export default Login;
