import React from 'react';
import TealTriangle from '../common/decorations/TealTriangle';
import TealCircle from '../common/decorations/TealCircle';

export default function MembersHeroDecoration({ className }) {
  return (
    <div className={className}>
      <TealTriangle
        className={
          'hidden lg:block lg:absolute w-[35%] h-[35%] -right-[3.5rem] -top-[-1rem]'
        }
      />
      <TealTriangle
        className={
          'hidden lg:block lg:absolute w-[35%] h-[35%] -right-[3.5rem] -top-[-6rem]'
        }
      />
      <TealTriangle
        className={
          'hidden lg:block lg:absolute w-[35%] h-[35%] -right-[3.5rem] -top-[-11rem]'
        }
      />
      <TealTriangle
        className={
          'hidden lg:block lg:absolute w-[35%] h-[35%] -right-[3.5rem] -top-[-16rem]'
        }
      />
      <TealCircle
        className={
          'hidden lg:block lg:absolute w-[25%] h-[25%] -left-[4rem] -bottom-[2.5rem]'
        }
      />
      <TealCircle
        className={
          'hidden lg:block lg:absolute w-[15%] h-[15%] -left-[2rem] -bottom-[-5rem]'
        }
      />
      <TealCircle
        className={
          'hidden lg:block lg:absolute w-[18%] h-[18%] -left-[-3rem] -bottom-[-4rem]'
        }
      />
    </div>
  );
}
