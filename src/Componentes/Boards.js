import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AddButton from './AddButton';
import { NavLink } from 'react-router-dom';
import Loading from './Loading';

export const Boards = ({ array, loading }) => {
    return (
        <div>
            <Grid id='boards'>
                <h3 style={{ marginTop: '60px' }}>
                    <i class="fa fa-user"></i>
                    <span> My boards</span>
                </h3>
                {loading && <Loading />}
                <Row>
                    {
                        array && array.map((item, index) => {
                            const path = "/boards/" + (index + 1) + '-' + item.name;
                            return (
                                <Col md={3} sm={4} xs={6} key={index}>
                                    <NavLink to={path}>
                                        <div className='box'>
                                            <h4>{item.name}</h4>
                                        </div>
                                    </NavLink>
                                </Col>
                            );
                        })
                    }
                    {!loading &&
                        <Col md={3} sm={4} xs={6} >
                            <AddButton board />
                        </Col>}
                </Row>
            </Grid>
        </div>
    );
}


export const BoardDetail = ({ board }) => {
    return (
        <div>
            <Grid >
                <div id='contenido'>
                    <h3 style={{ marginTop: '60px' }}>
                        {board.name}
                    </h3>
                    <div >
                        {
                            board.list && board.list.map((item, index) => {
                                return (
                                    <List list={item} key={index} board={board} />
                                );
                            })
                        }
                        <AddButton list={board} />
                    </div>
                </div>
            </Grid>
        </div>
    );
}

const List = ({ list, board }) => {
    return (
        <div className='list'>
            <div className='box'>
                {
                    list &&
                    <div>
                        <h4>{list.name}</h4>
                        {
                            list.cards && list.cards.map(card => <div className='card'>{card}</div>)
                        }
                    </div>
                }

                <AddButton card={list.name} boardId={board} />
            </div>
        </div>
    );
}
