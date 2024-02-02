import { MouseEventHandler } from "react";
import PDFSvg from "./svgs/PDFSvg";

interface Props {
  placeholder: string;
}

const PDFBtn = ({ placeholder }: Props) => {
  const handleClickArxiv: MouseEventHandler<HTMLButtonElement> = () => {
    window.open("/icml2024-1703.github.io/DCO_ICML_2024.pdf");
  };

  return (
    <button
      className="rounded-3xl flex items-center px-3 py-1 border border-solid border-gray-500 bg-gray-500 text-white mt-4 cursor-pointer"
      onClick={handleClickArxiv}
    >
      <PDFSvg />
      <div>{placeholder}</div>
    </button>
  );
};

export default PDFBtn;
