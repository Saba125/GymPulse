import Image from "next/image";
const Logo = () => {
  return (
    <Image
      className="cursor-pointer object-cover"
      src="/Logo.png"
      width={120}
      height={120}
      alt="logo"
    />
  );
};

export default Logo;
