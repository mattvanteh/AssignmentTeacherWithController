var teacherIdToDelete;
function getTeachers() {
    $.get('api/teacher', function (teachers) {
        displayTeachers(teachers);
    });
}

 var teacherTable = $('#teacherTable').DataTable({
        ajax: {
            url: 'api/teacher',
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'name' }
        ]
    });
    $('#reloadButton').click(function () {
        teacherTable.ajax.reload();
    });


});

function displayTeachers(teachers) {

    var teacherContainer = $('#teacherContainer');
    teacherContainer.empty();
    //loop
    $.each(teachers, function (index, teacher) {
          $('#teacherContainer').append(' <tr><td>id: ' + teacher.id + '</td> +
            '<td> teacher: ' + teacher.name + '</td><td><button class="remove-button" teacherId="' + teacher.id + '" >delete</button></td></tr>');
    });
    $('#teacherContainer .remove-button').click(showRemoveTeacherDialog);
}



function postTeacher(teacher) {
    var jsonTeacher = JSON.stringify(teacher);

    $.ajax({
        url: 'api/teacher',
        type: 'POST',
        contentType: 'application/json',
        data: jsonTeacher,
        success: function () {

            alert('you created a new teacher!');
        },
        error: function () {
            alert('try again. There is something wrong');
        }

    });

}

function createTeacher() {
    var teacherName = $('#teacherNameInput').val();

    if (!teacherName) {
        alert('the teacher should be set');
        return;
    }
    if (teacherName.length < 3) {
        alert(' name is short');
        return;
    }
    var teacher = {
        name: teacherName
    };
    postTeacher(teacher);

}

function teacherSelect(teacher) {
    var course = {
        teacher: {
            id: $('#teacherSelect').val()
        },
        name: $('#teacherNameInput').val()
    }
    var jsonTeacher = JSON.stringify(teacher);
}
function removeTeacher() {
    var teacherId = teacherIdToDelete;
    $.ajax({
        url: 'api/teacher/' + teacherId,
        type: 'DELETE',
        success: function () {
            alert('teacher' + teacherId + 'deleted.');
            $('#teacherModal').modal('hide');
        },
        error: function () {
            alert('Something went wrong..');
        }
    });
}

function showRemoveTeacherDialog() {
    teacherIdToDelete = $(this).attr('teacherId');
    $('#teacherModal').modal('show');
}
