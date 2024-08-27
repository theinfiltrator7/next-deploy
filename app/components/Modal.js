import Link from "next/link";
export default function Modal({ isOpen }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-[80%] h-[80%] p-8">
          <div className=" w-[80%] h-full  mx-auto ">
            <div className="flex flex-col text-center   h-full">
              <Link href="/" className="text-2xl  mt-28 mb-4">
                Home
              </Link>
              <Link href="/about" className="text-2xl  mb-4">
                About
              </Link>
              <Link href="/project" className="text-2xl  mb-4">
                Projects
              </Link>
              <Link href="/contact" className="text-2xl  mb-4">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
