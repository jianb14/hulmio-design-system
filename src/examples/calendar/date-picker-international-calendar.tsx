import { SegmentedDatePicker } from "hulmio-ui";
import { parseDate, parseDateTime } from "@internationalized/date";
import { I18nProvider } from "react-aria-components";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <I18nProvider locale="hi-IN-u-ca-indian"><SegmentedDatePicker label="Appointment date" defaultValue={parseDate("2026-11-06")} /></I18nProvider>
    </div>
  );
}
