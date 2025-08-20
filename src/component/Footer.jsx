import React from "react";

const Footer = () => (
    <footer className="bg-[#18222A] text-[#7E95AA] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Left Section */}
            <div className="flex-1">
                <h2 className="font-inter font-black text-[25px] leading-[40px] tracking-normal text-white mb-6">
                    Logo
                </h2>

                <p className="font-inter font-normal text-[16px] leading-[16px] tracking-normal">
                    Join millions of people who organize work<br />
                    and life with us
                </p>

            </div>
            {/* Right Section */}
            <div className="flex flex-col md:items-end md:justify-end flex-1 md:mt-14 mt-8">
                <ul className="flex md:space-x-12 space-x-8 justify-start md:justify-end mb-8 md:mb-0 text-[16px] leading-[24px] font-inter font-semibold">
                    <li>
                        <a href="#" className="hover:text-white transition tracking-[0px]">
                            Become an Influencer
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition tracking-[0px]">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition tracking-[0px]">
                            Contact
                        </a>
                    </li>
                </ul>

            </div>
        </div>

        {/* Divider */}
        <hr className="border-[#748FB5] my-8 w-full max-w-[1320px] opacity-35 bg-[#37434c] mx-auto" />


        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="font-inter text-[13px] font-semibold leading-[24px] tracking-[0px]">
                all rights reserved
            </span>

            <div className="flex space-x-6 text-2xl">
                {/* Facebook */}
                <a href="#" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.54813C16.0003 7.01922 15.5625 5.52223 14.7385 4.23441C13.9144 2.94659 12.7385 1.92189 11.3501 1.28164C9.96173 0.64138 8.41893 0.412384 6.90442 0.621765C5.38991 0.831145 3.96712 1.47013 2.80451 2.46306C1.6419 3.456 0.788165 4.76129 0.344396 6.22438C-0.0993733 7.68748 -0.114591 9.2471 0.300544 10.7186C0.71568 12.1901 1.54378 13.5118 2.68679 14.5272C3.82981 15.5426 5.23986 16.2092 6.75 16.4481V10.8601H4.719V8.54813H6.75V6.78513C6.70627 6.37358 6.7536 5.95745 6.88863 5.56623C7.02366 5.175 7.24309 4.81827 7.53136 4.52131C7.81964 4.22436 8.1697 3.99444 8.55674 3.84786C8.94379 3.70128 9.35833 3.64163 9.771 3.67313C10.371 3.68101 10.9696 3.73316 11.562 3.82913V5.80013H10.554C10.3823 5.77768 10.2077 5.79412 10.0432 5.84825C9.87874 5.90237 9.72853 5.99279 9.6037 6.11282C9.47887 6.23284 9.38263 6.3794 9.3221 6.54165C9.26157 6.70389 9.23829 6.87768 9.254 7.05013V8.55013H11.473L11.118 10.8621H9.25V16.4531C11.1322 16.1554 12.8464 15.1955 14.0838 13.7463C15.3213 12.2971 16.0008 10.4538 16 8.54813Z" fill="#BAC3CA" />
                    </svg>

                </a>
                {/* Twitter */}
                <a href="#" aria-label="Twitter">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3.5C15.4 3.8 14.8 3.9 14.1 4C14.8 3.6 15.3 3 15.5 2.2C14.9 2.6 14.2 2.8 13.4 3C12.8 2.4 11.9 2 11 2C9.3 2 7.8 3.5 7.8 5.3C7.8 5.6 7.8 5.8 7.9 6C5.2 5.9 2.7 4.6 1.1 2.6C0.8 3.1 0.7 3.6 0.7 4.3C0.7 5.4 1.3 6.4 2.2 7C1.7 7 1.2 6.8 0.7 6.6C0.7 8.2 1.8 9.5 3.3 9.8C3 9.9 2.7 9.9 2.4 9.9C2.2 9.9 2 9.9 1.8 9.8C2.2 11.1 3.4 12.1 4.9 12.1C3.8 13 2.4 13.5 0.8 13.5C0.5 13.5 0.3 13.5 0 13.5C1.5 14.4 3.2 15 5 15C11 15 14.3 10 14.3 5.7C14.3 5.6 14.3 5.4 14.3 5.3C15 4.8 15.6 4.2 16 3.5Z" fill="#BAC3CA" />
                    </svg>

                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_78_4342)">
                            <path d="M12.1451 5.35213C12.6753 5.35213 13.1051 4.92232 13.1051 4.39213C13.1051 3.86194 12.6753 3.43213 12.1451 3.43213C11.6149 3.43213 11.1851 3.86194 11.1851 4.39213C11.1851 4.92232 11.6149 5.35213 12.1451 5.35213Z" fill="#BAC3CA" />
                            <path d="M8 12.5C5.794 12.5 4 10.706 4 8.5C4 6.294 5.794 4.5 8 4.5C10.206 4.5 12 6.294 12 8.5C12 10.706 10.206 12.5 8 12.5ZM8 6.5C6.897 6.5 6 7.397 6 8.5C6 9.603 6.897 10.5 8 10.5C9.103 10.5 10 9.603 10 8.5C10 7.397 9.103 6.5 8 6.5Z" fill="#BAC3CA" />
                            <path d="M12 16.5H4C1.944 16.5 0 14.556 0 12.5V4.5C0 2.444 1.944 0.5 4 0.5H12C14.056 0.5 16 2.444 16 4.5V12.5C16 14.556 14.056 16.5 12 16.5ZM4 2.5C3.065 2.5 2 3.565 2 4.5V12.5C2 13.453 3.047 14.5 4 14.5H12C12.935 14.5 14 13.435 14 12.5V4.5C14 3.565 12.935 2.5 12 2.5H4Z" fill="#BAC3CA" />
                        </g>
                        <defs>
                            <clipPath id="clip0_78_4342">
                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
