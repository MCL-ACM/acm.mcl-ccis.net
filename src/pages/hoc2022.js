import React, { useEffect, useState } from 'react';
import Content from '../components/hoc2022/Content';
import Button from '../components/hoc2022/Button';
import Card from '../components/hoc2022/Card';
import Navigation from '../components/hoc2022/Navigation';
import Introduction from '../components/hoc2022/content/Introduction';
import HelloProgramming from '../components/hoc2022/content/HelloProgramming';
import HowWell from '../components/hoc2022/content/HowWell';
import GuessNumber from '../components/hoc2022/content/GuessNumber';
import OddEvenZero from '../components/hoc2022/content/OddEvenZero';
import Outro from '../components/hoc2022/content/Outro';
import Head from '../components/common/Head';

export default function IndexPage() {
  const [page, setPage] = useState(0);

  const cards = [
    'Introduction',
    'Hello, Programming',
    'How Well Do You Know Me',
    'Guess the Number',
    'Outro',
  ];

  const contents = [
    <Introduction />,
    <HelloProgramming />,
    <HowWell />,
    <GuessNumber />,
    <Outro />,
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  const nextPage = () => {
    if (page + 1 >= cards.length) {
      return;
    }
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page - 1 < 0) {
      return;
    }
    setPage(page - 1);
  };

  return (
    <div className='flex flex-col w-full h-full bg-gray-100 min-h-screen'>
      <Head title='Hour of Code 2022' />

      {/** Navigation Bar */}
      <Navigation />
      <div className='flex flex-row grow max-w-6xl w-6xl mx-auto gap-3'>
        {/** Navigation Cards */}
        <div className='flex flex-col gap-1 w-80'>
          {cards.map((text, number) => (
            <Card
              number={number}
              text={text}
              onClick={() => setPage(number)}
              active={page === number}
            />
          ))}
        </div>

        <div className='flex flex-col relative w-full h-full justify-self-stretch'>
          {/** Content */}
          <div className='grow justify-self-around mx-auto max-w-2xl w-2xl'>
            <p className='text-center text-4xl text-gray-700 mb-10'>
              Hello Programming 2022
            </p>
            <Content
              title={`${page.toString()}. ${cards[page]}`}
              statement={contents[page]}
            />
          </div>

          {/** Buttons */}
          <div className='my-16 bottom-52 flex flex-row w-full px-8'>
            {page - 1 >= 0 && <Button text='Back' onClick={previousPage} />}
            <div className='grow' />
            {page + 1 < cards.length && (
              <Button text='Next' onClick={nextPage} type='NEXT' />
            )}
            {/** Next */}
          </div>
        </div>
      </div>
    </div>
  );
}
