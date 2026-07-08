import PageTitle from "../../components/ui/PageTitle";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PageTitle
      title="Good Morning, Sourodeep"
      subtitle={`Welcome back. Here's what's happening today • ${today}`}
    />
  );
};

export default DashboardHeader;