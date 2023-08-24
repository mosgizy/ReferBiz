import Image from 'next/image';
import Nav from '@/components/Nav';
import whatsappIcon from '/public/icons/whatsapp.svg';
import instagramIcon from '/public/icons/instagram.svg';
import paystack from '/public/icons/paystack.png';
import Header from '@/components/Header';
import ProcessCard from '@/components/ProcessCard';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <section className="mt-20 section">
        <div>
          <div className="flex flex-col gap-3 text-text-color md:gap-4">
            <h1 className="font-semibold text-3xl text-header md:text-4xl md:w-[20ch] md:mx-auto">
              Grow your business like a boss!
            </h1>
            <p className="text-sm md:text-base md:w-[50ch] md:mx-auto">
              Easily connect all your business tools like WhatsApp business,
              Instagram, Paystack to your ReferBiz account.
            </p>
          </div>
          <div className="flex-center justify-between md:justify-center gap-3 md:gap-6 flex-wrap mt-5 text-base font-medium text-text-color">
            <div className="flex-center gap-3">
              <Image src={whatsappIcon} width={30} height={30} alt="" />{' '}
              Whatsapp
            </div>
            <div className="flex-center gap-3">
              <Image src={instagramIcon} width={30} height={30} alt="" />{' '}
              Instagram
            </div>
            <div>
              <Image src={paystack} alt="" width={150} height={50} />
            </div>
            <div className="text-header text-lg font-bold">ReferBiz</div>
          </div>
        </div>
      </section>
      <section className="section mt-28 md:mb-32">
        <div className="font-medium text-xs md:text-sm text-text-color bg-fade-gray px-4 py-2 rounded-full border border-[#F2F4F7]">
          YOUR PROCESS IS SIMPLE
        </div>
        <h1 className="font-semibold text-3xl md:text-4xl md:w-[16ch] md:mx-auto text-header mt-3">
          Generate leads in 3 simple steps
        </h1>
        <ProcessCard />
      </section>
      <section className="section mt-20 mb-10">
        <div className="bg-focus-bg text-white px-6 py-12 rounded-2xl flex flex-col gap-4">
          <h1 className="font-semibold text-3xl md:text-4xl md:w-[16ch] md:mx-auto">
            Start increasing your leads, today
          </h1>
          <p className="text-base md:w-[30ch] md:mx-auto">
            Join other vendors and start creating campaigns at a very little
            cost
          </p>
          <Link
            href="/dashboard"
            className="btn text-sm mt-2 md:w-max md:mx-auto"
          >
            Get started for free
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
