"use client";

import React from "react";

type Props = {};

const BreadCrumb = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold capitalize">Title</h2>
      </div>
    </div>
  );
};

export default BreadCrumb;
