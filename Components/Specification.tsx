import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center shadow-md py-8 px-6 rounded-md">
      <div className="flex items-center justify-center w-20">
        <Image src={icon} alt={title} width={106} height={109} />
      </div>
      <h1 className="text-lg font-semibold text-blue">{title}</h1>
      <p className="text-gray text-sm">{description}</p>
    </div>
  );
};

const Specification = () => {
  return (
    <div className="max-w-5xl mx-auto my-40 space-y-14">
      <div className="text-center space-y-4 mx-auto max-w-lg">
        <h1 className="text-2xl font-bold text-blue">
          All-In-One <span className="text-orange">Cloud Software</span>
        </h1>
        <p className="text-gray">
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>
      <div className="flex justify-between gap-28">
        <Card
          icon="/bill.png"
          title="Online Billing, Invoicing, & Contracts"
          description="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
        />
        <Card
          icon="/calender.png"
          title="Easy Schedule & Attendance Tracking"
          description="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
        />
        <Card
          icon="/customer.png"
          title="Customer Tracking & CRM"
          description="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
        />
      </div>
    </div>
  );
};
export default Specification;
