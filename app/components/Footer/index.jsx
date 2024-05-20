import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="bg-zinc-900 border-t-[1px] py-10 border-zinc-500">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="md:flex">
              <div className="mb-6 md:mb-0">
                <svg
                  width={141}
                  height={17}
                  viewBox="0 0 141 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2108_23967)">
                    <path
                      d="M91.8528 15.9217V14.6102H94.738V6.8288C94.738 6.71222 94.6943 6.61022 94.6069 6.52279C94.5194 6.43536 94.4174 6.39164 94.3009 6.39164H92.1806V5.08017H94.8473C95.2699 5.08017 95.5978 5.18946 95.8309 5.40803C96.0641 5.62661 96.1806 5.9472 96.1806 6.36978V6.98181H96.2681C96.4284 6.29692 96.7417 5.76505 97.208 5.38618C97.6888 5.00731 98.3082 4.81787 99.0659 4.81787H101.252V6.43536H99.0659C98.177 6.43536 97.4848 6.7268 96.9894 7.30967C96.5085 7.89255 96.2681 8.67215 96.2681 9.64847V14.6102H99.6998V15.9217H91.8528Z"
                      fill="white"
                    />
                    <path
                      d="M83.3805 16.184C82.375 16.184 81.4862 15.9508 80.7138 15.4845C79.9415 15.0182 79.3368 14.3625 78.8996 13.5173C78.4625 12.6576 78.2439 11.6521 78.2439 10.5009C78.2439 9.33518 78.4625 8.32971 78.8996 7.48454C79.3368 6.63936 79.9415 5.98363 80.7138 5.51732C81.4862 5.05102 82.375 4.81787 83.3805 4.81787C84.386 4.81787 85.2749 5.05102 86.0472 5.51732C86.8195 5.98363 87.4242 6.63936 87.8614 7.48454C88.2985 8.32971 88.5171 9.33518 88.5171 10.5009C88.5171 11.6521 88.2985 12.6576 87.8614 13.5173C87.4242 14.3625 86.8195 15.0182 86.0472 15.4845C85.2749 15.9508 84.386 16.184 83.3805 16.184ZM83.3805 14.7414C84.0508 14.7414 84.6483 14.5884 85.1729 14.2824C85.712 13.9763 86.1419 13.51 86.4625 12.8834C86.7831 12.2569 86.9434 11.4627 86.9434 10.5009C86.9434 9.52461 86.7831 8.73044 86.4625 8.11842C86.1419 7.49182 85.712 7.02552 85.1729 6.71951C84.6483 6.4135 84.0508 6.26049 83.3805 6.26049C82.7248 6.26049 82.1273 6.4135 81.5882 6.71951C81.049 7.02552 80.6191 7.49182 80.2985 8.11842C79.978 8.73044 79.8177 9.52461 79.8177 10.5009C79.8177 11.4627 79.978 12.2569 80.2985 12.8834C80.6191 13.51 81.049 13.9763 81.5882 14.2824C82.1273 14.5884 82.7248 14.7414 83.3805 14.7414Z"
                      fill="white"
                    />
                    <path
                      d="M70.2743 16.184C69.2688 16.184 68.38 15.9508 67.6076 15.4845C66.8353 15.0182 66.2306 14.3625 65.7934 13.5173C65.3563 12.6576 65.1377 11.6521 65.1377 10.5009C65.1377 9.33518 65.3563 8.32971 65.7934 7.48454C66.2306 6.63936 66.8353 5.98363 67.6076 5.51732C68.38 5.05102 69.2688 4.81787 70.2743 4.81787C71.2798 4.81787 72.1687 5.05102 72.941 5.51732C73.7133 5.98363 74.318 6.63936 74.7552 7.48454C75.1923 8.32971 75.4109 9.33518 75.4109 10.5009C75.4109 11.6521 75.1923 12.6576 74.7552 13.5173C74.318 14.3625 73.7133 15.0182 72.941 15.4845C72.1687 15.9508 71.2798 16.184 70.2743 16.184ZM70.2743 14.7414C70.9446 14.7414 71.5421 14.5884 72.0667 14.2824C72.6058 13.9763 73.0357 13.51 73.3563 12.8834C73.6769 12.2569 73.8372 11.4627 73.8372 10.5009C73.8372 9.52461 73.6769 8.73044 73.3563 8.11842C73.0357 7.49182 72.6058 7.02552 72.0667 6.71951C71.5421 6.4135 70.9446 6.26049 70.2743 6.26049C69.6186 6.26049 69.0211 6.4135 68.482 6.71951C67.9428 7.02552 67.5129 7.49182 67.1923 8.11842C66.8718 8.73044 66.7115 9.52461 66.7115 10.5009C66.7115 11.4627 66.8718 12.2569 67.1923 12.8834C67.5129 13.51 67.9428 13.9763 68.482 14.2824C69.0211 14.5884 69.6186 14.7414 70.2743 14.7414Z"
                      fill="white"
                    />
                    <path
                      d="M56.9275 16.1841C55.9949 16.1841 55.1643 15.9655 54.4357 15.5283C53.7217 15.0766 53.1607 14.4282 52.7527 13.583C52.3446 12.7232 52.1406 11.6886 52.1406 10.4792C52.1406 9.26969 52.3446 8.24237 52.7527 7.3972C53.1607 6.55202 53.7217 5.91086 54.4357 5.4737C55.1643 5.03654 55.9949 4.81796 56.9275 4.81796C57.8164 4.81796 58.545 4.99282 59.1133 5.34255C59.6816 5.69228 60.1042 6.15858 60.3811 6.74146V0.184082H61.9111V15.9218H60.7308L60.5122 14.195H60.3811C60.1042 14.807 59.667 15.2952 59.0696 15.6595C58.4867 16.0092 57.7727 16.1841 56.9275 16.1841ZM57.0368 14.7415C58.0131 14.7415 58.8146 14.3917 59.4412 13.6923C60.0678 12.9928 60.3811 11.9291 60.3811 10.501C60.3811 9.07297 60.0678 8.00922 59.4412 7.30977C58.8146 6.61031 58.0131 6.26058 57.0368 6.26058C56.0605 6.26058 55.259 6.61031 54.6324 7.30977C54.0058 8.00922 53.6925 9.07297 53.6925 10.501C53.6925 11.9291 54.0058 12.9928 54.6324 13.6923C55.259 14.3917 56.0605 14.7415 57.0368 14.7415Z"
                      fill="white"
                    />
                    <path
                      d="M40.1274 15.9218V0.184082H41.6575V9.69228L46.4007 5.08026H48.3679L43.3624 9.91086V10.042L48.958 15.9218H47.0564L41.6575 10.2387V15.9218H40.1274Z"
                      fill="white"
                    />
                    <path
                      d="M31.1304 16.184C30.1977 16.184 29.3526 15.9654 28.5948 15.5283C27.8371 15.0765 27.2324 14.4281 26.7806 13.5829C26.3289 12.7377 26.103 11.7104 26.103 10.5009C26.103 9.29146 26.3289 8.26414 26.7806 7.41896C27.2469 6.57379 27.8589 5.93262 28.6167 5.49547C29.3744 5.04374 30.2123 4.81787 31.1304 4.81787C32.4564 4.81787 33.4983 5.14574 34.256 5.80148C35.0283 6.45721 35.5238 7.32425 35.7424 8.40257H34.2123C34.0229 7.74683 33.6586 7.22953 33.1194 6.85066C32.5948 6.45721 31.9318 6.26049 31.1304 6.26049C30.5329 6.26049 29.9719 6.4135 29.4473 6.71951C28.9227 7.02552 28.4928 7.49182 28.1577 8.11842C27.8371 8.73044 27.6768 9.52461 27.6768 10.5009C27.6768 11.4627 27.8371 12.2641 28.1577 12.9053C28.4928 13.5319 28.9227 13.9982 29.4473 14.3042C29.9719 14.6102 30.5329 14.7632 31.1304 14.7632C31.9901 14.7632 32.675 14.5665 33.185 14.1731C33.695 13.765 34.0375 13.2405 34.2123 12.5993H35.7424C35.4801 13.7213 34.9482 14.6029 34.1467 15.2441C33.3599 15.8707 32.3544 16.184 31.1304 16.184Z"
                      fill="white"
                    />
                    <path
                      d="M16.9753 16.184C16.1155 16.184 15.4015 16.031 14.8332 15.725C14.2795 15.419 13.8642 15.0109 13.5873 14.5009C13.325 13.9909 13.1938 13.4372 13.1938 12.8397C13.1938 11.7031 13.6091 10.8579 14.4397 10.3042C15.2849 9.7359 16.3487 9.45175 17.631 9.45175H20.7348V9.25503C20.7348 8.23499 20.4871 7.46997 19.9917 6.95995C19.5108 6.43536 18.8186 6.17306 17.9152 6.17306C17.1574 6.17306 16.5308 6.34064 16.0354 6.67579C15.5545 6.99638 15.2485 7.5064 15.1173 8.20585H13.4999C13.5727 7.47725 13.8132 6.86523 14.2212 6.36978C14.6438 5.85976 15.1756 5.47361 15.8168 5.21131C16.458 4.94902 17.1574 4.81787 17.9152 4.81787C19.4306 4.81787 20.5308 5.23317 21.2157 6.06377C21.9152 6.8798 22.2649 7.94355 22.2649 9.25503V15.9217H20.9534L20.8004 14.1731H20.6693C20.3487 14.7122 19.9042 15.1858 19.3359 15.5938C18.7676 15.9873 17.9807 16.184 16.9753 16.184ZM17.2157 14.7851C17.9443 14.7851 18.5709 14.6029 19.0955 14.2386C19.6201 13.8743 20.0208 13.4007 20.2977 12.8179C20.5891 12.235 20.7348 11.623 20.7348 10.9818V10.7632H17.7403C16.662 10.7632 15.8969 10.9527 15.4452 11.3315C15.0081 11.7104 14.7895 12.1986 14.7895 12.796C14.7895 13.408 14.9935 13.8962 15.4015 14.2605C15.8095 14.6102 16.4142 14.7851 17.2157 14.7851Z"
                      fill="white"
                    />
                    <path
                      d="M4.98361 16.1841C4.13843 16.1841 3.41712 16.0092 2.81967 15.6595C2.23679 15.2952 1.80692 14.8143 1.53006 14.2169H1.39891L1.18033 15.9218H0V0.184082H1.53006V6.74146C1.82149 6.23144 2.26594 5.787 2.86339 5.40813C3.46084 5.01468 4.16758 4.81796 4.98361 4.81796C5.93078 4.81796 6.76138 5.03654 7.47541 5.4737C8.18944 5.91086 8.75046 6.55202 9.15847 7.3972C9.56649 8.24237 9.77049 9.26969 9.77049 10.4792C9.77049 11.6886 9.56649 12.7232 9.15847 13.583C8.75046 14.4282 8.18215 15.0766 7.45355 15.5283C6.73953 15.9655 5.91621 16.1841 4.98361 16.1841ZM4.87432 14.7415C5.85064 14.7415 6.6521 14.3917 7.27869 13.6923C7.90528 12.9928 8.21858 11.9291 8.21858 10.501C8.21858 9.07297 7.90528 8.00922 7.27869 7.30977C6.6521 6.61031 5.85064 6.26058 4.87432 6.26058C3.898 6.26058 3.09654 6.61031 2.46995 7.30977C1.84335 8.00922 1.53006 9.07297 1.53006 10.501C1.53006 11.9291 1.84335 12.9928 2.46995 13.6923C3.09654 14.3917 3.898 14.7415 4.87432 14.7415Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2108_23967">
                      <rect
                        width={141}
                        height={16}
                        fill="white"
                        transform="translate(0 0.184082)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="md:ms-10 grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">
                    Esplora
                  </h2>
                  <ul className="text-white font-light">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link One
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Two
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Three
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Four
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Two
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">
                    Scopri
                  </h2>
                  <ul className="text-white font-light">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link One
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Two
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Three
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Four
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Two
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">
                    Analizza
                  </h2>
                  <ul className="text-white font-light">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link One
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Two
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Three
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Four
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Link Two
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-[100%] md:w-[500px]">
              <h2 className="mb-6 text-sm font-semibold text-white">
                Iscriviti
              </h2>
              <p className="text-[16px] font-light">
                Iscriviti alla nostra newsletter e ricevi tutti gli
                aggiornamenti per primo.
              </p>

              <form className="flex mb-6 items-center max-w-lg mx-auto w-[100%] mt-10">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    className="bg-zinc-[#27272A] border-0 focus:shadow-lg text-sm rounded-[30px] block w-full  p-3  bg-zinc-800 text-white"
                    placeholder="Inserisci qui la tua mail."
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                  >
                    <svg
                      width={16}
                      height={17}
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.175 9.18408H0V7.18408H12.175L6.575 1.58408L8 0.184082L16 8.18408L8 16.1841L6.575 14.7841L12.175 9.18408Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <p className="text-[16px] font-light">
                By subscribing you agree to with our <u>Privacy Policy</u> and
                provide consent to receive updates from our company.
              </p>
            </div>
          </div>
          <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center">
              <span className="text-sm text-white sm:text-center">
                © 2024{" "}
                <a href="#" className="hover:underline">
                  backdoor
                </a>
                . All rights reserved.
              </span>
              <div>
                <a href="#" className="ms-5 underline text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="ms-5 underline text-sm">
                  Terms of Service
                </a>
                <a href="#" className="ms-5 underline text-sm">
                  Cookies Settings
                </a>
              </div>
            </div>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white ms-5"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white ms-5"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white ms-5"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white ms-5"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
