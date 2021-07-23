import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CoverageForm } from '../components/CoverageForm';

describe('CoverageForm testing library', () => {
  let coverageForm;
  let textInputKeys = ['coverageName'];
  let coverage;
  let renderResult;
  let submitCoverageSpy;

  beforeEach(() => {

    coverageForm = {
      coverageName: 'AAA',
    };

    coverage = {
      name: 'AAA',
    };

    submitCoverageSpy = jest.fn();
  });

  beforeEach(() => {
    renderResult = render(
      <CoverageForm onSubmitForm={submitCoverageSpy} />,
    );
  });

  test('render CoverageForm component', () => {
    const { getAllByRole } = renderResult;

    const textboxInputs = getAllByRole('textbox');

    expect(textboxInputs.length).toBe(1);
    
    textboxInputs.forEach((input, index) => {
      const evt = {
        target: {
          type: input.type,
          value: coverageForm[textInputKeys[index]],
          name: input.name,
        },
      };
      fireEvent.change(input, evt);
    });

    const submitButton = renderResult.getByRole('button');

    fireEvent.click(submitButton);

    expect(submitCoverageSpy).toHaveBeenCalledWith(coverage);
  });
});
