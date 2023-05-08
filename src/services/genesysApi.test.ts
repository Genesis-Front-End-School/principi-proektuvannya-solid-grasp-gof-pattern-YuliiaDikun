import axios from 'axios';
import { toast } from 'react-toastify';
import wiseyAPI from './genesysApi';
import { mockCourse } from "../__mocks__/mock_course";
import { mockCourses } from '../__mocks__/mock_courses';
jest.mock('axios');

describe('WiseyAPI', () => {
  describe('getCourses', () => {
    it('should handle success', async () => {
      const courses = mockCourses;
      const resp = { data: courses };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
        () => Promise.resolve(resp),
      );
      return wiseyAPI.getCourses().then(resp => expect(resp).toEqual(courses));
    });

    it('should handle error when getCourses fails', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
        () => Promise.reject(),
      );
      return wiseyAPI
        .getCourses()
        .catch(() =>
          expect(toast.error).toHaveBeenCalledWith('Something goes wrong.'),
        );
    });
  });

  describe('getCourseById', () => {
    it('should handle success', async () => {
      const id = 'dd361e1f-9094-4103-81e1-bf4f4a0eb5f7';
      const course = mockCourse;
      const resp = { data: course };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
        () => Promise.resolve(resp),
      );
      return wiseyAPI
        .getCourseById(id)
        .then(resp => expect(resp).toEqual(course));
    });

    it('should handle error when getCourseById fails', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
        () => Promise.reject(),
      );
      return wiseyAPI
        .getCourseById('6cd0d6ac-4462-4154-bece-6590ad307b76')
        .catch(() =>
          expect(toast.error).toHaveBeenCalledWith('Something goes wrong.'),
        );
    });
  });
});
