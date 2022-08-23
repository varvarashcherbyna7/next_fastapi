import 'jest';
import Card from './Card';
import { render } from '@testing-library/react';

// eslint-disable-next-line no-undef
test('should render', () => {
  render(
    <Card
      tag="tag"
      title="title"
      body="body"
      author="author"
      time="07 Aug 2022"
    />
  );
  // eslint-disable-next-line no-undef
  // expect(screen.getByRole('div'));
  // expect(screen.getByRole('div')).toHaveTextContent('');
});
// version 2
// import { render, screen } from '@testing-library/react';
// import Card from './Card';
// import '@testing-library/jest-dom';

// describe('Card', () => {
//   it('renders a heading', () => {
//     render(
//       <Card
//         tag="tag"
//         title="title"
//         body="body"
//         author="author"
//         time="07 Aug 2022"
//       />
//     );

//     const heading = screen.getByRole('heading', {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });
