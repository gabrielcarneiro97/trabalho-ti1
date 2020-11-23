import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Divider, Col, Row } from 'antd';
import { RRule } from 'rrule';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import AddMedicamentoModal from './AddMedicamentoModal';
import AddEventoDiarioModal from './AddEventoDiarioModal';

const localizer = momentLocalizer(moment);

export default function Calendario(props) {
  const { pacienteDb = null } = props;

  const [events, setEvents] = useState([]);


  useEffect(() => {
    const remedios = pacienteDb?.remedios || [];
    const eventos = pacienteDb?.eventosDiarios || [];

    const es = remedios.map((remedio, rIndex) => {
      const rule = new RRule({
        freq: RRule.DAILY,
        dtstart: remedio.inicio.toDate(),
        until: remedio.fim.toDate(),
      });

      return rule.all().map((e, eId) => ({
        id: `r${rIndex}-e:${eId}`,
        start: moment(e).set({ hour: remedio.horaDia.hora, minutes: remedio.horaDia.minutos }).toDate(),
        end: moment(e).set({ hour: remedio.horaDia.hora + 1, minutes: remedio.horaDia.minutos }).toDate(),
        title: `Remédio: ${remedio.nome}`,
      }));
    }).concat(eventos.map((evento, evIndex) => {
      const rule = new RRule({
        freq: RRule.DAILY,
        dtstart: evento.inicio.toDate(),
        until: evento.fim.toDate(),
      });

      return rule.all().map((e, eId) => ({
        id: `e${evIndex}-e:${eId}`,
        start: moment(e).set({ hour: evento.horaDia.hora, minutes: evento.horaDia.minutos }).toDate(),
        end: moment(e).set({ hour: evento.horaDia.hora + 1, minutes: evento.horaDia.minutos }).toDate(),
        title: `Evento: ${evento.nome}`,
      }));
    }));


    setEvents(es.flat());

  }, [pacienteDb]);

  console.log(events);

  return (
    <>
      {
        pacienteDb
        && (
          <>
            <Divider>Calendario</Divider>
            <Row gutter={16} justify="end" style={{ marginBottom: 10 }}>
              <Col>
                <AddMedicamentoModal />
              </Col>
              <Col>
                <AddEventoDiarioModal />
              </Col>
            </Row>
            <Calendar
              messages={{ today: 'Hoje', previous: 'Voltar', next: 'Avançar', month: 'Mês', week: 'Semana', day: 'Dia', date: 'Data', time: 'Hora', event: 'Evento' }}
              localizer={localizer}
              events={events}
              style={{ height: '80vh' }}
              startAccessor="start"
              endAccessor="end"
              eventPropGetter={(e) => {
                if (e.title.includes('Remédio')) {
                  return {
                    style: {
                      backgroundColor: '#1890ff',
                      color: 'white'
                    }
                  }
                }

                if (e.title.includes('Evento')) {
                  return {
                    style: {
                      backgroundColor: '#fff',
                      color: 'black',
                      border: 'solid 1.5px'
                    }
                  }
                }
              }}
            />
          </>
        )
      }
    </>
  )
}
