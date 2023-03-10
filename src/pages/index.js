import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Card from '@site/src/components/Card';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header 
      // className={clsx('hero hero--primary', styles.heroBanner)}
      className="w-full max-w-[1194px] mx-auto my-[88px]"
    >
      <div className="container flex flex-col">
        <h1 className="hero__title">Documentation</h1>
        <p className="hero__subtitle">Locate the guides and information you need to build powerful Open Finance solutions with MX.</p>
        <div className="block">
          <Link
            className="button button--lg bg-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-primary-dark)] text-white"
            to="/intro">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='w-full max-w-[1194px] mx-auto mt-6'>
        <div className="grid grid-cols-3 gap-6 mb-14">
          <Card 
            link="/use-cases"
            Svg={require('@site/static/img/examine-doc.svg').default}
            title="Browse by use cases"
            description="Find the guide here for the use case you want to achieve."
          />
          <Card 
            link="/products"
            Svg={require('@site/static/img/phone.svg').default}
            title="Browse by products"
            description="Explore our products and find the guide you need to get started with."
          />
        </div>
      </main>
    </Layout>
  );
}
