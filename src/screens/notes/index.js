import React, {useEffect} from 'react';
import './style.scss';
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import Sidebar from "../../components/sidebar";
import NotesService from "../../services/notes";
import {CDBInput} from "cdbreact";
import Editor from "../../components/editor";
import ReactQuill from "react-quill";

const NotesScreen = () => {
    const [notes, setNotes] = React.useState([]);
    const [note, setNote] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [isCreateNote, setIsCreateNote] = React.useState(true);
    const [currentBody, setCurrentBody] = React.useState("");
    const getUser = localStorage.getItem('user');

    if (!getUser) {
        window.location.href = '/auth/login';
    }

    useEffect(() => {
        async function getNotes() {
            const response = await NotesService.all();
            setNotes(response.data)

        }
        getNotes();
        setCurrentBody("")
    }, []);

    const handleSelected = async (e, id) => {
        e.preventDefault();
        const note = await NotesService.show(id);
        setNote(note.data);
        setIsCreateNote(false);
    }

    const handleCreateNote = (isCreate) => {
        setIsCreateNote(isCreate);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = {
            title: title,
            body: currentBody,
        }
        const response = await NotesService.create(params);
        setNotes([...notes, response.data]);
        setTitle('')
        setBody('');
        setCurrentBody("")
        window.location.reload();
    }

    const handleEdit = (content, delta, source) => {
        setCurrentBody(content);
    }

    const modules = {
        toolbar: [
            [{'header': 1}, {'header': 2}, { 'font': []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'heading'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    }


    return (
        <Container fluid={true}>
            <Row>
                <Col xs={4} md={2}>
                    <Sidebar notes={notes} selectNote={(e, id) => handleSelected(e, id)} createNote={(isCreate) => handleCreateNote(isCreate)} />
                </Col>
                <Col xs={8} md={10}>
                    { isCreateNote ? (
                        <Container fluid={true}>
                            <Row className="w-100">
                                <Col xs={12} md={12}>
                                    <Form className="form-create" onSubmit={handleSubmit}>
                                        <Form.Group>
                                            <Form.Label>Title: </Form.Label>
                                            <Form.Control type="text" id="formBasicTitle" value={title} required={true} onChange={(e) => setTitle(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Body: </Form.Label>
                                            <ReactQuill modules={modules} value={currentBody} onChange={handleEdit}></ReactQuill>
                                        </Form.Group>
                                        <Button type="submit" className="w-100 mt-4" variant="outline-success">Create Note</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                            <Editor note={note}/>
                        )
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default NotesScreen;