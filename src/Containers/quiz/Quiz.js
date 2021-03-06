import React, { Component } from "react";
import { ActiveQuiz } from "../../Components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.css";

export default class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            activeQuestion: 0,
            answerState: null,
            quiz: [
                {
                    question: "What color is the sky?",
                    rightAnswerId: 4,
                    id: 1,
                    answers: [
                        { text: "Black", id: 1 },
                        { text: "Red", id: 2 },
                        { text: "Green", id: 3 },
                        { text: "Blue", id: 4 },
                    ],
                },
                {
                    question: "What color is the grass?",
                    rightAnswerId: 3,
                    id: 2,
                    answers: [
                        { text: "Yellow", id: 1 },
                        { text: "Violet", id: 2 },
                        { text: "Green", id: 3 },
                        { text: "White", id: 4 },
                    ],
                },
            ],
        };
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log("Finished");
                } else {
                    this.setState((prevState) => {
                        return { activeQuestion: prevState.activeQuestion + 1, answerState: null };
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState:{[answerId]: 'error'}
            })
        }
    };

    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state = {this.state.answerState}
                    />
                </div>
            </div>
        );
    }
}
