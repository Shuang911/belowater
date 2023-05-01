

const BelugaContainer = ({ stats}) => {
  return (
    <div className="absolute  left-[41.13rem] w-[28.44rem] h-[17.83rem] text-center text-[0.88rem] text-dimgray font-catamaran">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Species prediction
      </h3>
      <dl className="mt-5 grid grid-rows-auto gap-3 sm:grid-rows-auto">
        {stats.map((item) => (
          <div
            key={item.className}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.className.split(",")[0]}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {(item.probability * 100).toFixed(2)}%{" "}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

BelugaContainer.defaultProps = {
  stats: [
    { className: "Total Subscribers", probability: 71.8972235 },
    { className: "Avg. Open Rate", probability: 58.16123124 },
    { className: "Avg. Click Rate", probability: 24.571231243 },
  ],
};








export default BelugaContainer;
