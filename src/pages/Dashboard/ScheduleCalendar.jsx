import React, { Fragment } from "react";
import { Calendar, Badge } from "antd";

const ScheduleCalendar = () => {
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "Estructuras de datos" },
          { type: "success", content: "Programación avanzada" },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "Estructuras de datos" },
          { type: "success", content: "Programación avanzada" },
          { type: "error", content: "Internet de las cosas" },
        ];
        break;
      case 19:
        listData = [
          { type: "warning", content: "Estructuras de datos" },
          { type: "success", content: "Programación avanzada" },
          { type: "error", content: "Internet de las cosas" },
        ];
        break;
      case 3:
        listData = [
          { type: "warning", content: "Estructuras de datos" },
          { type: "success", content: "Programación avanzada" },
          { type: "error", content: "Internet de las cosas" },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "Estructuras de datos" },
          { type: "success", content: "Cálculo II" },
          { type: "error", content: "Cálculo vectorial" },
          { type: "error", content: "Física básica" },
          { type: "error", content: "Ecuaciones diferenciales" },
          { type: "error", content: "Emprendimiento" },
        ];
        break;
      case 24:
        listData = [
          { type: "warning", content: "Estructuras de datos" },
          { type: "success", content: "Cálculo II" },
          { type: "error", content: "Cálculo vectorial" },
          { type: "error", content: "Física básica" },
          { type: "error", content: "Ecuaciones diferenciales" },
          { type: "error", content: "Emprendimiento" },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  return (
    <Fragment>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </Fragment>
  );
};

export default ScheduleCalendar;
