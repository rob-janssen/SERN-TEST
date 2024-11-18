const StatsCard = ({ title, value, icon }) => {
return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center max-w-xs">
        <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {icon}
            </div>
        </div>
        <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    </div>
);
};

export default StatsCard;
