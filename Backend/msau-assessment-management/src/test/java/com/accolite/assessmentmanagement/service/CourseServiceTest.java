package com.accolite.assessmentmanagement.service;

import com.msau.application.models.Project;
import com.msau.application.models.User;
import com.msau.application.repository.ProjectRepository;
import com.msau.application.services.ProjectService;
import com.msau.application.services.UnAuthorizedAccessException;
import com.msau.application.services.UserService;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class CourseServiceTest {

    @Mock
    private ProjectRepository courseRepository;

    @Mock
    private UserService userService;

    private ProjectService courseService;
    private Project course;
    private User user;

    @Before
    public void setUp() throws Exception {
        courseService = new ProjectService(userService, courseRepository);
    }



    @Test
    public void getCourseByIdTest(){

        // Creating course with id 114
        course = new Project("New Course","Top course for logging");
        // Creator of course id 114
        user = new User("103797182174759514929", "Neel Shah", "neelshah.1998@gmail.com");

        course.setId(114L);
        course.setUser(user);

        // When
        Mockito.when(courseRepository.findById(114L)).thenReturn(java.util.Optional.ofNullable(course));
        Project newCourse = courseService.getCourseById(114L);

        // Assert
        assertEquals(course, newCourse);
    }

    @Test
    public void authorizedUser_checkUserByIdSaveCourseTest() throws UnAuthorizedAccessException {

        // Creating course with id 114
        course = new Project("New Course Edit Test","Top course for logging");
        // Creator of course id 114
        user = new User("103797182174759514929", "Neel Shah", "neelshah.1998@gmail.com");

        course.setId(114L);
        course.setUser(user);

        // When
        Mockito.when(courseService.saveCourse(course)).thenReturn(course);
        Project newCourse = courseService.checkUserByIdSaveCourse(user.getId(), course);

        // Assert
        assertEquals(course, newCourse);
    }

    @Test(expected = UnAuthorizedAccessException.class)
    public void unAuthorizedUser_checkUserByIdSaveCourseTest() throws UnAuthorizedAccessException {

        // Creating course with id 114
        course = new Project("New Course Edit Test","Top course for logging");
        // Creator of course id 114
        user = new User("103797182174759514929", "Neel Shah", "neelshah.1998@gmail.com");

        course.setId(114L);
        course.setUser(user);

        // No need of mocking here, since exception is thrown before function call
        Project newCourse = courseService.checkUserByIdSaveCourse("107777360892079263531", course);
    }
}
