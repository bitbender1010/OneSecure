import style from "../styles/create.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
          </div>
        </div>
        <div className={style.leftBa}>
          <div className={style.left}></div>
        </div>
      </main>
    </div>
  );
};

export default Create;
