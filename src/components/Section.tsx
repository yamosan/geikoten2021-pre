import React, { VFC } from "react";
import Heading from "components/parts/Heading";

type Props = {
  heading: string;
  className: string;
  children: React.ReactNode;
} & JSX.IntrinsicElements["section"];

const Section: VFC<Props> = ({ heading, className, children, ...rest }) => {
  return (
    <section className={className} {...rest}>
      <Heading>{heading}</Heading>
      <div className="mt-5">{children}</div>
    </section>
  );
};

export default Section;
