import { ModalProps } from "@/types";
import Link from "next/link";

const Modal = ({ bgColor, items }: ModalProps) => {
  return (
    <div
      className={`bg-${bgColor} absolute top-14 rounded-3xl text-lg text-amber-50 z-50`}
    >
      <ul className="flex justify-center items-center flex-col gap-3">
        {items.map((item, index) => (
          <Link key={index} href={`/${item}`} className="w-full text-center">
            <li className="px-3 py-2 hover:bg-amber-50 hover:text-[#437D8E] w-full">
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
