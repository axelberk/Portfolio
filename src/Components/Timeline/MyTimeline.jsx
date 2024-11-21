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
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={dotStyle} />
          <TimelineConnector sx={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent sx={textStyle}>
          <div className="event-item">
            <h4 className="event-year">January 1994</h4>
            <h3 className="event-title">Born</h3>
            <p className="event-description">I was born</p>
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
            <h4 className="event-year">June 1997</h4>
            <h3 className="event-title">Moved</h3>
            <p className="event-description">I moved</p>
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
            <h4 className="event-year">July 2004</h4>
            <h3 className="event-title">Moved again</h3>
            <p className="event-description">I moved again</p>
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
            <h4 className="event-year">December 2023</h4>
            <h3 className="event-title">Started Techover</h3>
            <p className="event-description">
              I started learning web development with the help of Techover
              Academy.
            </p>
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
            <h4 className="event-year">November 2024</h4>
            
            <p className="event-description">
              I finished the web development course at Techover Academy{" "}
              <a href="#" onClick={openModal}>
                and received a certificate.
              </a>
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
