import React from 'react';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import logo from './trello-logo-white.svg';
import AddButton from './AddButton';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header id='titulo'>
            <span>
                <NavLink to='/boards'>
                    <i class="fa fa-columns" aria-hidden="true"></i>
                    <span> Boards</span>
                </NavLink>
            </span>
            <Image src={logo} width='200px' />
            <span>
                <NavLink href='#'>
                    <span> User</span>
                </NavLink>
                <NavLink to='/signin'>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    <span> Sign Out</span>
                </NavLink>
            </span>
        </header>
    );
}

export const Boards = ({ array }) => {
    return (
        <div>
            <Header />
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
        </div>
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
        <div>
            <Header />
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
        </div>
    );
}
