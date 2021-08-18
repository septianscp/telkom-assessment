import React, { Component } from "react"

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



    render() {
        return (
            <div>
                aaa
            </div>
        )

    }
}



export default List
