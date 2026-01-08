const Card = ({ name, role, company, description, avatar, cover }) => {
  const formatCompany = (companyName) => {
    if (!companyName) return "";
    return companyName.startsWith("@") ? companyName : `@${companyName}`;
  };

  return (
    <div className="w-62 m-4  rounded-xl border border-gray-300 overflow-hidden bg-blue-50-soft">
      <div className="h-24">
        <img src={cover} className="h-full w-full object-cover" />
      </div>

      <div className="relative flex justify-center">
        <img
          src={avatar}
          className="w-32 h-32 rounded-full border-4 border-white absolute -top-14"
        />
      </div>

      <div className="pt-20 px-4 pb-4 text-center">
        <h1 className="text-lg font-semibold">{name}</h1>

        <p className="text-lg text-gray-500 mt-1">
          {role} <span className="font-medium">{formatCompany(company)}</span>
        </p>

        <p className="text-sm text-gray-500 line-clamp-2">| {description}</p>

        <button
          className="mx-auto mt-8 px-6 py-2 border w-full  border-blue-500  text-blue-500  rounded-full  text-sm font-medium "
        >
          Connect +
        </button>
      </div>
    </div>
  );
};
export default Card;
