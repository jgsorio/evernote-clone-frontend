import React, {useEffect} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './style.scss';
import {Button, ButtonGroup, Form} from "react-bootstrap";
import NotesService from "../../services/notes";

const Editor = (props) => {
    const [title, setTitle] = React.useState('');
    const [currentContent, setCurrentContent] = React.useState('');

    useEffect(() => {
        setTitle(props.note.title)
        setCurrentContent(props.note.body);
    }, [props.note]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = {
            title: title,
            body: currentContent,
        }

        const response = await NotesService.update(props.note._id, params);
        if (response.status === 200) {
            window.location.reload();
        }
    }

    const handleEdit = (content, delta, source) => {
        setCurrentContent(content);
    }

    const handleDelete = async () => {
        const response = await NotesService.delete(props.note._id);
        if (response.status === 200) {
            window.location.href = '/notes';
        }
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
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Body: </Form.Label>
                    <ReactQuill value={currentContent} modules={modules} onChange={handleEdit} />
                </Form.Group>
                <ButtonGroup className="w-100 mt-4">
                    <Button type="submit" variant="outline-success" className="w-40 me-2">Editar</Button>
                    <Button onClick={handleDelete} type="button" variant="outline-danger" className="w-40">Excluir</Button>
                </ButtonGroup>
            </Form>
        </>
    )
}

export default Editor;