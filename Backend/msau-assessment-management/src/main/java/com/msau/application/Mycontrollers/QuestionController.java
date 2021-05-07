package com.msau.application.Mycontrollers;

import com.msau.application.models.Question;
import com.msau.application.services.QuestionService;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService){
        this.questionService = questionService;
    }

    @GetMapping("/api/questions")
    public List<Question> getQuestions(){
        return questionService.getAllQuestions();
    }

    @PostMapping(value = "/api/question", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Question saveQuestion(@RequestBody Question question){
        return questionService.saveQuestion(question);
    }

}
