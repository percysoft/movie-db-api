import { render, fireEvent } from '@testing-library/react';
import { SearchComponent } from './index';

describe('SearchComponent', () => {
  it('should render the component', () => {
    const { getByPlaceholderText } = render(<SearchComponent />);
    const inputElement = getByPlaceholderText('Buscar...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call handleButton on button click', () => {
    const handleButton = jest.fn();
    const { getByText } = render(
      <SearchComponent handleButton={handleButton} showButton={true} />
    );
    const buttonElement = getByText('Buscar');
    fireEvent.click(buttonElement);
    expect(handleButton).toHaveBeenCalledTimes(1);
  });

  it('should call getValue with the input value on change', () => {
    const getValue = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchComponent getValue={getValue} />
    );
    const inputElement = getByPlaceholderText('Buscar...');
    fireEvent.change(inputElement, { target: { value: 'example' } });
    expect(getValue).toHaveBeenCalledWith('example');
  });
});
