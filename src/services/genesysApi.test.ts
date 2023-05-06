import axios from 'axios';
import { toast } from 'react-toastify';
import wiseyAPI from './genesysApi';

jest.mock('axios');

describe('WiseyAPI', () => {
  describe('getCourses', () => {
    it('should handle success', async () => {
      const courses = [
        {
          id: '6cd0d6ac-4462-4154-bece-6590ad307b76',
          title: 'Cognitive psychology: hack your mind',
          tags: ['psychology'],
          launchDate: '2022-05-05T00:00:01.000Z',
          status: 'launched',
          description:
            'Learn how your brain, attention, and memory work. Discover how your cognitive processes influence your mental state.',
          duration: 7505,
          lessonsCount: 10,
          containsLockedLessons: false,
          previewImageLink:
            'https://wisey.app/assets/images/web/course-covers/cognitive-psychology',
          rating: 4.3,
          meta: {
            slug: 'cognitive-psychology',
            skills: [
              'Personal freedom ',
              'Self-assertion',
              'Taking responsibility ',
              'Resisting manipulations',
              'Managing passive-agression',
            ],
            courseVideoPreview: {
              link: 'https://wisey.app/videos/cognitive-psychology/preview/AppleHLS1/preview.m3u8',
              duration: 32,
              previewImageLink:
                'https://wisey.app/assets/images/web/course-covers/cognitive-psychology/preview',
            },
          },
        },
        {
          id: 'b44aaeca-1e02-471e-96c6-363f9d7e4f9f',
          title: 'Win your life back from fears and anxiety',
          tags: ['psychology'],
          launchDate: '2022-04-11T15:10:01.000Z',
          status: 'launched',
          description:
            'Learn how to deal with excessive anxiety and stress effectively. Get rid of intrusive thoughts and toxic beliefs.',
          duration: 5934,
          lessonsCount: 10,
          containsLockedLessons: false,
          previewImageLink:
            'https://wisey.app/assets/images/web/course-covers/win-your-life-back',
          rating: 4.6,
          meta: {
            slug: 'win-your-life-back',
            skills: [
              'Reducing anxiety ',
              'Fight or flight response ',
              'Negative thinking patterns',
              'Anchoring emotions',
              'Managing self-behaviour',
            ],
            courseVideoPreview: {
              link: 'https://wisey.app/videos/win-your-life-back/preview/AppleHLS1/preview.m3u8',
              duration: 34,
              previewImageLink:
                'https://wisey.app/assets/images/web/course-covers/win-your-life-back/preview',
            },
          },
        },
        {
          id: '2f772101-986b-4119-8f7c-a629cf2ac9b5',
          title: 'How to learn effectively',
          tags: ['learning ability'],
          launchDate: '2021-12-29T12:29:37.261Z',
          status: 'launched',
          description:
            'Earn a higher chance to success, gaining more from any education.',
          duration: 7530,
          lessonsCount: 10,
          containsLockedLessons: false,
          previewImageLink:
            'https://wisey.app/assets/images/web/course-covers/how-to-learn',
          rating: 4.2,
          meta: {
            slug: 'how-to-learn',
            skills: [
              'Memorization techniques',
              'Balanced perfectionism ',
              'Learning techniques',
              'Education styles',
              'Finding motivation',
            ],
            courseVideoPreview: {
              link: 'https://wisey.app/videos/how-to-learn/preview/AppleHLS1/preview.m3u8',
              duration: 29,
              previewImageLink:
                'https://wisey.app/assets/images/web/course-covers/how-to-learn/preview',
            },
          },
        },
      ];
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
      const course = {
        id: 'dd361e1f-9094-4103-81e1-bf4f4a0eb5f7',
        title: 'A Road to Healthy Relationships',
        tags: ['psychology'],
        launchDate: '2022-09-08T14:43:08.801Z',
        status: 'launched',
        description:
          'In this course, we’ll show you what healthy relationships can look like and how to build one yourself.',
        duration: 1497,
        previewImageLink:
          'https://wisey.app/assets/images/web/course-covers/a-road-to-healthy-relationships',
        rating: 4.7,
        meta: {
          slug: 'a-road-to-healthy-relationships',
          skills: [
            'Mutual respect',
            'Ahcieving intimacy ',
            'Building trust ',
            'Managing conflicts',
            'Open communication',
          ],
          courseVideoPreview: {
            link: 'https://wisey.app/videos/a-road-to-healthy-relationships/preview/AppleHLS1/preview.m3u8',
            duration: 34,
            previewImageLink:
              'https://wisey.app/assets/images/web/course-covers/a-road-to-healthy-relationships/preview',
          },
        },
        lessons: [
          {
            id: '3e2c53ee-a3db-4b19-a3a4-877cb0838560',
            title: 'It Starts at First Sight',
            duration: 271,
            order: 1,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/a-road-to-healthy-relationships/lesson-1/AppleHLS1/lesson-1.m3u8',
            previewImageLink:
              'https://wisey.app/assets/images/web/lessons-covers/a-road-to-healthy-relationships',
            meta: null,
          },
          {
            id: '7f0d8f43-4b62-40d9-a3c0-11b54c7cf05a',
            title: 'The Road to Intimacy',
            duration: 294,
            order: 2,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/a-road-to-healthy-relationships/lesson-2/AppleHLS1/lesson-2.m3u8',
            previewImageLink:
              'https://wisey.app/assets/images/web/lessons-covers/a-road-to-healthy-relationships',
            meta: null,
          },
          {
            id: '9346e45c-bd67-4888-a6c7-d4a3dedef8af',
            title: 'The House of Your Relationship',
            duration: 335,
            order: 3,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/a-road-to-healthy-relationships/lesson-3/AppleHLS1/lesson-3.m3u8',
            previewImageLink:
              'https://wisey.app/assets/images/web/lessons-covers/a-road-to-healthy-relationships',
            meta: null,
          },
          {
            id: 'c7bbd24f-351d-490a-b956-72adf60aff74',
            title: 'Preventing Doomsday',
            duration: 305,
            order: 4,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/a-road-to-healthy-relationships/lesson-4/AppleHLS1/lesson-4.m3u8',
            previewImageLink:
              'https://wisey.app/assets/images/web/lessons-covers/a-road-to-healthy-relationships',
            meta: null,
          },
          {
            id: '47ed542b-4957-4ad6-ba03-5cd6de6bc723',
            title: 'How to 80/20 Your Relationship',
            duration: 292,
            order: 5,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/a-road-to-healthy-relationships/lesson-5/AppleHLS1/lesson-5.m3u8',
            previewImageLink:
              'https://wisey.app/assets/images/web/lessons-covers/a-road-to-healthy-relationships',
            meta: null,
          },
        ],
        containsLockedLessons: false,
      };
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
