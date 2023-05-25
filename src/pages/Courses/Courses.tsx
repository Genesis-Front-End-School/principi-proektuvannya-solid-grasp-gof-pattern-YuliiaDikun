import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import wiseyAPI from '../../services/genesysApi';
import { sortedByDate } from '../../helpers/sortedByDate';
import { Container } from '../../components/Layouts/SharedLayout/SharedLayout.styled';
import Logo from '../../components/UI/Logo/Logo';
import CourseList from '../../components/Courses/CourseList/CourseList';
import Loader from '../../components/UI/Loader/Loader';
import Pagination from '../../components/Courses/Pagination/Pagination';
import { ICoursesItem } from '../../interfaces/Courses';
import { StyledSection, MainTitle } from './Courses.styled';
import { toast } from 'react-toastify';

const PAGE_SIZE = 10;
const FIRST_PAGE = '1';

const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<ICoursesItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const page: string = searchParams.get('page') ?? FIRST_PAGE;

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await wiseyAPI.getCourses();
        if (res) {         
          const sortedCourses = sortedByDate(res.courses);
          setCourses(sortedCourses as ICoursesItem[]);
        }
      } catch (error) {
        toast.error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, []);

  const updateQueryString = (page: string) => {
    const nextParams: Record<string, string> = page !== '' ? { page } : {};
    setSearchParams(nextParams);
  };

  const currentCourseData = useMemo(() => {
    const firstPageIndex: number = (Number(page) - 1) * PAGE_SIZE;
    const lastPageIndex: number = firstPageIndex + PAGE_SIZE;
    return courses.slice(firstPageIndex, lastPageIndex);
  }, [page, courses]);

  return (
    <StyledSection>
      <Container>
        {isLoading && <Loader />}
        <MainTitle>
          <Logo /> - Learning has never been more convenient!
        </MainTitle>
        <CourseList memoCourses={currentCourseData} />
        <Pagination
          currentPage={Number(page)}
          totalCount={courses.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page: number) => updateQueryString(String(page))}
        />
      </Container>
    </StyledSection>
  );
};

export default Courses;
