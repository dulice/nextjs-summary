import React from "react";
import Head from 'next/head';
import Footer from 'components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>Blog | About</title>
      </Head>
      <div>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          enim itaque modi eum facilis dolorem, mollitia pariatur dolore sequi
          voluptate corporis exercitationem fuga quos necessitatibus sit, rerum
          quo natus sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          enim itaque modi eum facilis dolorem, mollitia pariatur dolore sequi
          voluptate corporis exercitationem fuga quos necessitatibus sit, rerum
          quo natus sint.
        </p>
      </div>
    </>
  );
};

export default About;

About.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
)
