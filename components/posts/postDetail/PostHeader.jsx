import React from "react";
import classes from "./PostHeader.module.css";
import Image from "next/image";

const PostHeader = ({ image, title }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={800} height={800} />
    </header>
  );
};

export default PostHeader;
