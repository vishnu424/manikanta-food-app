import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ArrowDown from '@/components/icons/ArrowDown';
import { useMediaQuery } from '@/hooks';
import data from '@/mock-data/footer-data.json';

interface AdditionalLinksTypes {
  id: string;
  accessibilityText: string;
  externalLink: string;
  internalLink: string;
  text: string;
}

const downloadApp = {
  data: {
    downloadApp: {
      text: 'Download Our App',
      downloadButtons: [
        {
          externalLink: '',
          image: {
            url: 'https://www.datocms-assets.com/81001/1666835650-download_on_the_app_store_badge_us-uk_rgb_blk_092917-1.png',
          },
        },
        {
          externalLink: '',
          image: {
            url: 'https://www.datocms-assets.com/81001/1666835681-google-play-badge.png',
          },
        },
      ],
    },
  },
};

function NavLink(props: any) {
  const { sectionData } = props;
  return (
    <>
      {sectionData.sectionLinks.map((item: any, index: React.Key) => {
        return item.accessibilityText ? (
          <ul className="flex flex-col text-xs" key={index}>
            <li className="hover:text flex items-center font-bold hover:text-[#d8173c] hover:underline hover:transition-all">
              {item.internalLink ? (
                <Link href={item.internalLink}>{item.text}</Link>
              ) : (
                <a href={item.externalLink}>{item.text}</a>
              )}
            </li>
          </ul>
        ) : null;
      })}
    </>
  );
}

const DropdownLink = ({ item }: any) => {
  const [dropdown, setDropdown] = React.useState(false);

  const breakLine = React.useMemo(() => {
    if (!item.sectionLinks) {
      return item?.text?.split('\n')?.map((text: string, index: string) => (
        <li className="list-none font-bold" key={index}>
          {text}
        </li>
      ));
    }
    return null;
  }, [item]);

  const media = useMediaQuery(`(max-width:768px)`);
  // eslint-disable-next-line no-nested-ternary
  const maxHeight = media ? (dropdown ? '400px' : 'auto') : 'auto';

  return (
    <React.Fragment>
      <div
        className="my-4 flex  justify-between font-jekoBold text-base tablet-768:my-0 tablet-768:border-b tablet-768:border-gray-300 tablet-768:py-2"
        onClick={() => setDropdown(!dropdown)}
      >
        <span>{item.sectionName}</span>
        <span className="hidden tablet-768:flex">
          <ArrowDown
            fill="#222"
            style={{
              transition: 'all 200ms ease',
              transform: `rotate(${dropdown ? '180deg' : '0deg'})`,
            }}
          />
        </span>
      </div>
      <div
        style={{
          maxHeight,
          transition: 'all 400ms ease-in',
        }}
        className={`text-xs text-gray-900 tablet-768:mt-2 tablet-768:max-h-0 tablet-768:overflow-hidden `}
      >
        {item.sectionLinks && item.sectionLinks.length > 0 ? (
          <NavLink key={item.sectionName} sectionData={item} />
        ) : (
          breakLine
        )}
        {item?.additionalLinks && (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <div className="height-[1px] my-[16px] bg-slate-600 p-[1px]">
            <div></div>
          </div>
        )}
        {item?.additionalLinks &&
          item?.additionalLinks.map((t: AdditionalLinksTypes, i: number) => {
            return (
              <ul className="flex list-none flex-col text-xs" key={i}>
                <li className="footer-nav-links flex items-center font-bold">
                  {t.internalLink ? (
                    <Link href={t.internalLink}>{t.text}</Link>
                  ) : (
                    <a href={t.externalLink}>{t.text}</a>
                  )}
                </li>
              </ul>
            );
          })}
      </div>
    </React.Fragment>
  );
};
function FooterSection(props: any) {
  const { footerSection } = props;

  return (
    <div key={footerSection.id} className="flex flex-col tablet-768:order-2">
      {footerSection && footerSection.length > 0
        ? footerSection.map((item: any, i: number) => {
            return (
              <React.Fragment key={i}>
                <DropdownLink item={item} />
              </React.Fragment>
            );
          })
        : null}
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-background mx-auto px-2  py-4  text-black shadow md:flex md:justify-between md:p-8 tablet-768:flex tablet-768:flex-col tablet:p-4">
        <div className="my-4  tablet-768:order-5 tablet-768:flex tablet-768:flex-col tablet-768:items-center tablet-768:justify-center">
          <Image
            style={{ color: 'white' }}
            src={data.data.footer.brandLogo.url}
            alt={data.data.footer.brandLogo.alt}
            width={90}
            height={60}
          />
          <ul className="text-xs font-bold text-black tablet-768:hidden">
            <li>ABN 92 162 190 070</li>
            <li>PO BOX 205</li>
            <li>FAIRFIELD NSW 1860</li>
            <li>1300 364 993</li>
          </ul>
        </div>
        {data.data.footer.footerSections.map((l: any, i: number) => {
          return <FooterSection key={i} footerSection={l.footerSection} />;
        })}
        <div className="tablet-768:order-1 tablet-768:flex tablet-768:flex-col tablet-768:items-center ">
          <div className="my-4 font-jekoBold text-base">
            {downloadApp.data.downloadApp.text.toLocaleUpperCase()}
          </div>
          <ul className="text-xs   tablet-768:flex tablet-768:gap-8 tablet-768:p-4">
            {downloadApp.data.downloadApp.downloadButtons.map(
              (d: any, i: number) => {
                return (
                  <li key={i}>
                    <Link
                      href={d.externalLink}
                      className="tablet-768:flex tablet-768:items-center"
                    >
                      <a>
                        <Image
                          width={120}
                          height={40}
                          alt={d.image.url}
                          src={d.image.url}
                          objectFit="contain"
                        />
                      </a>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
      <div className=" footer-background items-center  justify-between bg-white px-2 py-3 shadow md:flex md:p-6">
        <ul className="flex items-center tablet-768:py-3">
          {data.data.footer.paymentIcons.map((l: any, i) => {
            const style = {
              height: i === 5 ? '40px' : '50px',
            };
            return (
              <li key={i} className="mx-4">
                <img height={style.height} alt={l.alt} src={l.url} />
              </li>
            );
          })}
        </ul>
        <p className="text-sm text-gray-400 tablet-768:py-2 tablet-768:text-center tablet-768:text-xs">
          Copyright © 2013 - 2022 My Muscle Chef Pty Ltd(MYMC). All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
