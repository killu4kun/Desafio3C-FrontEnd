import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return initial value and set stored value', () => {
    const key = 'testKey';
    const initialValue = 'testValue';
    const newValue = 'newTestValue';

    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    expect(result.current[0]).toEqual(initialValue);

    act(() => {
      result.current[1](newValue);
    });

    expect(window.localStorage.getItem(key)).toEqual(JSON.stringify(newValue));
    expect(result.current[0]).toEqual(newValue);
  });

  it('should return initial value when localStorage throws an error', () => {
    const getItemMock = jest.fn(() => {
      throw new Error('localStorage.getItem error');
    });
    localStorage.getItem = getItemMock;

    const { result } = renderHook(() =>
      useLocalStorage('test-key', 'test-value')
    );

    expect(result.current[0]).toBe('test-value');
  });
});
