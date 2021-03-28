import React from 'react';
import { create } from 'react-test-renderer';
import Status from './Status';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<Status status='network' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('network');
    });

    test('status span should be displayed after creation', () => {
        const component = create(<Status status='network' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('status input shouldn`t be displayed after creation', () => {
        const component = create(<Status status='network' />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test('status span should contains correct content after creation', () => {
        const component = create(<Status status='network' />);
        const root = component.root;
        let span = root.findByType('span');
        // check text node
        expect(span.children[0]).toBe('network');
    });

    test('status input should be displayed in edit mode instead of span with right content', () => {
        const component = create(<Status status='network' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('network');
    });

    test('update status callback should be called', () => {
        // шпионская функция, чтобы узнать, что колбек вызван
        const mockCallback = jest.fn()
        const component = create(<Status status='network' updateStatus={ mockCallback } />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});