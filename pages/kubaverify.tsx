import style from "../styles/kuba.module.css";
import Head from "next/head";


const Kverify = () => {
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

            <h2>Kuba Bank is requesting to access the following details:</h2>

            <div className={style.nums}>
              <div className={style.one}>1</div>
              <div className={style.one}>2</div>
              <div className={style.one}>3</div>
            </div>

            <div className={style.input}>
              <input type="text" placeholder="First Name" />
            </div>
            <div className={style.input}>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={style.input}>
              <input type="text" placeholder="NIN" />
            </div>

            <button>Continue</button>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Kverify;
