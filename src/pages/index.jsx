import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import PreviewLayout from '@layouts/Preview';
//= Components
import HomeITSolutionsOnePage from './home-it-solutions-onePage';

const LandingPreview = () => {
  useEffect(() => {
    document.body.classList.add('index-main');
    return () => document.body.classList.remove('index-main');
  }, []);

  return (
    <>
      <Head>
        <title>Gravity Labs</title>
      </Head>

      <HomeITSolutionsOnePage />
    </>
  )
}

export default LandingPreview;