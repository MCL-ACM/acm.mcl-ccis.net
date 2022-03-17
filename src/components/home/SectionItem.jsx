import * as React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'gatsby';
import Button from '../common/buttons/Button';
import SectionHeader from './SectionHeader';

export default function SectionItem({
  header,
  subheader,
  body,
  buttonText,
  buttonLink,
  align,
}) {
  const alignStyle = {
    left: 'text-left justify-items-start',
    right: 'text-right items-end',
  };

  return (
    <section className={`flex flex-col gap-4 ${alignStyle[align]}`}>
      <SectionHeader header={header} subheader={subheader} />
      <p className='text-xl font-light leading-relaxed text-rich-black'>
        {body}
      </p>
      <Link to={buttonLink}>
        <Button
          text={buttonText}
          color='bg-darkish-blue'
          textColor='text-white'
          icon={<FiArrowRight size='1.3em' />}
        />
      </Link>
    </section>
  );
}
