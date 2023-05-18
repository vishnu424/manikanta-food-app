import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import TextInput from '@/components/common/TextInput/TextInput';
import CartIcon from '@/components/icons/CartIcon';
import LogoIcon from '@/components/icons/LogoIcon';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const GiftCard = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const amounts = ['50', '75', '100', '150', '200', 'Other'];

  const [selectedAmount, setSelectedAmount] = useState('');
  const [fromName, setFromName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [showAmount, setShowAmount] = useState(false);
  const [otherAmount, setOtherAmount] = useState(0);

  const handleClick = (value: string) => {
    setSelectedAmount(value);
    setShowAmount(false);
    if (value === 'Other') {
      setShowAmount(true);
    }
  };

  const handleChange = (keyName: string, value: string) => {
    if (keyName === 'fromName') {
      setFromName(value);
    } else if (keyName === 'recipientName') {
      setRecipientName(value);
    }
  };

  return (
    <Main meta={<Meta title="GiftCard" description="GiftCard" />}>
      <div className="container my-8 px-8">
        <h1 className="flex text-center font-jekoExtrabold leading-8 md:justify-center md:text-6xl lg:justify-start lg:leading-10">
          Purchase an E-Gift Card
        </h1>
        <h4 className="mt-3 flex text-center font-jekoSemibold text-xl leading-6 md:justify-center md:text-2xl md:leading-8 lg:w-2/4 lg:text-left">
          Why not surprise someone special with an online gift card to spend on
          a plan of their choice!
        </h4>
        <div className="mt-8 flex flex-col md:justify-between lg:flex-row">
          <div className="border-grey-dark md:border-r lg:w-1/2">
            <div className="font-jekoSemibold text-2xl">Amount</div>
            <div className="flex justify-center lg:justify-start">
              <div className="inline-grid grid-cols-3 gap-4 py-4 md:grid-cols-6">
                {amounts.map((amount, i) => {
                  return (
                    <div className="" key={i}>
                      <p
                        onClick={() => handleClick(amount)}
                        className={`flex w-full justify-center rounded-2xl font-jekoBold md:w-[64px] ${
                          selectedAmount === amount
                            ? 'bg-primary2 text-white'
                            : 'bg-grey-lite text-black'
                        }  cursor-pointer px-4 py-5`}
                      >
                        {amount !== 'Other' && '$'}
                        {amount}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {showAmount && (
              <div>
                <div className="pb-4 font-jekoBold text-sm text-black md:font-jekoSemibold md:text-lg">
                  Set your amount between $20 and $500
                </div>
                <div className="w-full md:w-2/4">
                  <TextInput
                    register={() =>
                      register('otherAmount', {
                        required: '*Please fill out this field.',
                        min: {
                          value: 20,
                          message: 'Value must be greater than or equal to 20.',
                        },
                        max: {
                          value: 500,
                          message: 'Value must be less than or equal to 500.',
                        },
                        pattern: {
                          value: /^[0-9][\d]*$/,
                          message:
                            'Please enter a valid value. The two nearest valid values are 44 and 45.',
                        },
                      })
                    }
                    type="number"
                    placeholder="0"
                    name="otherAmount"
                    label="Amount"
                    prefix="$"
                    error={errors.otherAmount?.message}
                    onChange={(event: any) =>
                      setOtherAmount(event.target.value)
                    }
                  />
                </div>
              </div>
            )}
            <div className="mt-5 h-auto w-auto rounded-2xl bg-gradient-to-r from-primary to-primary2 p-4 text-off-white md:w-[416px]">
              <div className="font-jekoBold text-base md:font-jekoMedium md:text-2xl">
                E-Gift Card
              </div>
              <div className="flex justify-center pt-10 font-jekoBold text-[44px] md:pt-20">
                ${selectedAmount !== 'Other' ? selectedAmount : otherAmount}
              </div>
              <div className="mr-2 mt-7 flex flex-row-reverse md:mt-20">
                <LogoIcon />
              </div>
            </div>
            <div className="pt-6 font-jekoMedium text-[26px] text-black md:font-jekoBold md:text-[28px]">
              Hi, {recipientName}
            </div>
            <div className="pt-2 font-jekoBold text-base text-black md:text-lg">
              You have received a $
              {selectedAmount !== 'Other' ? selectedAmount : otherAmount} E-Gift
              Card to <br></br> spend at My Muscle Chef from:&nbsp;
              {fromName}
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="pb-4 pt-8 font-jekoSemibold text-2xl text-black lg:pt-0">
                From
              </div>
              <TextInput
                register={() =>
                  register('firstLastName', {
                    required: '*Sender Name is required',
                  })
                }
                placeholder="John Smith"
                name="firstLastName"
                label="First and Last Name"
                error={errors.firstLastName?.message}
                onChange={(event: any) =>
                  handleChange('fromName', event.target.value)
                }
              />
              <div className="py-4 font-jekoSemibold text-2xl text-black">
                To
              </div>
              <TextInput
                register={() =>
                  register('recipientName', {
                    required: '*Reciepent Name is required',
                  })
                }
                placeholder="John Smith"
                name="recipientName"
                label="Recipient Name"
                error={errors.recipientName?.message}
                onChange={(event: any) =>
                  handleChange('recipientName', event.target.value)
                }
              />

              <TextInput
                register={() =>
                  register('recipientEmail', {
                    required: '*Reciepent Email is required',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Email must be valid',
                    },
                  })
                }
                placeholder="Recipient Email"
                name="recipientEmail"
                label="Recipient Email"
                error={errors.recipientEmail?.message}
              />

              <TextInput
                register={() =>
                  register('confirmEmail', {
                    required: '*Should match with Reciepent Email',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message:
                        'Email must be valid & should match Reciepent Email',
                    },
                    validate: (value) =>
                      value === getValues('recipientEmail') ||
                      '*Should match Reciepent Email',
                  })
                }
                placeholder="Confirm Email"
                name="confirmEmail"
                label="Confirm Email"
                error={errors.confirmEmail?.message}
              />
              <TextInput
                register={() => register('eGiftCard', { required: false })}
                placeholder="E-Gift Card Message (Optional)"
                name="eGiftCard"
                label="E-Gift Card Message (Optional)"
              />
              <div className="mt-6 flex flex-row justify-center">
                <Button type="submit" theme="primary">
                  <span className=" pr-2 font-jekoSemibold text-base">
                    Add to cart
                  </span>
                  <CartIcon />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default GiftCard;
