// import React, { Component } from "react"
// import axios from "axios"

// class DisplayProfile extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             userId
//             profileImg: "",
//             country: "",
//             bio: "",
//             skills: [],
//             interests: []
//         }
//     }

//     componentDidMount = () => {
//         this.getProfile()
//     }

//     getProfile = () => {
//         axios.get("/userProfile")
//         .then((response) => {
//             const data = response.data
//             console.log("Data received")
//         })
//         .catch(() => {
//             console.log(error)
//         })
//     }
// }

// export default DisplayProfile