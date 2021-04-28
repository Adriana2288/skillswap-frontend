import React, { Component } from "react"
import axios from "axios"
import { CountryDropdown } from 'react-country-region-selector'



class Profile extends Component {
    constructor (props) {
        super (props)
        this.state = {
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

    onSubmit = (val) => {
        val.preventDefault()

        const data = {
            country: this.state.country,
            bio: this.state.bio,
            skills: this.state.skills,
            interests: this.state.interests
        }

        axios
        .post("http://localhost:5000/api/profile/registration",  JSON.stringify(data), {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.setState({
              country: "",
              bio: "",
              skills: [],
              interests: [],
            });
            this.props.history.push("/")
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
                         Please choose what you would like to teach:
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

export default Profile