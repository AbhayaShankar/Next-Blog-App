import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-utils";
import Head from "next/head";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Abhaya's Blog</title>
        <meta
          name="description"
          content="A blog app for developers starting out to web development. here I share blogs related to CSS, JS, React Js and NEXT Js"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 6000,
  };
}

export default HomePage;
