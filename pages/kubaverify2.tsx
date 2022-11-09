import style from "../styles/kuba.module.css";
import Head from "next/head";
import { RiArrowUpSLine } from 'react-icons/ri'
import Link from "next/link";


const Kverify2 = () => {
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

            <div className={style.nums2}>
              <div className={style.one}>1</div>
              <div className={style.line}></div>
              <div className={style.one}>2</div>
              <div className={style.one}>3</div>
            </div>

         
            <div className={style.inputNin}>
                <div className={style.text}>
                    <p>NIN</p>
                    <RiArrowUpSLine className={style.textIcon}/>
                </div>
              <input type="text" placeholder="NIN" />
            </div>

            <button>Continue</button>
            <Link href='/kubaverify' className={style.back}>
                    Back 
            </Link>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Kverify2;
