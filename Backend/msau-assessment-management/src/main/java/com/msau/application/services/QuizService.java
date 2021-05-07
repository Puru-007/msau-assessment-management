package com.msau.application.services;

import com.msau.application.models.Question;
import com.msau.application.models.Quiz;
import com.msau.application.repository.QuizRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class QuizService {

    private final QuizRepository quizRepository;
    private final QuestionService questionService;

    public QuizService(QuizRepository quizRepository, QuestionService questionService){
        this.quizRepository = quizRepository;
        this.questionService = questionService;
    }

    @Transactional
    public List<Quiz> getAllQuizes(){
        return StreamSupport.stream(quizRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @Transactional
    public Quiz getQuizById(Long quizId){
        return quizRepository.findById(quizId).get();
    }

    @Transactional
    public Quiz saveQuiz(Quiz quiz){
        return quizRepository.save(quiz);
    }

    public Quiz addQuestions(List<Question> questions, Long quizId){
        Quiz currQuiz = getQuizById(quizId);
        Set<Question> currQuestions = currQuiz.getQuestions();
        currQuestions.addAll(questions);
        currQuiz.setQuestions(currQuestions);
        return saveQuiz(currQuiz);
    }

    public Quiz addQuestionsById(List<Long> questionIds, Long quizId){
        List<Question> questionsToAdd = new ArrayList<Question>();
        for(Long qid: questionIds){
            questionsToAdd.add(questionService.getQuestionById(qid));
        }
        return addQuestions(questionsToAdd, quizId);
    }
}
