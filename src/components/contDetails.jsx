import React, { Component} from 'react';
class ContactDetails extends Component {
    state = {
       persons : [
        {
        name: "jack",
        age : 25,
        skills : "React",
        email: "jacl@email.com",
        mobile: "75764333333",
        },
        {
            name: "Anna",
            age : 23,
            skills : "React,Node.js",
            email: "Anna@email.com",
            mobile: "757678883", 
        },
        {
            name: "Steve",
            age : 35,
            skills : "Pytho,javascript",
            email: "steve@email.com",
            mobile: "99884333333",
        },
       ],
       indexPersons: -1,
       showContact : false,

    };
    showDetails = (index) => {
        let s1 = {...this.state}
        s1.indexPersons = index;
        s1.showContact = false;
        this.setState(s1);
    };
    showPersons = () => {
        const {indexPersons,persons,showContact} = this.state;
        return (
            <React.Fragment>
        Name : {
        persons[indexPersons].name
        } 
        <br/>
        Age : {persons[indexPersons].age
        } <br/>
        Skills : {
            persons[indexPersons].skills
        } <br/>

        <button className ="btn btn-primary m-2" onClick={()=>this.showContactDetails()}>Contact Info</button>
        <br/>
        {showContact ? (
        <React.Fragment>
            Email : {persons[indexPersons].email} <br/>
            Mobile : {persons[indexPersons].mobile} <br/>
        </React.Fragment>
        ) : (
            ""
        )}
        </React.Fragment>
        );
    };
    showContactDetails = ()=>{
        let s1 = {...this.state};
        s1.showContact = true;
        this.setState(s1);

    };
    render (){
        const {persons,indexPersons} = this.state;
        return <React.Fragment>
           {persons.map((p1,index)=> (
           <button className="btn btn-primary m-2" onClick={()=>this.showDetails(index)}>{p1.name}</button>))} 
           <br/>
            {indexPersons >= 0 ? this.showPersons(): ""}
        </React.Fragment>
    }

}
export default ContactDetails;