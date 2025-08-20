import React from 'react';

const HomeSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 19V12.8768C21.5 11.4536 21.5 10.742 21.3179 10.0857C21.1565 9.5044 20.8913 8.95707 20.535 8.4702C20.1328 7.92061 19.5742 7.47966 18.4572 6.59778L18.4572 6.59776L16.9572 5.41354C15.1862 4.01542 14.3007 3.31635 13.3207 3.04796C12.4562 2.81118 11.5438 2.81118 10.6793 3.04796C9.69929 3.31635 8.81381 4.01542 7.04285 5.41354L5.54285 6.59775C4.42577 7.47965 3.86724 7.9206 3.46504 8.4702C3.10875 8.95707 2.84351 9.5044 2.68215 10.0857C2.5 10.742 2.5 11.4536 2.5 12.8768V19C2.5 19.9319 2.5 20.3978 2.65224 20.7654C2.85523 21.2554 3.24458 21.6448 3.73463 21.8478C4.10218 22 4.56812 22 5.5 22H6.375C6.49106 22 6.5491 22 6.59814 21.9976C7.62554 21.9471 8.44712 21.1255 8.49759 20.0981C8.5 20.0491 8.5 19.9911 8.5 19.875V17C8.5 15.067 10.067 13.5 12 13.5C13.933 13.5 15.5 15.067 15.5 17V19.875C15.5 19.9911 15.5 20.0491 15.5024 20.0981C15.5529 21.1255 16.3745 21.9471 17.4019 21.9976C17.4509 22 17.5089 22 17.625 22H18.5C19.4319 22 19.8978 22 20.2654 21.8478C20.7554 21.6448 21.1448 21.2554 21.3478 20.7654C21.5 20.3978 21.5 19.9319 21.5 19Z" fill="#803EAF" />
  </svg>

);

const PhoneSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1169 15.6803L15.4983 16.6082C15.3748 16.7934 15.2115 16.9514 14.9963 17.0083C14.2914 17.1946 12.4199 17.2787 9.5706 14.4294C6.72133 11.5801 6.80542 9.70865 6.99169 9.00372C7.04855 8.78851 7.20659 8.62521 7.3918 8.50174L8.3197 7.88314C9.01054 7.42258 9.19722 6.48919 8.73666 5.79834L6.98417 3.16961C6.58217 2.56661 5.8072 2.33624 5.14108 2.62171L4.35053 2.96052C3.74997 3.2179 3.26009 3.67982 2.96789 4.26422C2.72376 4.75247 2.53455 5.26662 2.50891 5.8119C2.42812 7.53027 2.80492 11.7638 7.52055 16.4795C12.2362 21.1951 16.4697 21.5719 18.1881 21.4911C18.7334 21.4654 19.2475 21.2762 19.7358 21.0321C20.3202 20.7399 20.7821 20.25 21.0395 19.6495L21.3783 18.8589C21.6638 18.1928 21.4334 17.4178 20.8304 17.0158L18.2017 15.2633C17.5108 14.8028 16.5774 14.9895 16.1169 15.6803Z" fill="#803EAF" />
  </svg>

);

const MailSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.221 9.84521C20.6954 9.52894 21.358 9.67611 21.4684 10.2355C21.5051 10.4211 21.5244 10.613 21.5244 10.8096V17.2383C21.5243 18.3426 20.6286 19.238 19.5244 19.2383H4.47656C3.37206 19.2383 2.47666 18.3428 2.47656 17.2383V10.8096C2.47656 10.6133 2.49565 10.4216 2.53195 10.2361C2.64143 9.67651 3.30373 9.52896 3.77817 9.84524L9.50391 13.6621C11.0153 14.6696 12.9847 14.6696 14.4961 13.6621L20.221 9.84521ZM20.1387 4C21.1665 4 22 4.83347 22 5.86133C21.9999 6.48351 21.6886 7.06405 21.1709 7.40918L13.6641 12.4141C13.0971 12.792 12.4337 12.9575 11.7822 12.9102C11.6966 12.9039 11.6114 12.8925 11.5264 12.8789C11.4146 12.861 11.304 12.8362 11.1943 12.8057C11.158 12.7956 11.1219 12.7849 11.0859 12.7734C10.8247 12.6898 10.5716 12.5712 10.3359 12.4141L2.8291 7.40918C2.3114 7.06405 2.00007 6.48351 2 5.86133C2 4.83347 2.83347 4 3.86133 4H20.1387Z" fill="#803EAF" />
  </svg>

);

// --- MAIN CONTACT US COMPONENT ---
export default function ContactUs() {
  return (
    <div className="bg-white min-h-screen flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left: Form Section */}
        <div className="flex-1">
          <h1 className="text-[48px] font-bold font-['Inter'] text-[#232d32] mb-2">
            Contact Us
          </h1>
          <p className="font-semibold font-['Inter'] text-[#232d32] opacity-60 mb-8 max-w-[600px]">
            We love to hear from you, so if there’s anything you’d like to ask us, we’re right here and ready to help in every way we can.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-bold font-['Inter'] text-[#232d32] mb-1">Your name</label>
                <input
                  type="text"
                  placeholder="ex: Julie Sample"
                  className="w-full border rounded-md px-4 py-3 font-['Inter'] text-[#232d32] text-[16px] leading-[24px] font-semibold outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block font-bold font-['Inter'] text-[#232d32] mb-1">Your email</label>
                <input
                  type="email"
                  placeholder="ex: julie@gmail.com"
                  className="w-full border rounded-md px-4 py-3 font-['Inter'] text-[#232d32] text-[16px] leading-[24px] font-semibold outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-bold font-['Inter'] text-[#232d32] mb-1">Your phone</label>
                <input
                  type="text"
                  placeholder="ex: +1 234 455 5564"
                  className="w-full border rounded-md px-4 py-3 font-['Inter'] text-[#232d32] text-[16px] leading-[24px] font-semibold outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block font-bold font-['Inter'] text-[#232d32] mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="ex: return"
                  className="w-full border rounded-md px-4 py-3 font-['Inter'] text-[#232d32] text-[16px] leading-[24px] font-semibold outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold font-['Inter'] text-[#232d32] mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here."
                className="w-full border rounded-md px-4 py-3 font-['Inter'] text-[#232d32] text-[16px] leading-[24px] font-semibold outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#E11D7C] text-white font-bold font-['Inter'] text-[20px] px-10 py-3 rounded-[20px] mt-6 transition hover:bg-pink-700"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right: Office Address */}
        <div className="w-full md:w-[340px] flex-shrink-0">
          <h2 className="text-[36px] font-bold font-['Inter'] text-[#232d32] mb-6">
            Office Address
          </h2>
          <ul className="space-y-8">
            <li className="flex items-center gap-4">
              <HomeSVG />
              <span className="font-semibold font-['Inter'] text-[#232d32] opacity-60">
                Lorem ipsum sit dolor amet.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <PhoneSVG />
              <span className="font-semibold font-['Inter'] text-[#232d32] opacity-60">
                XXXX-XXX-XXX
              </span>
            </li>
            <li className="flex items-center gap-4">
              <MailSVG />
              <span className="font-semibold font-['Inter'] text-[#232d32] opacity-60">
                info@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
