import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const Calendar = () => {
  return <div>Calendar</div>;
};

Calendar.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Calendar;
