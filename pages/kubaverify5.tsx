import style from "../styles/kuba.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { BsCheckCircleFill } from "react-icons/bs";

const Kverify4 = () => {
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
              <Image src="/logo.png" alt="logo" /> <span>Kuda Bank</span>
            </div>
            <h2>Kuba Bank is requesting to access the following details:</h2>
            <div className={style.nums2}>
              <div className={style.one}>1</div>
              <div className={style.line}></div>
              <div className={style.one}>2</div>
              <div className={style.line2}></div>
              <div className={style.one}>3</div>
            </div>
            <div className={style.inputCapp}>
              <p>End of Demo</p>
            </div>
            <button>
              <Link href="/">Continue with kuba bank</Link>
            </button>
          </div>
        </div>
        <div className={style.leftBa}>
          <Image src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Kverify4;
