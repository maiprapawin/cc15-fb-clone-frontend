import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

// ใช้ new Date to convert date string to date obj
// 2023-01-01 => new Date("2023-01-01")
const formatTimeAgo = (date) => timeAgo.format(new Date(date), "mini-now");
export default formatTimeAgo;
