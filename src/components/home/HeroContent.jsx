import * as React from "react";
import Button from "../common/buttons/Button";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-4 text-lg font-light text-oxford-blue">
        Malayan Colleges Laguna ACM Student Chapter
      </p>
      <p className="mb-8 text-5xl font-bold text-oxford-blue">
        A Community for Computing Enthusiasts
      </p>
      <Button textColor="text-oxford-blue" text="Check us out" />
    </div>
  );
}
