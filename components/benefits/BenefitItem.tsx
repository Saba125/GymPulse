interface BenefitItemProps {
  benefit: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
}
const BenefitItem = ({ benefit }: BenefitItemProps) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-200  px-5 py-16 text-center ">
      <div className="mb-4 flex justify-center">
        <div className="bg-primary-100 rounded-full border-2 border-gray-100 p-4">
          {benefit.icon}
        </div>
      </div>
      <h4 className="font-bold">{benefit.title}</h4>
      <p className="my-3">{benefit.description}</p>
      <p className="cursor-pointer text-rose-500 transition hover:underline">
        Learn More
      </p>
    </div>
  );
};

export default BenefitItem;
