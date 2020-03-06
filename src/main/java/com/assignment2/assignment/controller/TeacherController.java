package com.assignment2.assignment.controller;

import com.assignment2.assignment.model.Teacher;
import com.assignment2.assignment.reositories.TecherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/teacher")
public class TeacherController {
    @Autowired
    private TecherRepository techerRepository;

    @GetMapping
    public List<Teacher> getTeachers() {
        return techerRepository.findAll();

    }

    @PostMapping
    public void addTeacher(@RequestBody Teacher teacher) {
        techerRepository.save(teacher);
    }

    @DeleteMapping("/{id}")
    public void deleteTeacher(@PathVariable Long id) {
        techerRepository.deleteById(id);

    }

    @PutMapping("/{id}")
    public void updateCourse(@PathVariable Long id, @RequestBody Teacher teacher) {
        teacher.setId(id);
        techerRepository.save(teacher);


    }
}


