// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import CourseItem from './CourseItem';
// import { VideoJsPlayer } from 'video.js';
// import { mockCourse } from '../../__mocks__/mock_course';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../../styles/theme';
// const videojs = require('video.js');

// jest.mock('video.js', () => {
//   const videojsMock = {
//     getComponent: jest.fn(),
//     mockImplementation: jest.fn(),
//   }
//   const playerInstance = {
//     on: jest.fn(),
//     dispose: jest.fn(),
//     ready: jest.fn().mockImplementation(function(callback) {
//       callback();
//     }),
//     play: jest.fn(),
//     pause: jest.fn(),
    
//   };
//   const playerMock = jest.fn().mockImplementation(function() {
//     return playerInstance;
//   });
//   videojsMock.getComponent = jest.fn().mockReturnValue({
//     prototype: {},
//   });
//   videojsMock.mockImplementation(function() {
//     return playerMock();
//   });
//   return videojsMock;
// });

// beforeAll(() => {
//   Object.defineProperty(HTMLMediaElement.prototype, 'play', {
//     configurable: true,
//     writable: true,
//     value: jest.fn(),
//   });
// });

// describe('CourseItem', () => {
//   let player: VideoJsPlayer;

//   afterEach(() => {
//     if (player && !player.isDisposed) {
//       player.dispose();
//     }
//   });

//   it('should create player instance that inherits from component and dispose it', function () {
//     const video = document.createElement('video');
//     render(
//       <MemoryRouter>
//         <ThemeProvider theme={theme}>
//           <CourseItem course={mockCourse} />
//         </ThemeProvider>
//       </MemoryRouter>,
//     );
//     expect(videojs.getComponent).toHaveBeenCalledWith('Html5');
//     expect(videojs.getComponent('Html5').prototype).toHaveProperty('play');
//     expect(videojs).toHaveBeenCalledWith(
//       video,
//       expect.any(Object),
//       expect.any(Function),
//     );
//     player = videojs(video);
//     expect(player).toBeInstanceOf(videojs.VideoJsPlayer);
//     expect(player instanceof videojs.getComponent('Html5')).toBe(true);
//   });

//   it('renders course title', () => {
//     render(
//       <MemoryRouter>
//         <ThemeProvider theme={theme}>
//           <CourseItem course={mockCourse} />
//         </ThemeProvider>
//       </MemoryRouter>,
//     );
//     const titleElement = screen.getByTestId('course-link');
//     const lessonsCountElement = screen.getByTestId('course-lessonCount');
//     expect(titleElement).toBeInTheDocument();
//     expect(lessonsCountElement).toBeInTheDocument();
//   });
// });

// describe('CourseItem', () => {
//   let player: VideoJsPlayer;
//   let video: HTMLVideoElement;
//   beforeEach(() => {
//     if (player && !player.isDisposed) {
//       player.dispose();
//     }
//     video = document.createElement('video');

//     video.load();
//     video.play();
//   });

//   it('should create player instance that inherits from component and dispose it', () => {
//     player = videojs(
//       video,
//       {
//         controls: false,
//         responsive: true,
//         fluid: true,
//         poster: `https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview`,
//         sources: [
//           {
//             src: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
//             type: 'application/x-mpegURL',
//           },
//         ],
//       },
//       () => {
//         player.on();
//       },
//     );
//   });   

//   it('renders course title', () => {
//     render(
//       <MemoryRouter>
//         <ThemeProvider theme={theme}>
//           <CourseItem course={mockCourse} />
//         </ThemeProvider>
//       </MemoryRouter>,
//     );
//     const titleElement = screen.getByTestId('course-link');
//     const lessonsCountElement = screen.getByTestId('course-lessonCount');
//     expect(titleElement).toBeInTheDocument();
//     expect(lessonsCountElement).toBeInTheDocument();
//   });

//   it('should create player instance that inherits from component and dispose it', function () {
//     expect(player).toBeDefined();   
//     player.dispose();
//     expect(player.isDisposed).toBe(true);
//   });
// });