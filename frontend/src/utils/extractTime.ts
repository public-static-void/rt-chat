export function extractTime(dateString: string) {
  const now_date = new Date();
  const now_hours = padZero(now_date.getHours());
  const now_minutes = padZero(now_date.getMinutes());
  const now_weekday = now_date.toLocaleDateString("en-US", { weekday: "long" });
  const now_day = now_date.getDate();
  const now_month = now_date.toLocaleDateString("en-US", { month: "long" });
  const now_year = now_date.toLocaleDateString("en-US", { year: "numeric" });

  const msg_date = new Date(dateString);
  const msg_hours = padZero(msg_date.getHours());
  const msg_minutes = padZero(msg_date.getMinutes());
  const msg_weekday = msg_date.toLocaleDateString("en-US", { weekday: "long" });
  const msg_day = msg_date.getDate();
  const msg_month = msg_date.toLocaleDateString("en-US", { month: "long" });
  const msg_year = msg_date.toLocaleDateString("en-US", { year: "numeric" });

  if (msg_year == now_year && msg_month == now_month && msg_day == now_day) {
    return `${msg_hours}:${msg_minutes}`;
  } else {
    return `${msg_weekday}, ${msg_month} ${msg_day}, ${msg_year}, ${msg_hours}:${msg_minutes}`;
  }
}

function padZero(num: number) {
  return num.toString().padStart(2, "0");
}
