import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { WidthFull } from "@mui/icons-material";

export const buttonStyle = {
  backgroundColor: "aquamarine",
  color: "black",
  font: "inherit",
  borderRadius: "10px",
  
};

export const useNavigationHandlers = (location) => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 300);
    }
  };

  const handleReadMore = (route) => {
    navigate(route);
  };

  return { handleNavClick, handleReadMore };
};
