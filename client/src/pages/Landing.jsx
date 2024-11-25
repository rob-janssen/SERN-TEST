import StatsCard from "../components/StatsCard";

const Landing = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard title="Total Tasks" value="10" icon="📝" />
      </div>
    </div>
  );
};
export default Landing;
