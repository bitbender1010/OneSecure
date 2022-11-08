import style from "../styles/kuba.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const Kcreate = () => {
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

            <h2>Create a account</h2>
            <p>We’re the bank of the free</p>

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
                label="Legal Name"
                variant="outlined"
                className={style.boxCon}
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
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

            <span>Or</span>

            <button className={style.btnn}>Create Account</button>
            <p className={style.login}>
              Already have a OneSecure <br /> accountt?
              <Link className={style.loginC} href="/">
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

export default Kcreate;
