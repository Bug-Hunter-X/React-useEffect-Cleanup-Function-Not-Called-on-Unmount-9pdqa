# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue in React where the cleanup function within a `useEffect` hook is not called when the component unmounts. This can lead to memory leaks or other unexpected behavior if resources are not properly released.

The `bug.js` file contains the buggy code, and `bugSolution.js` demonstrates the corrected implementation.

## Problem

The cleanup function in the `useEffect` hook is essential for releasing resources (like timers, event listeners, subscriptions, etc.) when the component is removed from the DOM. If it's not called, these resources remain active and may cause issues.

## Solution

Ensure that the return statement within the `useEffect` hook is present and correctly cleans up any resources used by the component.