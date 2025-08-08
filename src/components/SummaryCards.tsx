import { formatCurrency } from "@/lib/utilis";
import { SummaryCardData } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  data: SummaryCardData[];
}

const SummaryCards = ({ data }: Props) => {
  return (
    <div className="flex justify-between items-center">
      {data.map((card, index) => {
        const isPositive = card.changePercent >= 0;

        return (
          <div
            key={index}
            className="relative bg-[#386776]/10 rounded-3xl p-4 shadow-sm w-[250px] text-[#020303]"
          >
            <button className="px-5 py-3 font-bold text-xl absolute top-2.5 right-3">
              <Image
                src="/icons/Union.svg"
                alt="ellipsis"
                width={0}
                height={0}
                className="w-5 h-5"
              />
            </button>
            <div className="flex flex-col justify-between gap-4 items-start">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <h2 className="text-3xl font-bold">
                {card.title === "Transactions"
                  ? card.amount.toLocaleString()
                  : formatCurrency(card.amount)}
              </h2>
              <p className="text-xl text-[#3A6C7B] font-light">
                {isPositive ? "+" : ""}
                {card.changePercent}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;
