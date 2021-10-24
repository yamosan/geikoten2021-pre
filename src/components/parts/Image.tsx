import React from "react";
import NextImage from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const customLoader = ({ src }) => src;

const Image: typeof NextImage = (props) => {
  const url = props.src?.startsWith("/") ? `${basePath || ""}${props.src}` : props.src;
  return <NextImage {...props} src={url} loader={customLoader} unoptimized />;
};

export default Image;
