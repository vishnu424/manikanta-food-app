/* eslint-disable no-nested-ternary */
import 'react-sliding-pane/dist/react-sliding-pane.css';

import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';

import AuthContainer from '@/components/auth/AuthContainer/AuthContainer';
import CartContainer from '@/components/cart/CartContainer/CartContainer';
import CartHeader from '@/components/cart/CartHeader/CartHeader';
import { Modal } from '@/components/common/Modal/Modal';
import CartIcon from '@/components/icons/CartIcon';
import UserIcon from '@/components/icons/UserIcon';
import navLinks from '@/mock-data/nav-data.json';
import { useStore } from '@/models/root-store';

interface SlideProps extends React.ComponentPropsWithRef<'div'> {
  active?: boolean;
  linksArray?: {
    accessibilityText: string;
    relativePathLink: string;
    isModal?: boolean;
  }[];
}
interface MenuBarProps {
  onClick: () => void;
  value: boolean;
}
interface NavigationForMobileProps {
  isOpen: boolean;
  onClose?: () => void;
}
interface LinkProp extends React.ComponentPropsWithoutRef<'li'> {
  href: string;
  label: string;
}

function NavLink(props: LinkProp) {
  return (
    <li
      style={{ height: '70px' }}
      className="nav-links static"
      {...props}
      id={`id-${props.label}`}
    >
      <Link href={props.href}>
        <a
          style={{ height: '70px' }}
          className="flex items-center justify-center font-jekoBold capitalize"
          title={props.label !== 'Contact' ? props.label : ''}
        >
          {props.label}
        </a>
      </Link>
      {props.children}
    </li>
  );
}

const ContactSlide = ({ linksArray, ...rest }: SlideProps) => {
  return (
    <div
      className="contact-slide absolute top-0 left-0 z-20 m-0  flex  w-full flex-col items-center justify-center  p-4 tablet:hidden"
      {...rest}
    >
      <div className="contact-container container flex w-auto flex-col ">
        <ul className="contact-nav-list relative flex items-center gap-16">
          {linksArray?.map((data, index) => (
            <li key={index} className="mt-2">
              <Link href={data.relativePathLink}>{data.accessibilityText}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const UserSlide = observer(({ linksArray }: SlideProps) => {
  const { customerStore } = useStore();
  const { isLoggedIn } = customerStore;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onLogoutClick = () => {
    customerStore.logout();
  };
  return (
    <div className="user-slide absolute top-0 left-0 z-20 flex  w-full  flex-col items-center justify-center p-4 tablet:hidden">
      <div className="contact-container container flex w-auto flex-col ">
        <ul className="contact-nav-list relative flex items-center gap-16">
          {linksArray?.map((data, index) => {
            if (data.relativePathLink === '/logout' && !isLoggedIn) {
              return null;
            }
            if (data.relativePathLink === '/signin' && isLoggedIn) {
              return null;
            }
            return (
              <li key={index} className="mt-2">
                {data.isModal ? (
                  <a
                    className="cursor-pointer font-jekoBold font-semibold capitalize hover:text-red-600"
                    onClick={() => setIsAuthModalOpen(true)}
                  >
                    {data.accessibilityText}
                  </a>
                ) : data.relativePathLink === '/logout' ? (
                  <a
                    className="cursor-pointer font-jekoBold font-semibold capitalize hover:text-red-600"
                    onClick={onLogoutClick}
                  >
                    {data.accessibilityText}
                  </a>
                ) : (
                  <Link href={data.relativePathLink}>
                    <a className="cursor-pointer font-jekoBold font-semibold capitalize hover:text-red-600">
                      {data.accessibilityText}
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        isOpen={isAuthModalOpen}
        onRequestClose={() => setIsAuthModalOpen(false)}
      >
        <AuthContainer navigatedFrom="navbar" setIsOpen={setIsAuthModalOpen} />
      </Modal>
    </div>
  );
});

const MenuBar = ({ onClick, value }: MenuBarProps) => {
  return (
    <div className="hidden tablet:ml-2 tablet:flex  tablet:flex-none ">
      <span onClick={onClick} className="flex items-center justify-center">
        {value ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="#eee"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="#eee"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        )}
      </span>
    </div>
  );
};

const NavigationForMobile = React.forwardRef(
  ({ isOpen }: NavigationForMobileProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <React.Fragment>
        <div
          style={{
            transition: 'all 250ms ease',
            transform: `translateX(${isOpen ? '0%' : '-100%'})`,
            background: 'rgba(0,0,0,0.5)',
          }}
          className="mobile-600:h-auto mobile-600:bg-[#fff5f2] absolute left-0 z-50 mt-2 hidden h-full w-full bg-white mobile-425:m-0 tablet:flex"
        >
          <div ref={ref} className="slide-background  w-full">
            <ul className="flex flex-col">
              {navLinks.data.navbar.links.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link
                      key={index}
                      className=" "
                      href={data.relativePathLink}
                    >
                      <a className="p-4 pb-0">
                        {data.relativePathLink ? (
                          <li className="navigation-color-rhubarb flex items-center border-b border-gray-300 pb-4 font-semibold   hover:bg-gray-200">
                            {data.text}
                            {data.accessibilityText === 'Menu' && (
                              <span className="hidden rounded-md p-1 mobile-425:ml-4 mobile-425:flex mobile-425:border mobile-425:border-[#3E0719] mobile-425:text-xs mobile-425:font-bold ">
                                6 New Meals Added
                              </span>
                            )}
                          </li>
                        ) : null}
                      </a>
                    </Link>
                  </React.Fragment>
                );
              })}
            </ul>
            <ul className="flex flex-col">
              <Link href={'/'} className=" ">
                <a className="p-4 pb-0">
                  <li className="navigation-color-rhubarb flex items-center border-b border-gray-100 pb-4 font-semibold   hover:bg-gray-200">
                    Delivery Info
                  </li>
                </a>
              </Link>
              <Link href={'/'} className=" ">
                <a className="p-4 pb-0">
                  <li className="navigation-color-rhubarb flex items-center border-b border-gray-100 pb-4 font-semibold   hover:bg-gray-200">
                    FAQs
                  </li>
                </a>
              </Link>
              <Link href={'/'} className=" ">
                <a className="p-4 pb-0">
                  <li className="navigation-color-rhubarb flex items-center border-b border-gray-100 pb-4 font-semibold   hover:bg-gray-200">
                    Contact Us
                  </li>
                </a>
              </Link>
            </ul>
            <ul className="flex flex-col border-t border-gray-500">
              <Link href={`/signin/`}>
                <a>
                  <li className="navigation-color-rhubarb flex items-center  p-6 font-semibold   hover:bg-gray-200">
                    Log Out
                  </li>
                </a>
              </Link>
            </ul>
            <div className="flex flex-col gap-4  p-6">
              <h4 className=" navigation-color-rhubarb font-bold">
                Download Our App
              </h4>
              <div className="flex gap-2 ">
                <div>
                  <img
                    src="https://www.datocms-assets.com/81001/1666835650-download_on_the_app_store_badge_us-uk_rgb_blk_092917-1.png"
                    alt="app-store"
                  />
                </div>
                <div>
                  <img
                    src="https://www.datocms-assets.com/81001/1666835681-google-play-badge.png"
                    alt="play-store"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
);

NavigationForMobile.displayName = 'NavigationForMobile';

const Navbar = observer(() => {
  const {
    cartStore: { cart },
    generalStore: { config },
  } = useStore();
  const { subTotal, numberOfItems, isCartOpen, openCart, closeCart } = cart;
  const { MOV } = config;

  const [menuBar, setMenuBar] = React.useState(false);

  return (
    <div id="target-container">
      <nav className="navigation-rhubarb relative z-50 mx-auto flex flex-wrap items-center justify-between">
        <div className="container mx-auto flex flex-wrap items-center justify-between tablet:mx-0 tablet:px-0">
          <MenuBar value={menuBar} onClick={() => setMenuBar(!menuBar)} />
          <Link href="/">
            <div className="relative flex w-full cursor-pointer justify-between lg:static lg:block lg:w-auto lg:justify-start tablet:w-auto tablet:justify-center">
              <img
                src={navLinks.data.navbar.logo.url}
                alt={navLinks.data.navbar.logo.alt}
                width="100px"
                height="39px"
                className="tablet:h-10"
              />
            </div>
          </Link>
          <ul className="mt-4 flex flex-wrap  justify-between space-x-8 px-4 text-sm text-white sm:mt-0 tablet:hidden">
            {navLinks.data.navbar.links.map((l: any, i: React.Key) => {
              return (
                <NavLink key={i} href={l.relativePathLink} label={l.text}>
                  {l.text === 'Contact' && (
                    <ContactSlide
                      linksArray={
                        navLinks.data.navbar.links.find(
                          (d) => d.accessibilityText === 'Contact'
                        )?.subLinks as any
                      }
                    />
                  )}
                </NavLink>
              );
            })}
          </ul>

          <div className="text-sm text-white tablet:flex-1">
            <ul className="flex justify-between tablet:justify-end">
              <li
                style={{ height: '70px' }}
                className="user-account mr-5 tablet:mr-1"
              >
                <div
                  style={{ height: '70px' }}
                  className="relative flex cursor-pointer items-center justify-center"
                >
                  <UserIcon width={24} height={24} />
                </div>
                <UserSlide linksArray={navLinks.data.navbar.authLinks} />
              </li>
              <li style={{ height: '70px' }} className="mx-7 tablet:mx-4">
                <Link href="/checkout">
                  <div
                    style={{ height: '70px' }}
                    className="relative flex cursor-pointer items-center justify-center"
                    onClick={openCart}
                  >
                    <CartIcon width={24} height={24} />
                    <span className="absolute top-6 right-0 inline-flex h-6 w-6 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                      {numberOfItems || 0}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <NavigationForMobile isOpen={menuBar} />
      <SlidingPane
        className="!w-full md:max-w-[392px]"
        overlayClassName="z-50 !bg-black/80"
        isOpen={isCartOpen}
        title={<CartHeader total={subTotal} MOV={MOV}></CartHeader>}
        closeIcon={
          <Image
            src="/assets/images/svg/close.svg"
            alt="Close"
            width={13}
            height={13}
          />
        }
        onRequestClose={closeCart}
      >
        <CartContainer closeCart={closeCart} />
      </SlidingPane>
    </div>
  );
});
export default Navbar;
