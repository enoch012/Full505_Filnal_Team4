import React, {useState} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";

const boardList = [
    {
        id: 0,
        title: '문의사항',
    },

    {
        id: 1,
        title: '공지사항',
    },

    {
        id: 2,
        title: '이벤트',
    }
];

function Board(props) {

    const [selectBoard, setSelectBoard] = useState(0);

    const selectTabHandler = (index) => {
        setSelectBoard(index);
    }

    return (
        <Container className={'my-4'}>
            <h2>board page</h2>

            <Row>
                <Col xs={6} className={'mx-auto'}>
                    <div className={'nav justify-content-between px-5 py-3 tabs-bg-yellow'}>
                        {
                            boardList.map((value, index) => {
                                return <li
                                    key={value.id}
                                    className={'nav-item'}>
                                    <a
                                        className={index === selectBoard ? 'nav-link active selected' : 'nav-link unselected'}
                                        onClick={() => selectTabHandler(index)}>{value.title}</a>
                                </li>
                            })
                        }
                    </div>
                </Col>
            </Row>
            <div>
                {boardList[selectBoard].title}
            </div>
        </Container>
    )
}

export default Board;