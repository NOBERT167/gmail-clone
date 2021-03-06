import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.styles.css";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ title, subject, description, time, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ title, subject, description, time, id }));
    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="email__row">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
