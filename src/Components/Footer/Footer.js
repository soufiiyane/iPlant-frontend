import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-blacksection border-t border-stroke dark:border-strokedark">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div
                    className="border-t border-stroke dark:border-strokedark flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-0 py-7">
                    <div className="animate_top">
                        <ul className="flex items-center gap-8">
                            <li><a href="#" className="hover:text-primary">English</a></li>
                            <li><a href="#" className="hover:text-primary">Support</a></li>
                        </ul>
                    </div>

                    <div className="animate_top">
                        <p>&copy; {new Date().getFullYear()} iPlant. All rights reserved</p>
                    </div>

                    <div className="animate_top">
                        <ul className="flex items-center gap-5">
                        <li>
                            <a href="#">
                                <svg class="fill-[#D1D8E0] hover:fill-primary transition-all duration-300" width="24"
                                     height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_48_1505)">
                                        <path
                                            d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                                            fill=""
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_48_1505">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</footer>
    );
};
export default Footer;
