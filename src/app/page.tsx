import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1items-center justify-center gap-4 bg-gray-100">
      <div className="h-24 w-24 bg-red-200 text-white flex items-center justify-center">
        1
      </div>

      <div className="h-24 w-24 bg-blue-500 text-white flex items-center justify-center">
        2
      </div>

      <div className="h-24 w-24 bg-green-500 text-white flex items-center justify-center">
        3
      </div>
    </div>
  );
}
