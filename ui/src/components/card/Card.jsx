import "./Card.scss";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
const backGroundImage = "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"




const Card = () => {
  return (
    <div className="card">
      <div className="card_header">
        <div>
          <IconButton>
            <Avatar />
          </IconButton>
          <p>Asutosh Sidhya</p>
        </div>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="card_content">
        <img src={backGroundImage} alt="" />
      </div>
      <div className="card_footer"></div>
    </div>
  );
};

export default Card;
