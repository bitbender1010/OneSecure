import style from "../styles/kuba.module.css";
import Head from "next/head";

const Verify = () => {
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

            <h4>
              You will be redirected to OneSecure our verification partner so as
              to complete your registration
            </h4>
            <span className={style.red}>
              If you have a OneSecure account, you can go ahead to login. But if
              you don’t please feel free to create a free account. It takes less
              than a minute to create a new account.
            </span>

            <button>Create Account</button>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Verify;