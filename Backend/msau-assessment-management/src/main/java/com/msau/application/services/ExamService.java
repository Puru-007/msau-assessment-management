package com.msau.application.services;

import com.msau.application.models.Question;
import com.msau.application.models.Quiz;
import com.msau.application.models.Result;
import com.msau.application.models.User;
import com.msau.application.repository.ResultRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ExamService {
    private final ResultRepository resultRepository;
    private final QuizService quizService;
    private final QuestionService questionService;
    private final UserService userService;


    public ExamService(ResultRepository resultRepository, QuizService quizService,
                        QuestionService questionService, UserService userService){
        this.resultRepository = resultRepository;
        this.quizService = quizService;
        this.questionService = questionService;
        this.userService = userService;
    }

    public List<Quiz> getAllExams(){
        List<Quiz> quizes = quizService.getAllQuizes();


        for(Quiz q: quizes){
            for(Question que: q.getQuestions()){
                que.setCorrectOption(null);
            }
        }
        return quizes;
    }



    @Transactional
    public List<Result> getAllResults() {
        return StreamSupport.stream(resultRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }


    @Transactional
    public Result saveResult(Result result){
        return resultRepository.save(result);
    }



    public Result getResultByQuizIdAndUserId(Long quizId, String userId){
        Result result = new Result(quizId, -1L, -1L);
        for(Result r : getAllResults()){
            if(r.getQuizId().equals(quizId) && r.getUser().getId().equals(userId)){
                result = r;
                break;
            }
        }
        return result;
    }



    public Quiz getExamByQuizIdAndUserId(Long quizId, String userId){
//        If user has already taken exam, return empty quiz
        boolean userHasTakenTest = true;
        Quiz exam = new Quiz();

        Result res = getResultByQuizIdAndUserId(quizId, userId);
        if(res.getScore().equals(-1L)) userHasTakenTest = false;

        if(userHasTakenTest) {
            exam = new Quiz("Test already taken", "Can only take test once");
            exam.setId(-1L);
        }
        else{
            exam = quizService.getQuizById(quizId);
            for(Question q : exam.getQuestions()){ q.setCorrectOption(null); }
        }

        return exam;
    }

    public Result evaluateExam(Quiz exam, Long quizId, String userId){
        Set<Question> questions = exam.getQuestions();
        Long total = (long) questions.size();
        Long score = 0L;
        for (Question q : questions){
            Long qid = q.getId();
            Question currQ = questionService.getQuestionById(qid);
            if(currQ.getCorrectOption()-1 == q.getCorrectOption()) score += 1;
        }

        Result result = new Result(quizId, score, total);
        User curr = userService.getUserById(userId);
        result.setUser(curr);
        return saveResult(result);

    }

}
