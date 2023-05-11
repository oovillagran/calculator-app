import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('matches snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('displays numbers when buttons are clicked', () => {
    const { getByText, getByPlaceholderText } = render(<Calculator />);
    const input = getByPlaceholderText('0');
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('3'));
    expect(input.value).toBe('123');
  });

  test('adds two numbers correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Calculator />);
    const input = getByPlaceholderText('0');
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(input.value).toBe('3');
  });

  test('subtracts two numbers correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Calculator />);
    const input = getByPlaceholderText('0');
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(input.value).toBe('3');
  });

  test('multiplies two numbers correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Calculator />);
    const input = getByPlaceholderText('0');
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(input.value).toBe('6');
  });

  test('divides two numbers correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Calculator />);
    const input = getByPlaceholderText('0');
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(input.value).toBe('3');
  });
});
