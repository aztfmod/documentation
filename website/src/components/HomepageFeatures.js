import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Configuration-driven IaC',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Spend your time deploying what you need on Azure, not writing IaC modules.
      </>
    ),
  },
  {
    title: 'Empowering the SRE on Azure',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We equip the Site Reliability Engineering on Azure providing community-driven and built artifacts.
      </>
    ),
  },
  {
    title: 'DevOps by nature',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Whichever DevOps tools you are using, we have you covered.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
