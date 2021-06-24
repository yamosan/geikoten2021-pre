import React, { VFC } from "react";
import Heading from "components/parts/Heading";

type Props = {
  heading: string;
  children: React.ReactNode;
};

const Section: VFC<Props> = ({ heading, children }) => {
  return (
    <section className="">
      <Heading>{heading}</Heading>
      <div className="mt-5">{children}</div>
    </section>
  );
};

export default Section;
