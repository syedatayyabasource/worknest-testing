import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App.jsx';

describe('WorkNest', () => {
  test('renders workspace heading and task list', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Keep work moving.' })
    ).toBeInTheDocument();
    expect(screen.getByText('Review homepage layout')).toBeInTheDocument();
  });

  test('shows validation message when quick add is submitted empty', async () => {
    const u = userEvent.setup();
    render(<App />);
    await u.click(screen.getByRole('button', { name: 'Add task' }));
    expect(screen.getByRole('alert')).toHaveTextContent('Task title is required');
  });

  test('adds a new task from quick add form', async () => {
    const u = userEvent.setup();
    render(<App />);
    await u.type(
      screen.getByPlaceholderText('What needs to be done?'),
      'Plan sprint'
    );
    await u.click(screen.getByRole('button', { name: 'Add task' }));
    expect(screen.getByText('Plan sprint')).toBeInTheDocument();
  });

  test('filters tasks by search text', async () => {
    const u = userEvent.setup();
    render(<App />);
    await u.type(screen.getByLabelText('Search tasks'), 'homepage');
    expect(screen.getByText('Review homepage layout')).toBeInTheDocument();
    expect(
      screen.queryByText('Prepare release notes')
    ).not.toBeInTheDocument();
  });

  test('filters tasks by status', async () => {
    const u = userEvent.setup();
    render(<App />);
    await u.selectOptions(
      screen.getByLabelText('Filter by status'),
      'Done'
    );
    expect(screen.getByText('Prepare release notes')).toBeInTheDocument();
    expect(
      screen.queryByText('Review homepage layout')
    ).not.toBeInTheDocument();
  });

  test('updates open-work count after adding a task', async () => {
    const u = userEvent.setup();
    render(<App />);
    expect(screen.getByTestId('open-work-count')).toHaveTextContent('3');

    await u.type(
      screen.getByPlaceholderText('What needs to be done?'),
      'New task'
    );

    await u.click(screen.getByRole('button', { name: 'Add task' }));
    expect(screen.getByTestId('open-work-count')).toHaveTextContent('4');
  });
});