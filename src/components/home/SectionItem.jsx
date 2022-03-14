import * as React from "react";
import Button from "../common/buttons/Button";
import arrowIcon from "../../images/svg/arrow-forward-white.svg";

export default function SectionItem({
  header,
  subheader,
  body,
  buttonText,
  buttonLink,
  align,
}) {
  const alignStyle = {
    left: "text-left justify-items-start",
    right: "text-right items-end",
  };

  return (
    <section className={`flex flex-col gap-4 ${alignStyle[align]}`}>
      <h2 className="text-2xl font-bold text-oxford-blue">{header}</h2>
      <h3 className="text-lg font-medium text-darkish-blue">{subheader}</h3>
      <p className="text-lg font-light leading-relaxed text-rich-black">
        {body}
      </p>
      <a href={buttonLink}>
        <Button
          text={buttonText}
          color="bg-darkish-blue"
          textColor="text-white"
          icon={
            <object
              data={arrowIcon}
              type="image/svg+xml"
              aria-label="button icon"
            />
          }
        />
      </a>
    </section>
  );
}
