"# Lesson-CodeMonday" 

## Getting Start
- STEP 1 : Clone Lesson-CodeMonday https://github.com/FrameTee29/Lesson-CodeMonday.git and install
```bash
# clone project
$ git clone https://github.com/FrameTee29/Lesson-CodeMonday.git
$ cd Lesson-CodeMonday
```

- STEP 2 : Start project
```bash
# Pull docker
$ build.docker.sh

# Run project
$ build.api.sh
```

## API Docs
Teaher 
- GET : get all teacher path /api/teacher
- POST : create teahcer path /api/teacher
Example body
```bash
{
    "first_name": "John",
    "last_name": "Snow",
    "age": 22
}
```
Lesson
- GET : get all course path /api/course
- POST : create course path /api/course
Example body
```bash
{
    "course_name": "English",
    "course_description": "Passive voice",
    "teacher_id": 1
}


