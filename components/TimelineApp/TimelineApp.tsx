import Timeline from "@mui/lab/Timeline";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import CircleSharpIcon from '@mui/icons-material/CircleSharp';

import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import { ScreenType, appScreens } from "@/DammyData";

export const TimelineApp = (scrollName: Omit<ScreenType, "calculate">) => {
  return (
    <Timeline position="alternate" sx={{ position: "fixed", top: "50%", transform: "translateY(-50%)", zIndex: "90" }}>
      {appScreens.map((item, indx) =>
        <TimelineItem key={indx}>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "transparent", boxShadow: "none" }} >
              {item.name === scrollName.name ? 
                <FiberManualRecordTwoToneIcon sx={{ width: "40px", height: "40px" }} color="error" /> 
                : 
                <CircleSharpIcon sx={{ width: "10px", height: "10px", color:  scrollName.color }} />}
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      )}
    </Timeline>
  );
}