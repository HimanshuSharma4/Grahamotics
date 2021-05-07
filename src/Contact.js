import React , {useState} from 'react';
import Developer from './Developer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Contact.css';
import SendIcon from '@material-ui/icons/Send';
import firebase from './firebase';

function Contact() {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      
    const SendQuery = (e) => {
        e.preventDefault();
        firebase.firestore().collection('Contacts').add({
            Name : Name,
            Email : Email,
            Number : Number,
            Message : Query,  
        })
        .then(()=> {
            alert("message has been submitted ")
        })
        .catch(error => {
            alert(error.message);
        })
        setName('');
        setEmail('');
        setNumber('');
        setQuery('');
    }

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Number,setNumber] = useState('');
    const [Query, setQuery] = useState('');

    const classes = useStyles();
    return (
        <div className='contact'>
            
            <div className="contact__left">
            
                <Developer  avatar ='https://lh3.googleusercontent.com/a-/AOh14GgDl4TwNN-ZuXphno43VtesCBxe9pd7LPOrLbxjuQ=s70-p-k-rw-no' 
                            title='Anany Deep' 
                            FB__id='https://www.facebook.com/deepanany' 
                            LinkedIn__Url='https://www.linkedin.com/in/anany-deep-6a9130174/'
                            Github_url="https://github.com/AnanyDeep"
                            Contribution="Mobile Application Developer and Configurator; connection is setup by me, the code for Home Automation and NodeMCU Micro-Controller is written by me"
                            />
                            
                
                <Developer  avatar ='https://avatars.githubusercontent.com/u/60513362?s=60&v=4' 
                            title='Suraj Kumar' 
                            FB__id='https://www.facebook.com/LuckySuraj2468369/' 
                            LinkedIn__Url='https://www.linkedin.com/in/suraj-kumar-552183197/'
                            Github_url="https://github.com/Suraj-Kumar-2468"
                            Contribution="Website development, the UI configuration, working, and responsiveness is done by me using React JS."
                            />

                <Developer  avatar ='https://scontent.fdel20-1.fna.fbcdn.net/v/t1.6435-9/72848694_2122631308038601_3757995817340764160_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HJy-fS3bfqUAX__xkuA&_nc_ht=scontent.fdel20-1.fna&oh=e6bd018609f60882d292090c61aefc8a&oe=60B8EA48' 
                            title='Himanshu Sharma' 
                            FB__id='https://www.facebook.com/harry.kingstorm.99/' 
                            LinkedIn__Url='https://www.linkedin.com/in/himanshu-sharma-5289451ab/'
                            Github_url="https://github.com/HimanshuSharma4"
                            Contribution="Debugging, DataBase and Backend handling is done by me in both IoT and the Website, the firebase code-configuration is done by me,"
                            />
            </div>
            
            <div className="contact__right">
            
            <form className="contact-form" onSubmit={SendQuery}>
                
                <input  className="Contact__input"
                style={{      
                    border: "2px solid skyblue",
                  }} 
                        type="text"
                        value={Name} 
                        placeholder="Name" 
                        onChange={(event)=>{setName(event.target.value)}}/>
                
                <input  className="Contact__input" 
                style={{      
                    border: "2px solid skyblue",
                  }}
                        type="email"
                        value={Email} 
                        placeholder="Email" 
                        onChange={(event)=>{setEmail(event.target.value)}}/> 

                <input  className="Contact__input" 
                style={{      
                    border: "2px solid skyblue",
                  }}
                        type="number"
                        value={Number} 
                        placeholder="Contact Number" 
                        onChange={(event)=>{
                            setNumber(event.target.value); 
                            if (event.target.value.length > 10) {
                            alert('Enter a Valid Contact Number');
                        }}}/> 
                

                <input  className="Query__input"   
                style={{      
                    border: "2px solid skyblue",
                  }}
                        type="text" 
                        value={Query}    
                        placeholder="Query"
                        onChange={(event)=>{setQuery(event.target.value)}}/> 
               
                <Button type="Submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<SendIcon />} 
                        style = {{
                                "margin-left" : "0px" 
                                ,height:"30%"
                                ,width:"93%"}}>

                        Send
            
                </Button>
            
            </form>
        </div>
    </div>
    )
}

export default Contact
