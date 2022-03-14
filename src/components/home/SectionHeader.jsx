import * as React from "react";

export default function SectionHeader({header, subheader}) {
  return (
    <hgroup className="flex flex-col gap-3 ">
      <h2 className="text-3xl font-bold text-oxford-blue">{header}</h2>
      <h3 className="text-xl font-medium text-darkish-blue">{subheader}</h3>
    </hgroup>
  );
}
