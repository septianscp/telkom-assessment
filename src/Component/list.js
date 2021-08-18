import React, { Component } from "react"
import { Spinner, Card } from 'react-bootstrap'

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
                // jsonData is parsed json object received from url
                console.log(jsonData)
                this.setState({ data: jsonData, isLoading: false })
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }

    componentDidMount() {
        this.getData('timmywheels')
    }

    listCard = () => {
        return (
            <Card >
                <Card.Body style={{ textAlign: 'left' }}>
                    <Card.Title >Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
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
                        this.listCard()
                }
            </div>
        )

    }
}



export default List
