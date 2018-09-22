import React, { Component } from 'react';

class QuizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
      counter: 0,
      // data : props.questions,
      // parentQuizName : props.quizParentName,
    };
  }



  updateCounter(){
    const {counter} = this.state;
    this.setState({
        counter  : counter + 1
    })
    console.log(counter , "coundter");
}


  renderQuestions() {
    const data = this.props.data;
    const {counter} = this.state;

    if (data.qArr.length - 1 === counter) {
      // score = correct * 20;
      // document.getElementById("quizcontainer").style.display = "none";
      // document.getElementById("resultContainer").style.display = "block";
      // document.getElementById("score").innerHTML = "Your score is" + score + "%";
      alert("test has been end");
      
  }
  else{

  return(
        <div>
            <h2> {data.qArr[counter].question} </h2>
            <h4> {data.qArr[counter].option1} </h4>
            <h4> {data.qArr[counter].option2} </h4>
            <h4> {data.qArr[counter].option3} </h4>
            <h4> {data.qArr[counter].option4} </h4>
            <br/><br/>
            <button 
            onClick={this.updateCounter.bind(this)}
            > Next </button>
              
            </div>
    );
  }
    // console.log(data.qArr[0].question);
  }

  renderQuizInfo() {
    const a = this.props.quizParentName;
    const data = this.props.data;
    // console.log(data);
    return (
      <div>
        <h2> he is a boy</h2>
        <h1> this is {a} Quiz</h1>
        <h2> {a}: {data.name} </h2>
        <h2> Total Time is:  {data.time} </h2>
        <h2> Total Questions: {data.questions} </h2>
        <button onClick={() => {    this.setState({
      boolean: true,
    })}}>
    Start Quiz </button>
      </div>
    )
  }

  render() {
    const { boolean } = this.state;
    return (
      <div className="App">
        {!boolean && this.renderQuizInfo()}
        {boolean && this.renderQuestions()}
      </div>
    );
  }
}

export default QuizList;
