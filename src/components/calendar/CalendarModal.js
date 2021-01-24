import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0).add(1, "hours");

export const CalendarModal = () => {
  const nowPlus1 = moment().minutes(0).seconds(0).add(2, "hours");
  const [startDate, setStartDate] = useState(now.toDate());
  const [endDate, setEndDate] = useState(nowPlus1.toDate());
  const [validTitle, setValidTitle] = useState(true);

  const [formValues, setFormValues] = useState({
    title: "event",
    notes: "",
    start: now.toDate(),
    end: nowPlus1.toDate(),
  });

  const { notes, title, start, end } = formValues;

  const closeModal = () => {
    //setIsOpen(false);
    //close modal
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleStartDateChange = (e) => {
    setStartDate(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setEndDate(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      console.log("Second date must be major");
      Swal.fire("Error", "End date must be major than start date", "error");
      return;
    }

    if (title.trim().length < 2) {
      return setValidTitle(false);
    }

    // store in db

    setValidTitle(true);
    closeModal();
  };

  return (
    <Modal
      isOpen={true}
      /* onAfterOpen={afterOpenModal} */
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> New event </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label> Start date and time</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={startDate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>End date and time</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={endDate}
            minDate={startDate}
            className="form-control"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Title and notes</label>
          <input
            type="text"
            className={`form-control ${!validTitle && "is-invalid"}`}
            placeholder="Event title"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            A short description
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional information
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Save</span>
        </button>
      </form>
    </Modal>
  );
};
