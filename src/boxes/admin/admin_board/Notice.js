import React, { useEffect, useState } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { PaginationItem, SearchBar } from "../../../items";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import './AdminBoard.css'

const POST_LIST = "POST_LIST"
export const postListAction = data => ({
    type: POST_LIST,
    payload: data
})

export const postListReducer = (state = [], action) => {
    switch (action.type) {
        case POST_LIST:
            return action.payload
        default:
            return state
    }
}


export const postListThunk = searchWord => dispatch => {
    console.log('api 도착')
    axios.get(`http://localhost/posts/notice/list/${searchWord}`)
        .then(res => { dispatch(postListAction(res.data)) })
        .catch(err => { throw (err) })
}
const Notice = () => {

    const [post, setPost] = useState({})
    const [postList, setPostList] = useState([])
    const resultList = useSelector((x) => x.postListReducer)
    const dispatch = useDispatch()
    const setPosts = payload => {
        setPost({ title: payload.postTitle })
    }

  
    useEffect(() => {
        axios
        .get('http://localhost:8080/posts/postlist')
        .then((res)=>{
        setPostList(res.data)
        console.log(res.data)
        })
        .catch((err)=>{
        throw err;
        })
    }, [])


    const handleSearch = (searchWord) => {
        alert(searchWord);
    }

    return (
        <>
            <div className="content-title">
                <h2 className="menu-h2"> - 공지사항</h2>
                <div id="select-search-bar">
                    <select id="select" className="form-control">
                        <option selected>선택</option>
                        <option>제목</option>
                        <option>내용</option>
                        <option>제목 및 내용</option>
                    </select>
                    <select className="form-control" id="select">
                        <option selected>카테고리</option>
                        <option>지역</option>
                        <option>사이트</option>
                    </select>
                    <span id="search-bar">
                        <SearchBar onSearch={handleSearch} />
                    </span>
                </div>
            </div>


            <div>
                <Table responsive hover style={{ textAlign: "center" }}>
                    <thead >
                        <tr>
                            <th>번호</th>
                            <th>구분</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody >
                        {postList.map((info, i) => (
                            <tr key={i}>
                                <td >{i+1}</td>
                                <td> {info.category}</td>
                               <td> <Link to="">{info.postTitle}</Link></td>
                                <td>{info.user_id}</td>
                                <td>{info.regDate}</td>
                            </tr>))}
                    </tbody>
                </Table>

                <Container fluid>
                    <Row noGutters>
                        <Col sm={11}> <PaginationItem /></Col>
                        <Col> <Link to="/admin/notice-write">
                            <Button variant="primary" id="button-right">글쓰기</Button>
                        </Link></Col>
                    </Row>

                </Container>

            </div>


        </>
    );
}

export default Notice;