import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      <Image
        src={member.image}
        alt={member.name}
        width={150}
        height={150}
        className="rounded-full"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
        {member.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
      <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
        {member.description}
      </p>
    </div>
  );
};

export default TeamCard;