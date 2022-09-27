import React, {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import NavBar from "../NavBar/NavBar";
// import "../../CssAdicional/Home.css"
import Question from "../Preguntas/Question";
import { getQuestions } from "../../Controllers/Actions/questionsActions";




const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{  
    dispatch(getQuestions())},[dispatch]);

    const allQuestions = useSelector ((state)=>state.questionReducer.allQuestions.data || state.questionReducer.allQuestions)
    const active = allQuestions.filter(e=>e.active===true)

  return (<div>
   
<div className="container">
  <NavBar/>
    <div className="row">
        <div className="col-4 col-lg-2">
        <Filters/>
    </div>
    <div className="col">
      <div className="container">
        {active?.map((e,id)=>{

          return(
              <div key={id}>
                <Link to={`/QuestionDetail/${e.id}`}>
                <Question key={e.id} title={e.title} description={e.description} ratingAverage={e.ratingAverage} likes={e.votesxquestions.length} userId={e.userId}> </Question>
                </Link>
              </div>
          )
        })}
      </div>
    </div>
    </div>
    </div>
  </div>  );
}
 
export default Home;