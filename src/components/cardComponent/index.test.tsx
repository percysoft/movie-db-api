import { render, fireEvent } from '@testing-library/react';
import { CardComponent } from './index';

test('renders card component correctly', () => {
  const handleCardMock = jest.fn();
  const title = 'Sample Title';
  const imageUrl = 'https://image.jpg';
  const subtitle = 'Sample Subtitle';

  const { getByText, getByAltText } = render(
    <CardComponent
      title={title}
      imageUrl={imageUrl}
      handleCard={handleCardMock}
      subtitle={subtitle}
    />
  );

  const cardTitle = getByText(title);
  const cardSubtitle = getByText(subtitle);
  const cardImage = getByAltText('card');

  expect(cardTitle).toBeInTheDocument();
  expect(cardSubtitle).toBeInTheDocument();
  expect(cardImage).toBeInTheDocument();

  fireEvent.click(cardImage);

  expect(handleCardMock).toHaveBeenCalledTimes(1);
});
