import React from 'react';
import Form from 'react-bootstrap/Form';
// import TestRenderer from 'react-test-renderer';
// import { ShallowRenderer } from 'react-test-renderer/shallow';
import { render, screen, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CreateModal from '../CreateModal.jsx';

afterEach(cleanup);

//!! Basic smoke test to check if the CreateModal component renders !!//
test('renders CreateModal component', () => {
    render(<CreateModal />);
    screen.debug();
});

//!! Basic testing of the click functionality of the CreateModal component !!//
describe('CreateModal', () => {
  it('renders without crashing', () => {
    render(<CreateModal />);
    screen.debug();
    fireEvent.click(screen.getByText('Book Now!')); 
    screen.debug();
  });
});


// Checking that the form input fields are accepting the correct values
test('addValueToFormControl', () => {
    render(<CreateModal />);
    fireEvent.click(screen.getByText('Book Now!')); 
    
    const { getByTestId } = render(<CreateModal />);
    const startDateInput = getByTestId('start-date');
    const endDateInput = getByTestId('end-date');
    
    fireEvent.change(startDateInput, { target: { value: '2022-01-01' } });
    fireEvent.change(endDateInput, { target: { value: '2022-01-10' } });
    
    expect(startDateInput.value).toBe('2022-01-01');
    expect(endDateInput.value).toBe('2022-01-10');
});

//!! Testing the total cost calculation functionality of the CreateModal component using invalid dates !!//
test('Correct total when dates are invalid', () => {
    
    render(
        <CreateModal />
    );
    fireEvent.click(screen.getByText('Book Now!')); // This fire event ensures that the modal opens

    const props = {
        dayRate: 100
    }
    
    const { getByTestId } = render(<CreateModal {...props}/>);
    const startDateInput = getByTestId('start-date');
    const endDateInput = getByTestId('end-date');
    
    fireEvent.change(startDateInput, { target: { value: '2022-06-01' } });
    fireEvent.change(endDateInput, { target: { value: '2022-06-10' } });
    screen.debug();
    
    const expectedText = 'Total Cost: $0';
    const h5Element = screen.getByText(expectedText);

    expect(h5Element).toBeInTheDocument();
    
});

//!! Testing the total cost calculation functionality of the CreateModal component using valid dates !!//
test('Correct total when dates are valid', async () => {
    //Arrange
    const props = {
        dayRate: 100
    }

    render(<CreateModal {...props}/>);

    //Act
    act(() => {
        fireEvent.click(screen.getByText('Book Now!')); 
    });

    const startDateInput = screen.getByTestId('start-date');
    const endDateInput = screen.getByTestId('end-date');

    await act(async () => {
        fireEvent.change(startDateInput, { target: { value: "2024-06-01" } });
        fireEvent.change(endDateInput, { target: { value: "2024-06-03" } });
    });

    //Assert
    const expectedText = 'Total Cost: $200';
    const h5Element = screen.getByText(expectedText);

    expect(h5Element).toBeInTheDocument();

});


