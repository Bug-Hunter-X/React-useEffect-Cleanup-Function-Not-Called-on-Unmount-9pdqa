```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let interval;
    if (mounted) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [mounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setMounted(false)}>Unmount</button>
    </div>
  );
}
```