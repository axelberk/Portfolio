import "./MyTimeline.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { dotStyle, textStyle, connectorStyle } from "../../timelineStyles";

const MyTimeline = () => {
    return (
    <Timeline position="alternate-reverse" className="timeline-container">
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot className="timeline-dot" sx={dotStyle}/>
                <TimelineConnector sx={connectorStyle}/>
            </TimelineSeparator>
            <TimelineContent className="timeline-text" sx={textStyle}>Born</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator >
                <TimelineDot sx={dotStyle}/>
                <TimelineConnector sx={connectorStyle}/>
            </TimelineSeparator>
            <TimelineContent sx={textStyle}>Moved</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx={dotStyle}/>
                <TimelineConnector sx={connectorStyle}/>
            </TimelineSeparator>
            <TimelineContent sx={textStyle}>Moved again</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx={dotStyle}/>
                <TimelineConnector sx={connectorStyle}/>
            </TimelineSeparator>
            <TimelineContent sx={textStyle}>Started Techover</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx={dotStyle}/>
                <TimelineConnector sx={connectorStyle}/>
            </TimelineSeparator>
            <TimelineContent sx={textStyle}>Finished Techover</TimelineContent>
        </TimelineItem>
    </Timeline>
    )
}

export default MyTimeline