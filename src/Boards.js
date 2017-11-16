import React from 'react';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import AddButton from './AddButton';
import { NavLink} from 'react-router-dom';

export const Boards = ({ array }) => {
    return (
        <Grid id='boards'>
            <h3 style={{ marginTop: '60px' }}>
                <i class="fa fa-user"></i>
                <span> My boards</span>
            </h3>
            <Row>
                {
                    array.map((item, index) => {
                        const path = "/boards/" + (index + 1) + '-' + item.name;
                        return (
                            <Col md={3} sm={3} xs={3} key={index}>
                                <NavLink to={path}>
                                    <div className='tarea'>
                                        <h4>{item.name}</h4>
                                    </div>
                                </NavLink>
                            </Col>
                        );
                    })
                }
                <Col md={3} sm={3} xs={3} >
                    <AddButton board />
                </Col>
            </Row>
        </Grid>
    );
}

const Tarjeta = ({ tarjeta, tareas }) => {
    return (
        <div className='tarjeta'>
            <div className='tarea'>
                <h4>{tarjeta}</h4>
                {
                    tareas.map(a => <div className='tareal'>{a}</div>)
                }

                <AddButton />
            </div>
        </div>
    );
}

export const BoardDetail = ({ board }) => {
    return (
        <Grid >
            <h3 style={{ marginTop: '60px' }}>
                {board.name}
            </h3>
            <div id='contenido'>
                {
                    Object.keys(board.tarjetas).map(item => {
                        const value = board.tarjetas[item];
                        return (
                            <Tarjeta tarjeta={item} tareas={value} />
                        );
                    })
                }
                <AddButton tarjeta />
            </div>
        </Grid>
    );
}
