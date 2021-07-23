import { useState } from 'react';

export const resetFormSpy = jest.fn();

export const useForm = (initialForm) => {

  const [form, setForm] = useState(initialForm);

  const change = (e) => {
    expect(e.target.value).toBe('AAA')
    setForm({
      coverageName: 'BBB',
    })
  };

  return [form, change, resetFormSpy];
};

export const verifyResetFormCalled = () => { 
  expect(resetFormSpy).toHaveBeenCalled();
};