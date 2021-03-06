import React, { Component } from "react"
import axios from "axios"
import { CountryDropdown } from 'react-country-region-selector'
import { withRouter } from 'react-router-dom';

class Profile extends Component {
    constructor () {
        super ()
        this.state = {
            // userId: props.location.state.userId,
            // profileImg: "",
            country: "",
            bio: "",
            skills: [],
            interests: []
        }
    }
    onChangeCountry = (val) => {
        this.setState({ country: val })
    }
    onChangeBio = (event) => {
        this.setState({ bio: event.target.value })
    }
     onChangeSkills = (event) => {
        let elements = document.querySelectorAll("input[name=skill]")
        let skillsArr = []
        for (let skill of elements) {
            if (skill.checked) {
                skillsArr.push(skill.value)
           }
        }
        this.setState({ skills: skillsArr })
    }
    onChangeInterests = (event) => {
        let elements = document.querySelectorAll("input[name=interest]")
        let interestsArr = []
        for (let interest of elements) {
            if (interest.checked) {
                interestsArr.push(interest.value)
           }
        }
        this.setState({ interests: interestsArr })
    }
    // handleImg = (event) => {
    //     console.log("image")
    //     let file = event.target.files[0]
    //     let reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.addEventListener("load", () => {
    //     this.setState({ profileImg: reader.result})
    //     })
    // }
    onSubmit = (val) => {
        val.preventDefault()
        const data = {
            // userId: this.state.userId,
            // profileImg: this.state.profileImg,
            country: this.state.country,
            bio: this.state.bio,
            skills: this.state.skills,
            interests: this.state.interests
        }
        axios
        .post("http://localhost:3000/api/profile/registration",  JSON.stringify(data), {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res)
            this.setState({
            //   userId: "",
              country: "",
              bio: "",
              skills: [],
              interests: [],
            });
            this.props.history.push({
                pathname: '/userProfile',
                search: '?query=userId',
                // state: { userId: res.data.user} 
              })
          })
          .catch((error) => {
            console.log(error)
          })
    }
    render () {
        const { country } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {/* <input type="file" name="file" onChange={this.handleImg}/> */}
                    <label>
                        Please select your country:
                    <CountryDropdown
                    value={country}
                    onChange={this.onChangeCountry}/>
                    </label>
                   <br/>
                    <label>
                        Tell us about yourself:
                        <textarea value={this.state.bio} onChange={this.onChangeBio}>
                        </textarea>
                    </label>                   
                     <br/>
                     <label>
                         Please choose what you would like to learn:
                     </label>
                     <input type="checkbox" name="skill" value="music" onChange={this.onChangeSkills}/>
                     <label>Music</label>
                     <input type="checkbox" name="skill" value="computing" onChange={this.onChangeSkills}/>
                     <label>Computing</label>
                     <input type="checkbox" name="skill" value="science" onChange={this.onChangeSkills}/>
                     <label>Science</label>
                     <input type="checkbox" name="skill" value="art" onChange={this.onChangeSkills}/>
                     <label>Art</label>
                     <input type="checkbox" name="skill" value="languages" onChange={this.onChangeSkills}/>
                     <label>Languages</label>
                     <input type="checkbox" name="skill" value="philosophy" onChange={this.onChangeSkills}/>
                     <label>Philosophy</label>
                     <input type="checkbox" name="skill" value="spirituality/theology" onChange={this.onChangeSkills}/>
                     <label>Spirituality/Theology</label>
                     <input type="checkbox" name="skill" value="sports" onChange={this.onChangeSkills}/>
                     <label>Sports</label>
                     <input type="checkbox" name="skill" value="cooking" onChange={this.onChangeSkills}/>
                     <label>Cooking</label>
                     <input type="checkbox" name="skill" value="gardening" onChange={this.onChangeSkills}/>
                     <label>Gardening</label>
                     <br/>
                     <label>
                         Please choose what you would like to teach:
                     </label>
                     <input type="checkbox" name="interest" value="music" onChange={this.onChangeInterests}/>
                     <label>Music</label>
                     <input type="checkbox" name="interest" value="computing" onChange={this.onChangeInterests}/>
                     <label>Computing</label>
                     <input type="checkbox" name="interest" value="science" onChange={this.onChangeInterests}/>
                     <label>Science</label>
                     <input type="checkbox" name="interest" value="art" onChange={this.onChangeInterests}/>
                     <label>Art</label>
                     <input type="checkbox" name="interest" value="languages" onChange={this.onChangeInterests}/>
                     <label>Languages</label>
                     <input type="checkbox" name="interest" value="philosophy" onChange={this.onChangeInterests}/>
                     <label>Philosophy</label>
                     <input type="checkbox" name="interest" value="spirituality/theology" onChange={this.onChangeInterests}/>
                     <label>Spirituality/Theology</label>
                     <input type="checkbox" name="interest" value="sports" onChange={this.onChangeInterests}/>
                     <label>Sports</label>
                     <input type="checkbox" name="interest" value="cooking" onChange={this.onChangeInterests}/>
                     <label>Cooking</label>
                     <input type="checkbox" name="interest" value="gardening" onChange={this.onChangeInterests}/>
                     <label>Gardening</label>
                     <br/>        
            <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default withRouter(Profile);