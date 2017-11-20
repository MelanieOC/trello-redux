import React from 'react';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import AddButton from './AddButton';
import { NavLink } from 'react-router-dom';
import Header from './Header';


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
                        array && array.map((item, index) => {
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


const List = ({ list, board }) => {
    return (
        <div className='tarjeta'>
            <div className='tarea'>
                {
                    list &&
                    <div>
                        <h4>{list.name}</h4>
                        {
                            list.cards && list.cards.map(a => <div className='tareal'>{a}</div>)
                        }
                    </div>
                }

                <AddButton card={list.name} boardId={board} />
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
                        board.list && board.list.map((item, index) => {
                            return (
                                <List list={item} key={index} board={board} />
                            );
                        })
                    }
                    <AddButton list={board} />
                </div>
            </Grid>
        </div>
    );
}
