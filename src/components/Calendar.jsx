import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  return (
    <>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"72vh"}
        aspectRatio ="2"
        events={[
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-02-02T00:00:00+00:00","end":"2022-01-29T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-10-29T00:00:00+00:00","end":"2022-10-29T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-10-20T00:00:00+00:00","end":"2022-10-20T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-10-28T00:00:00+00:00","end":"2022-10-28T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-10-23T00:00:00+00:00","end":"2022-10-23T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-04-22T00:00:00+00:00","end":"2022-04-22T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-04-23T00:00:00+00:00","end":"2022-04-23T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-04-24T00:00:00+00:00","end":"2022-04-24T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-04-23T00:00:00+00:00","end":"2022-04-23T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2023-04-29T00:00:00+00:00","end":"2022-04-29T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"rach","allDay":false,"start":"2022-04-27T00:00:00+00:00","end":"2022-04-27T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-29T00:00:00+00:00","end":"2022-04-29T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-30T00:00:00+00:00","end":"2022-04-30T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-01T00:00:00+00:00","end":"2022-05-01T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-02T00:00:00+00:00","end":"2022-05-02T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-03T00:00:00+00:00","end":"2022-05-03T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-04T00:00:00+00:00","end":"2022-05-04T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"lesley born","allDay":false,"start":"2022-05-05T00:00:00+00:00","end":"202-05-05T00:00:00+00:00","color":"#eaecfb","textColor":"#2643e9"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-08T00:00:00+00:00","end":"2022-05-08T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-06T00:00:00+00:00","end":"2022-05-06T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-10T00:00:00+00:00","end":"2022-05-10T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031"},
          {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-11-19T00:00:00+00:00","end":"2022-11-19T00:00:00+00:00","color":"#eaecfb","textColor":"#2643e9"}
        ]}
      />
    </>
  );
}

export default Calendar;
