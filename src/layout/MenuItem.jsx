import { Link } from "react-router-dom";

export default function MenuItem({ to, Icon, active }) {
  //ส่ง props แทนการ hardcode = Icon ไอใหญ่เพราะเราจะส่งเป็น Component เข้ามา
  return (
    <Link to={to}>
      <div className="px-10 py-2 rounded-lg hover:bg-gray-200">
        <Icon className={`${active ? "fill-blue-600" : "fill-gray-500"}`} />
      </div>
    </Link>
  );
}
