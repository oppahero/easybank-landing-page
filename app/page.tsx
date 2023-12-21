import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (

    <>
      <nav className={styles.nav}>
        <Image
          src="/images/logo.svg"
          alt="Easybank Logo"
          width={143}
          height={23}
          priority
        />
        <ul className={styles.navUl}>
          <div className={styles.navLi}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </div>
          <Image
            src="/images/icon-hamburger.svg"
            alt="Easybank Logo"
            width={26}
            height={13}
            priority
          />
        </ul>
        <a className={styles.navButton} href="#">Request Invite</a>
      </nav>

      <main className={styles.main}>

        <section className={styles.intro}>
          <div className={styles.intro_bg}>
            <div className={styles.mockups}></div>
          </div>
          <div className={styles.intro_text}>
            <h1 className={styles.title}>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <a className={styles.button} href="#">Request Invite</a>
          </div>
        </section>

        <section>
          <h2>Why choose Easybank?</h2>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
          <div>
            <div>
              <Image
                src="/images/icon-online.svg"
                alt="Icon Online"
                width={76}
                height={76}
                priority
              />
              <h3>Online Banking</h3>
              <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div>
              <Image
                src="/images/icon-budgeting.svg"
                alt="Icon Budgeting"
                width={76}
                height={76}
                priority
              />
              <h3>Simple Budgeting</h3>
              <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </div>
            <div>
              <Image
                src="/images/icon-onboarding.svg"
                alt="Icon Onboarding"
                width={76}
                height={76}
                priority
              />
              <h3>Fast Onboarding</h3>
              <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div>
              <Image
                src="/images/icon-api.svg"
                alt="Icon Api"
                width={76}
                height={76}
                priority
              />
              <h3>Open API</h3>
              <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
          </div>
        </section>

        <article>
          <h2>Latest Articles</h2>
          <article>
            <Image
              src="/images/image-currency.jpg"
              alt="Currency image"
              width={328}
              height={200}
              priority
            />
            <header>
              <p> By Claire Robinson</p>
              <h3>Receive money in any currency with no fees</h3>
            </header>
            <p> Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
          </article>
          <article>
            <Image
              src="/images/image-restaurant.jpg"
              alt="Restaurant image"
              width={328}
              height={200}
              priority
            />
            <header>
              <p>By Wilson Hutton</p>
              <h3>Treat yourself without worrying about money</h3>
            </header>
            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … </p>
          </article>
          <article>
            <Image
              src="/images/image-plane.jpg"
              alt="Plane image"
              width={328}
              height={200}
              priority
            />
            <header>
              <p>By Wilson Hutton</p>
              <h3>Take your Easybank card wherever you go</h3>
            </header>
            <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
          </article>
          <article>
            <Image
              src="/images/image-confetti.jpg"
              alt="Confetti image"
              width={328}
              height={200}
              priority
            />
            <header>
              <p>By Claire Robinson</p>
              <h3>Our invite-only Beta accounts are now live!</h3>
            </header>
            <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
          </article>
        </article>

      </main>

      <footer>
        <Image
          src="/images/logo.svg"
          alt="Easybank Logo"
          width={145}
          height={25}
          priority
        />

        <div className="socialMedia">
          <Image
            src="/images/icon-facebook.svg"
            alt="Facebook icon"
            width={25}
            height={25}
            priority
          />
          <Image
            src="/images/icon-youtube.svg"
            alt="Youtube icon"
            width={25}
            height={25}
            priority
          />
          <Image
            src="/images/icon-twitter.svg"
            alt="Twitter icon"
            width={25}
            height={25}
            priority
          />
          <Image
            src="/images/icon-pinterest.svg"
            alt="Pinterest icon"
            width={25}
            height={25}
            priority
          />
          <Image
            src="/images/icon-instagram.svg"
            alt="Instagram icon"
            width={25}
            height={25}
            priority
          />
        </div>

        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>

        <a href="#">Request Invite</a>
        <p>&copy; Easybank. All Rights Reserved</p>

      </footer>
    </>
  )
}
