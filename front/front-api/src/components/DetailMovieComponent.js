import React, { useEffect, useState } from 'react';
import { EditOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Axios from 'axios';
import { Card, Button, Input, Space } from 'antd';

const DetailMovieComponent = () => {
    const [data, setData] = useState([]);
    let params = useParams()
    let navigate = useNavigate();
    const URL = `http://localhost:8080/getDetailMovie/${params.idUser}/${params.idMovie}`;
    const { TextArea } = Input;
    const [movie, setMovie] = useState(
        {
            note: "0",
            viewCount: "0"
        }
    )

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                URL
            );
            setData(result.data)
            setMovie({ note: result.data[0].note, viewCount: result.data[0].viewCount })
        };
        fetchData();
    }, [URL]);

    const handleMovie = (event) => {
        const value = event.target.value
        const name = event.target.name
        setMovie({ ...movie, [name]: value })
    };

    const updateMovie = () => {
        const URL_modifyMovie = `http://localhost:8080/updateMovieOnAList/${data[0].idListMovie}`
        Axios
            .put(URL_modifyMovie, {
                note: movie.note,
                viewCount: movie.viewCount
            })

            .then(() => navigate("/getMyList/1"))
            .catch(err => console.log("error => ", err))
    }

    return (
        <>
            {data.map(movie => (
                <div className='MovieComponent' key={movie.idListMovie}>
                    <Card
                        title={movie.movie.title}
                        bordered={true}
                        headStyle={{ backgroundColor: '#252A36', color: '#ffffff', fontSize: 25 }}
                        bodyStyle={{ backgroundColor: '#252A36', color: '#ffffff', fontSize: 17 }}
                        style={{ width: 410 }}
                    >
                        <p>
                            <label>Réalisateur</label>
                            <Input value={movie.movie.producer} readOnly />
                        </p>
                        <p>

                            <label>Description</label>
                            <TextArea rows={4} value={movie.movie.description} readOnly />
                        </p>
                        <p>
                            <label>Note</label>
                            <Input type="number" min="1" max="5" defaultValue={movie.note} name="note" onChange={handleMovie} />
                        </p>
                        <p>
                            <label>Nombre de vues</label>
                            <Input type="number" min="1" max="100" defaultValue={movie.viewCount} name="viewCount" onChange={handleMovie} />
                        </p>
                    </Card>
                </div>
            ))
            }
            <Space wrap direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
                <Link to="/getMyList/1">
                    <Button type="primary" danger icon={<ArrowLeftOutlined />}
                        style={{ width: '200px', height: '40px', justifyContent: 'center' }} />
                </Link>

                <Button type="primary" icon={<EditOutlined />} onClick={updateMovie}
                    style={{ width: '200px', height: '40px', justifyContent: 'center' }} />

            </Space>

        </>
    )
}

export default DetailMovieComponent