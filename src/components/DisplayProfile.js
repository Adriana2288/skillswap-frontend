import React, { Component } from "react"
import axios from "axios"
import { withRouter } from 'react-router-dom';

class DisplayProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.user_id,
            country: this.props.country,
            bio: this.props.bio,
            skills: this.state.skills,
            interests: this.state.interests
        }
    }

   fetchUserProfile = (user_id) => {
      axios.get()
   } 

   componentDidMount() {
       this.fetchUserProfile(this.state.user_id)
   }

    onSubmit = (e) => {
        e.preventDefault();
        
        axios
          .post("http://localhost:3000/api/profile/userProfile", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res)
            this.props.history.push({
              pathname: '/profile',
              search: '?query=userId',
            })
          })
          .catch((error) => {
            console.log(error);
          });
      };
     
    render () {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default withRouter(DisplayProfile);