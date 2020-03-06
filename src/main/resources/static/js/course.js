var courseIdToDelete;

$(document).ready(function () {
    $('#getTeachersButton').click(getTeachers);
    $('#getCoursesButton').click(getCourses);
    $('#createTeachersButton').click(createTeacher);
    $('#createCoursesButton').click(createCourses);
    $('#deleteCourse').click(removeCourse);
    $('#deleteTeacher').click(removeTeacher);

    getTeachers();
    getCourses();



function getCourses() {
    $.get('api/course', function (courses) {
        displayCourses(courses);
    });
}



function displayCourses(courses) {
    var courseContainer = $('#courseContainer');
    courseContainer.empty();
    $.each(courses, function (index, course) {
        $('#courseContainer').append(' <tr><td>id: ' + course.id + '   </td>     <td>    course name: ' +
            course.name + '  <td>  <td>    course teacher: ' +
            course.teacher.name + '  <td><td><button class="remove-button" courseId="' + course.id + '">delete</button></td></tr>');
    });
    $('#courseContainer .remove-button').click(showRemoveCourseDialog);
}

function postCourses(course) {
    var jsonCourse = JSON.stringify(course);

    $.ajax({
        url: 'api/course',
        type: 'POST',
        contentType: 'application/json',
        success: function (getCourses) {

            alert('creating new course');
        },
        error: function () {
            alert('Try again ,Something is wrong');
        }

    });

}

function createCourses() {
    var courseName = $('#courseNameinput').val();


    if (!courseName) {
        alert('the course should set');
        return;
    }
    if (courseName.length < 2) {

        alert('try again,name is too short');
        return;
    }

    var course = {
        name: courseName
    };
    postCourse(course);

}


function showRemoveCourseDialog() {
    courseIdToDelete = $(this).attr('courseId');
    $('#courseModal').modal('show');
}

function removeCourse() {
    var courseId = courseIdToDelete;
    $.ajax({
        url: 'api/course/' + courseId,
        type: 'delete',
        success: function () {
            alert('course' + courseId + 'deleted.');
            $('#courseModal').modal('hide');
        },
        error: function () {
            alert('somethings went wrong');
        }
    });
}
