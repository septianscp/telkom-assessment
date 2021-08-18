import React, { Component } from "react"
import { Spinner, Card } from 'react-bootstrap'
import moment from 'moment'
import '../App.css';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false
        }
        this.getData = this.getData.bind(this)
    }

    getData = (userName) => {
        const url = `https://api.github.com/users/${userName}/repos`
        this.setState({ isLoading: true })
        fetch(url)
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({ data: jsonData, isLoading: false })
            })
            .catch((error) => {
                alert(error)
            })
    }

    componentDidMount() {
        this.getData('timmywheels')
    }

    listCard = () => {
        const { data } = this.state
        return (
            <div className="list-container">
                {
                    data.map((d, index) => {
                        return (
                            <Card style={{ marginBottom: 5, cursor: 'pointer' }} onClick={() => window.open(d.html_url, '_blank')
                            }>
                                <Card.Body style={{ textAlign: 'left' }}>
                                    <Card.Title >{d.name}</Card.Title>
                                    <Card.Text>
                                        <div className="list-item-desc">{d.description}</div>


                                        <div className="list-item-text">
                                            {
                                                d.language ?
                                                    `language : ${d.language}`
                                                    : ''
                                            }

                                        </div>
                                        <div className="list-item-text">🕒 updated at {moment(d.updated_at).format("DD MMMM YYYY")}</div>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        )
                    })
                }

            </div >
        )
    }

    render() {
        const { isLoading, data } = this.state
        return (
            <div>
                {
                    isLoading ?
                        <div>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">mohon tunggu</span>
                            </Spinner>
                        </div>
                        :
                        !isLoading && data.length == 0 ?
                            "Data tidak ada"
                            :
                            this.listCard()
                }
            </div>
        )

    }
}



export default List
