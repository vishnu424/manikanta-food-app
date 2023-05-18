import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import TextInput from '@/components/common/TextInput/TextInput';
import { DELIVERY_INFO_SELECTOR } from '@/graphql/selectors';
import type { DeliveryInfoModelType } from '@/models/api';
import { useQuery } from '@/models/reactUtils';

type PostcodeEntryType = {
  register: any;
  handleClick: (props: any) => void;
};

const PostcodeEntry: React.FC<PostcodeEntryType> = observer(
  ({ register, handleClick }: PostcodeEntryType) => {
    const { setQuery, loading, error, data } = useQuery();
    const [lookup, setLookup] = useState('');

    useEffect(() => {
      if (lookup.length > 3) {
        setQuery((store: any) =>
          store.api.queryDeliveryInfo({ lookup }, DELIVERY_INFO_SELECTOR)
        );
      }
    }, [lookup]);

    const postalData = ((data as any)?.deliveryInfo ||
      []) as DeliveryInfoModelType[];

    return (
      <>
        <div className="mt-5 flex flex-col items-center">
          <Image
            src="/assets/images/svg/delivery.svg"
            alt="delivery car"
            width={85}
            height={46}
          />
          <h3 className="pt-2.5 text-center font-jekoBold text-sm leading-5 text-black md:text-lg md:leading-7 lg:max-w-[256px] ">
            Enter your postcode to find <br></br>the earliest delivery date
          </h3>
        </div>
        <div className="flex flex-col items-center justify-end p-6">
          <div className="relative ">
            <TextInput
              placeholder="Enter your postcode"
              label="Postcode"
              name="postcode"
              register={() => register('postcode')}
              onChange={(event: any) => setLookup(event.target.value)}
            />
            <ul className="absolute z-10 w-[200px] whitespace-nowrap bg-white px-3 pb-3 text-left font-jekoSemibold text-xs">
              {postalData &&
                postalData.length > 0 &&
                lookup.length > 3 &&
                postalData.map((item: any) => (
                  <li
                    className={'leading-4 md:leading-loose'}
                    key={item.name}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    {item.name}, {item.state} {item.postcode}
                  </li>
                ))}
            </ul>
          </div>
          <div className="z-10 flex flex-col justify-center text-center">
            {lookup.length < 4 && (
              <div className="hidden text-sm lg:block">
                Please enter minimum of 4 characters
              </div>
            )}
            {loading && <p>Loading...</p>}
            {error && lookup.length > 3 && (
              <p>
                Sorry, we currently do not deliver <br></br>to you just yet!
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
);

export default PostcodeEntry;
