import { FC } from "react";
import CourseItem from "../CourseItem/CourseItem";
import { StyledList } from "./CourseList.styled";
import { ICoursesList } from "../../interfaces/Courses";

const CourseList:FC<ICoursesList> = ({ memoCourses }) => {
  return (
    <StyledList>
      {memoCourses.map((course) => {
        return <CourseItem key={course.id} course={course} />;
      })}
    </StyledList>
  );
};

export default CourseList;