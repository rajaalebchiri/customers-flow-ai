import React from "react";
import BreadCrumb from "./BreadCrumb";
import { Card } from "../ui/card";
import { Star, Trash } from "lucide-react";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8">
      <BreadCrumb />
      <div className="flex gap-3 items-center">
        <div>
          <Card className="rounded-xl flex gap-3 py-3 px-4 text-ghost">
            <Trash />
            <Star />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
