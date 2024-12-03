import "./MyTimeline.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { dotStyle, textStyle, connectorStyle } from "../../timelineStyles.js";
import { useModal } from "../../useModal.js";
import { Button } from "@mui/material";

const MyTimeline = () => {

    const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <Timeline position="alternate-reverse" className="timeline-container">
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={dotStyle} />
          <TimelineConnector sx={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent sx={textStyle}>
          <div className="event-item">
            <h4 className="event-year">January 1994</h4>
            <p className="event-description">I was born</p>
          </div>
        </TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={dotStyle} />
          <TimelineConnector sx={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent sx={textStyle}>
          <div className="event-item">
            <h4 className="event-year">March 2020</h4>
            <p className="event-description">Started working at <span style={{color:"aquamarine"}}>foodora</span>, a fast paced and fast growing food delivery company. </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={dotStyle} />
          <TimelineConnector sx={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent sx={textStyle}>
          <div className="event-item">
            <h4 className="event-year">March 2023</h4>
            <p className="event-description">I wanted to start learning how to code and was recommended to begin with Python. This sparked a genuine interest in programming that has flourished since then.</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={dotStyle} />
          <TimelineConnector sx={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent sx={textStyle}>
          <div className="event-item">
            <h4 className="event-year">December 2023</h4>
            <p className="event-description">
              Enrolled in <span style={{color:"aquamarine"}}>Techover Academy</span> and started learning the basics of web development.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={dotStyle} />
        </TimelineSeparator>
        <TimelineContent sx={textStyle}>
          <div className="event-item">
            <h4 className="event-year">November 2024</h4>
            
            <p className="event-description">
              Finished the web development program at <span style={{color:"aquamarine"}}>Techover Academy</span> and received a {" "}
              <a href="#" onClick={openModal}>
                certificate
              </a>.
              {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation}
                  >
                    <img src="techover-cert.png" alt="" />
                    <Button
                      className="close-button"
                      variant="outlined"
                      onClick={closeModal}
                      sx={{
                        backgroundColor: "aquamarine",
                        color: "#01003b",
                        fontFamily: "inherit",
                        fontSize: "18px",
                        border:"none"
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MyTimeline;
