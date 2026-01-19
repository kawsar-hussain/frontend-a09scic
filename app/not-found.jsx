import React from "react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="">
      <Image src="/error-404.png" alt="404 Error" width={1920} height={1080} className="w-full h-screen hidden lg:block object-cover" />
      <Image src="/error-404(2).png" alt="404 Error Mobile" width={768} height={1024} className="w-full h-screen lg:hidden block object-cover" />
    </div>
  );
}
