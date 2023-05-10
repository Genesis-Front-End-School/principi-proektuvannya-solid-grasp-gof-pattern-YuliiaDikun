import React from "react";
import Lesson from "../Lesson/Lesson";

const LessonsList = ({ lessons, openLesson, toggleLessonVideo }) => {
  return (
    <ul>
      {lessons?.map((lesson, i) => {
        return (
          <Lesson
            key={lesson.id}
            lesson={lesson}
            i={i}
            openLesson={openLesson}
            toggleLessonVideo={toggleLessonVideo}
          />
        );
      })}
    </ul>
  );
};

export default LessonsList;
