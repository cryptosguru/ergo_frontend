import { useIntl } from 'react-intl';
import Layout from '../components/Layout';

export default function MobileWallets() {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.mobile-wallets',
    defaultMessage: 'Mobile Wallets',
  });

  return (
    <div className="overflow-hidden">
      <Layout title={title}>
        <div className="relative bg-white dark:bg-brand-black overflow-hidden mt-10 lg:mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white dark:bg-brand-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-0 mx-auto max-w-7xl px-6 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Ergo Mobile Wallet</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Official Ergo Mobile Wallet for Android and iOS. Lightweight and simple to use.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=org.ergoplatform.android"
                      className="flex text-base font-medium rounded-2xl text-white md:text-lg"
                      rel="noreferrer"
                    >
                      <img src="/assets/google.svg" alt="" />
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.apple.com/app/terminus-wallet-ergo/id1643137927"
                      className="flex text-base font-medium rounded-2xl text-white md:text-lg ml-0 lg:ml-2 mt-4 lg:mt-0"
                      rel="noreferrer"
                    >
                      <img src="/assets/appstore.svg" alt="" />
                    </a>
                  </div>
                  <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                    Sources available on{' '}
                    <a
                      className="text-red-500 dark:text-red-500"
                      href="https://github.com/ergoplatform/ergo-wallet-android"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
            <div className="flex justify-center">
              <img style={{ maxHeight: '450px' }} src="/assets/application.png" alt="" />
            </div>
          </div>
        </div>

        <div className="py-10 lg:py-16 bg-gray-100 dark:bg-red-500">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What this wallet can
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Besides receiving, sending and storing ERGs, you can do a lot more...
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white ">
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00074 9.0625C9.00074 9.31114 9.09952 9.5496 9.27533 9.72541C9.45115 9.90123 9.6896 10 9.93824 10C10.1869 10 10.4253 9.90123 10.6012 9.72541C10.777 9.5496 10.8757 9.31114 10.8757 9.0625C10.8757 8.81386 10.777 8.5754 10.6012 8.39959C10.4253 8.22377 10.1869 8.125 9.93824 8.125C9.6896 8.125 9.45115 8.22377 9.27533 8.39959C9.09952 8.5754 9.00074 8.81386 9.00074 9.0625ZM17.6023 17.3336L13.3203 6.25V2.17188H15.0007V0.578125H3.00074V2.17188H4.68121V6.25L0.399182 17.3336C0.333557 17.507 0.298401 17.6898 0.298401 17.875C0.298401 18.7023 0.971057 19.375 1.7984 19.375H16.2031C16.3882 19.375 16.5711 19.3398 16.7445 19.2742C17.5179 18.9766 17.9023 18.107 17.6023 17.3336ZM6.27496 6.54766V2.21875H11.7265V6.54766L13.857 12.0625C13.3718 11.9383 12.8703 11.875 12.3593 11.875C10.925 11.875 9.56559 12.3789 8.48512 13.2812C7.68768 13.9474 6.68122 14.3117 5.64215 14.3102C4.87574 14.3102 4.13981 14.1156 3.49059 13.7547L6.27496 6.54766ZM1.93434 17.7812L2.91168 15.2547C3.7484 15.6789 4.67887 15.9062 5.64449 15.9062C7.07887 15.9062 8.43824 15.4023 9.51871 14.5C10.3132 13.8391 11.307 13.4711 12.3617 13.4711C13.182 13.4711 13.9648 13.6938 14.6492 14.1063L16.0672 17.7812H1.93434Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Assets support
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-red-100">
                    You can use this wallet to receive tokens and NFTs.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5371 1.92734C15.5084 1.91289 15.4765 1.90604 15.4444 1.90747C15.4123 1.90889 15.3811 1.91854 15.3538 1.93548C15.3265 1.95242 15.304 1.97608 15.2885 2.00421C15.273 2.03233 15.265 2.06397 15.2652 2.09609V3.60078C15.2652 3.72969 15.3332 3.84922 15.441 3.91953C15.9695 4.2522 16.4586 4.64376 16.8988 5.08672C17.6652 5.85547 18.2675 6.74844 18.6871 7.74219C19.1209 8.77093 19.3433 9.87648 19.341 10.993C19.341 12.1203 19.1207 13.2148 18.6871 14.2438C18.268 15.2361 17.6607 16.1378 16.8988 16.8992C16.1394 17.6631 15.2381 18.2713 14.2457 18.6898C13.2191 19.1258 12.1246 19.3461 10.9996 19.3461C9.87457 19.3461 8.78004 19.1258 7.75347 18.6898C6.76099 18.2713 5.85975 17.6631 5.10035 16.8992C4.3384 16.1378 3.73112 15.2361 3.31207 14.2438C2.8782 13.215 2.65581 12.1095 2.65816 10.993C2.65816 9.86563 2.87847 8.77109 3.31207 7.74219C3.7316 6.74844 4.33394 5.85547 5.10035 5.08672C5.54566 4.64141 6.03316 4.25234 6.55816 3.91953C6.66832 3.85156 6.73394 3.72969 6.73394 3.60078V2.09375C6.73394 1.95312 6.58629 1.86406 6.46207 1.925C3.18316 3.575 0.921443 6.95234 0.874568 10.8664C0.808943 16.4633 5.38629 21.1133 10.9808 21.125C16.5824 21.1367 21.1246 16.5945 21.1246 10.9906C21.1246 7.025 18.8511 3.59141 15.5371 1.92734ZM10.2496 12.125H11.7496C11.8527 12.125 11.9371 12.0406 11.9371 11.9375V1.0625C11.9371 0.959375 11.8527 0.875 11.7496 0.875H10.2496C10.1464 0.875 10.0621 0.959375 10.0621 1.0625V11.9375C10.0621 12.0406 10.1464 12.125 10.2496 12.125Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Generate offline wallets{' '}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-red-100">
                    Use this wallet to generate cold wallets by keeping your device in flight mode.
                    You can restore your funds with every other{' '}
                    <a
                      className="text-red-500"
                      href="https://github.com/ergoplatform/eips/blob/master/eip-0003.md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      EIP3
                    </a>{' '}
                    compliant wallet application.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.75 0.28125H1.25C0.835156 0.28125 0.5 0.616406 0.5 1.03125V12.6562C0.5 13.0711 0.835156 13.4062 1.25 13.4062H10.1562V16.0312H6.125C5.91875 16.0312 5.75 16.2 5.75 16.4062V17.5312C5.75 17.6344 5.83437 17.7188 5.9375 17.7188H16.0625C16.1656 17.7188 16.25 17.6344 16.25 17.5312V16.4062C16.25 16.2 16.0813 16.0312 15.875 16.0312H11.8438V13.4062H20.75C21.1648 13.4062 21.5 13.0711 21.5 12.6562V1.03125C21.5 0.616406 21.1648 0.28125 20.75 0.28125ZM19.8125 11.7188H2.1875V1.96875H19.8125V11.7188Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Watch wallets
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-red-100">
                    Add wallets without your seed in read-only mode. You won&apos;t be able to send,
                    but you can keep an eye on your funds. Lightning fast, and with a fiat
                    comparison currency of your choice.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.96875 0H0.75C0.335156 0 0 0.335156 0 0.75V7.96875C0 8.07187 0.084375 8.15625 0.1875 8.15625H7.96875C8.07187 8.15625 8.15625 8.07187 8.15625 7.96875V0.1875C8.15625 0.084375 8.07187 0 7.96875 0ZM6.65625 6.65625H1.5V1.5H6.65625V6.65625ZM3.42188 4.92188H4.73438C4.8375 4.92188 4.92188 4.8375 4.92188 4.73438V3.42188C4.92188 3.31875 4.8375 3.23438 4.73438 3.23438H3.42188C3.31875 3.23438 3.23438 3.31875 3.23438 3.42188V4.73438C3.23438 4.8375 3.31875 4.92188 3.42188 4.92188ZM7.96875 9.84375H0.1875C0.084375 9.84375 0 9.92813 0 10.0312V17.25C0 17.6648 0.335156 18 0.75 18H7.96875C8.07187 18 8.15625 17.9156 8.15625 17.8125V10.0312C8.15625 9.92813 8.07187 9.84375 7.96875 9.84375ZM6.65625 16.5H1.5V11.3438H6.65625V16.5ZM3.42188 14.7656H4.73438C4.8375 14.7656 4.92188 14.6812 4.92188 14.5781V13.2656C4.92188 13.1625 4.8375 13.0781 4.73438 13.0781H3.42188C3.31875 13.0781 3.23438 13.1625 3.23438 13.2656V14.5781C3.23438 14.6812 3.31875 14.7656 3.42188 14.7656ZM17.25 0H10.0312C9.92813 0 9.84375 0.084375 9.84375 0.1875V7.96875C9.84375 8.07187 9.92813 8.15625 10.0312 8.15625H17.8125C17.9156 8.15625 18 8.07187 18 7.96875V0.75C18 0.335156 17.6648 0 17.25 0ZM16.5 6.65625H11.3438V1.5H16.5V6.65625ZM13.2656 4.92188H14.5781C14.6812 4.92188 14.7656 4.8375 14.7656 4.73438V3.42188C14.7656 3.31875 14.6812 3.23438 14.5781 3.23438H13.2656C13.1625 3.23438 13.0781 3.31875 13.0781 3.42188V4.73438C13.0781 4.8375 13.1625 4.92188 13.2656 4.92188ZM17.8125 9.84375H16.6875C16.5844 9.84375 16.5 9.92813 16.5 10.0312V13.1719H14.6719V10.0312C14.6719 9.92813 14.5875 9.84375 14.4844 9.84375H10.0312C9.92813 9.84375 9.84375 9.92813 9.84375 10.0312V17.8125C9.84375 17.9156 9.92813 18 10.0312 18H11.1562C11.2594 18 11.3438 17.9156 11.3438 17.8125V12.0938H13.1719V14.4844C13.1719 14.5875 13.2563 14.6719 13.3594 14.6719H17.8125C17.9156 14.6719 18 14.5875 18 14.4844V10.0312C18 9.92813 17.9156 9.84375 17.8125 9.84375ZM14.4844 16.5H13.3594C13.2563 16.5 13.1719 16.5844 13.1719 16.6875V17.8125C13.1719 17.9156 13.2563 18 13.3594 18H14.4844C14.5875 18 14.6719 17.9156 14.6719 17.8125V16.6875C14.6719 16.5844 14.5875 16.5 14.4844 16.5ZM17.8125 16.5H16.6875C16.5844 16.5 16.5 16.5844 16.5 16.6875V17.8125C16.5 17.9156 16.5844 18 16.6875 18H17.8125C17.9156 18 18 17.9156 18 17.8125V16.6875C18 16.5844 17.9156 16.5 17.8125 16.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Scan QR codes
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-red-100">
                    Scan payment QR codes from other users or websites for a satisfying sending
                    experience.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="py-10 lg:py-16 bg-white dark:bg-brand-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What this wallet is
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1.5L3 4.5V13.5C3 18.4711 7.02891 22.5 12 22.5C16.9711 22.5 21 18.4711 21 13.5V4.5L12 1.5ZM19.3125 13.5C19.3125 17.5383 16.0383 20.8125 12 20.8125C7.96172 20.8125 4.6875 17.5383 4.6875 13.5V5.76562L12 3.1875L19.3125 5.76562V13.5Z"
                          fill="white"
                        />
                        <path
                          d="M8.86919 11.1351C8.79098 11.0566 8.69803 10.9942 8.59567 10.9517C8.49331 10.9092 8.38355 10.8873 8.2727 10.8873C8.16185 10.8873 8.05209 10.9092 7.94973 10.9517C7.84737 10.9942 7.75442 11.0566 7.67621 11.1351C7.59765 11.2133 7.53531 11.3063 7.49278 11.4087C7.45024 11.511 7.42834 11.6208 7.42834 11.7316C7.42834 11.8425 7.45024 11.9522 7.49278 12.0546C7.53531 12.157 7.59765 12.2499 7.67621 12.3281L10.709 15.3609L10.7583 15.4101C10.8322 15.4842 10.9201 15.543 11.0168 15.5832C11.1135 15.6233 11.2172 15.6439 11.3219 15.6439C11.4266 15.6439 11.5303 15.6233 11.627 15.5832C11.7238 15.543 11.8116 15.4842 11.8856 15.4101L17.1239 10.1719C17.198 10.0979 17.2568 10.01 17.2969 9.91332C17.337 9.81659 17.3577 9.71291 17.3577 9.6082C17.3577 9.50349 17.337 9.39981 17.2969 9.30309C17.2568 9.20636 17.198 9.1185 17.1239 9.04453L17.0583 8.97891C16.9843 8.9048 16.8964 8.846 16.7997 8.80588C16.703 8.76577 16.5993 8.74512 16.4946 8.74512C16.3899 8.74512 16.2862 8.76577 16.1895 8.80588C16.0928 8.846 16.0049 8.9048 15.9309 8.97891L11.3208 13.5867L8.86919 11.1351Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-white">
                    Your secrets are stored password-encrypted or authentication-protected. Every
                    code change on the project is audited by an Ergo core team member.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9906 0.787599C5.19453 0.785255 0.5 5.47744 0.5 11.2688C0.5 15.8485 3.43672 19.7415 7.52656 21.1712C8.07734 21.3095 7.99297 20.9181 7.99297 20.6509V18.8345C4.8125 19.2071 4.68359 17.1024 4.47031 16.7509C4.03906 16.0149 3.01953 15.8274 3.32422 15.4759C4.04844 15.1032 4.78672 15.5696 5.64219 16.8329C6.26094 17.7493 7.46797 17.5946 8.07969 17.4423C8.21328 16.8915 8.49922 16.3993 8.89297 16.0173C5.59766 15.4267 4.22422 13.4157 4.22422 11.0251C4.22422 9.86494 4.60625 8.79854 5.35625 7.93838C4.87812 6.52041 5.40078 5.30635 5.47109 5.12588C6.83281 5.004 8.24844 6.10088 8.35859 6.1876C9.13203 5.97901 10.0156 5.86885 11.0047 5.86885C11.9984 5.86885 12.8844 5.98369 13.6648 6.19463C13.9297 5.99307 15.2422 5.05088 16.5078 5.16572C16.5758 5.34619 17.0867 6.53213 16.6367 7.93135C17.3961 8.79385 17.7828 9.86963 17.7828 11.0321C17.7828 13.4274 16.4 15.4407 13.0953 16.022C13.3784 16.3003 13.6031 16.6323 13.7564 16.9985C13.9098 17.3647 13.9886 17.7578 13.9883 18.1548V20.7915C14.007 21.0024 13.9883 21.211 14.3398 21.211C18.4906 19.8118 21.4789 15.8907 21.4789 11.2712C21.4789 5.47744 16.782 0.787599 10.9906 0.787599Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Open Source</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-white">
                    Check out the{' '}
                    <a
                      className="text-red-500 dark:text-red-500"
                      href="https://github.com/ergoplatform/ergo-wallet-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>{' '}
                    project.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Community backed
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-white">
                    Visit the{' '}
                    <a
                      className="text-red-500 dark:text-red-500"
                      href="https://discord.gg/kj7s7nb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ergo Discord
                    </a>{' '}
                    or{' '}
                    <a
                      className="text-red-500 dark:text-red-500"
                      href="https://t.me/ergoplatform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Telegram
                    </a>{' '}
                    support group to get help.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.875H14.9062V3.625C14.9062 1.96797 13.5633 0.625 11.9062 0.625H6.09375C4.43672 0.625 3.09375 1.96797 3.09375 3.625V8.875H1.5C1.08516 8.875 0.75 9.21016 0.75 9.625V18.625C0.75 19.0398 1.08516 19.375 1.5 19.375H16.5C16.9148 19.375 17.25 19.0398 17.25 18.625V9.625C17.25 9.21016 16.9148 8.875 16.5 8.875ZM4.78125 3.625C4.78125 2.90078 5.36953 2.3125 6.09375 2.3125H11.9062C12.6305 2.3125 13.2188 2.90078 13.2188 3.625V8.875H4.78125V3.625ZM15.5625 17.6875H2.4375V10.5625H15.5625V17.6875ZM8.34375 14.4297V15.6719C8.34375 15.775 8.42812 15.8594 8.53125 15.8594H9.46875C9.57187 15.8594 9.65625 15.775 9.65625 15.6719V14.4297C9.84972 14.2908 9.99413 14.0941 10.0687 13.8679C10.1432 13.6417 10.1441 13.3977 10.0711 13.1709C9.99818 12.9442 9.85516 12.7465 9.66268 12.6062C9.47019 12.466 9.23817 12.3904 9 12.3904C8.76183 12.3904 8.52981 12.466 8.33732 12.6062C8.14484 12.7465 8.00182 12.9442 7.92886 13.1709C7.8559 13.3977 7.85676 13.6417 7.93132 13.8679C8.00588 14.0941 8.15028 14.2908 8.34375 14.4297Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Ergo Foundation backed
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    <a
                      className="text-red-500 dark:text-red-500"
                      href="https://ergoplatform.org/en/blog/2021-07-29-ergo-for-android-released/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The wallet started as a community developer project and is now backed by Ergo
                      Foundation.
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="pb-10 py-10 lg:py-16 lg:pb-24 bg-red-600">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                In constant development
              </p>
              <p className="pt-3 mb-1 lg:text-lg text-gray-100  text-sm">
                ERGO provides much. We are working to get more and more of its features available in
                the app.{' '}
              </p>
              <p className="lg:text-lg text-gray-100 text-sm">
                Be the first to get new features by joining the open beta on Google Play!{' '}
              </p>

              <div className="sm:flex sm:justify-center  mt-10">
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=org.ergoplatform.android"
                  className="flextext-base font-medium rounded-2xl text-white md:text-lg"
                  rel="noreferrer"
                >
                  <img src="/assets/google.svg" alt="Android logotype" />
                </a>
                <a
                  target="_blank"
                  href="https://apps.apple.com/app/terminus-wallet-ergo/id1643137927"
                  className="flex text-base font-medium rounded-2xl text-white md:text-lg ml-0 lg:ml-2 mt-4 lg:mt-0"
                  rel="noreferrer"
                >
                  <img src="/assets/appstore.svg" alt="Ios logotype" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
