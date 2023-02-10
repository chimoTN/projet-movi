import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import Axios from 'axios';

const AddMovieOnListPopUpComponent = (props) => {
    const { openPopUp, setOpenPopUp, addMovie } = props
    const [isOnclickToButtonAdd, setIsOnclickToButtonAdd] = useState(false);
    const [messageIsMovieAdd, setmessageIsMovieAdd] = useState("");

    const [movie, setMovie] = useState(
        {
            note: 3,
            viewCount: 0
        }
    )

    const addOneMovie = () => {
        const URL_addMovie = "http://localhost:8080/addMovieOnAList/1/" + addMovie[0]
        Axios
            .post(URL_addMovie,
                {
                    note: movie.note,
                    viewCount: movie.viewCount
                })
            .then((response) => setmessageIsMovieAdd(response.data) /* console.log(response.data) */)
            .catch((error) => setmessageIsMovieAdd(error.response.data) /* console.log(error.response.data) */)

        setIsOnclickToButtonAdd(true)
        setOpenPopUp(true)
    }

    const updateMovie = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMovie({ ...movie, [name]: value })
    }

    const handleOk = () => {
        setOpenPopUp(false);
    };
    const handleCancel = () => {
        setOpenPopUp(false);
    };

    return (
        <>
            {
                !isOnclickToButtonAdd ?
                    (
                        <Modal

                            title={addMovie[1]}
                            open={openPopUp}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Annuler
                                </Button>,
                                <Button key="submit" type="primary" onClick={addOneMovie}>
                                    Ajouter
                                </Button>
                            ]}
                        >
                            <p>Ajouter ce film dans votre liste ?</p>
                            <Form>
                                <Form.Item label="Note">
                                    <Input
                                        name="note"
                                        value={movie.note}
                                        type="number"
                                        mon="1"
                                        max="5"
                                        onChange={updateMovie}
                                    />

                                </Form.Item>

                                <Form.Item label="Nombre de vue ">
                                    <Input
                                        name="viewCount"
                                        value={movie.viewCount}
                                        type="number"
                                        mon="1"
                                        max="100"
                                        onChange={updateMovie}

                                    />
                                </Form.Item>
                            </Form>
                        </Modal>
                    )
                    :
                    <Modal
                        title={messageIsMovieAdd}
                        open={openPopUp}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="submit" type="primary" onClick={handleOk}>
                                Ok
                            </Button>
                        ]}
                    >
                    </Modal>

            }


        </>
    )
}

export default AddMovieOnListPopUpComponent