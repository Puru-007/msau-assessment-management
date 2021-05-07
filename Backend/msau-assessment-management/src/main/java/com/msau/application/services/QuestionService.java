package com.msau.application.services;

import com.msau.application.models.Question;
import com.msau.application.repository.QuestionRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }

    @Transactional
    public List<Question> getAllQuestions(){
        return StreamSupport.stream(questionRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @Transactional
    public Question getQuestionById(Long questionId){
        return questionRepository.findById(questionId).get();
    }

    @Transactional
    public Question saveQuestion(Question question){
        question.addOptions(question.getOptions());
        return questionRepository.save(question);
    }

}
