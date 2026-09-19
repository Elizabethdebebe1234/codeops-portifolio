# Day 35 Performance Profile

## Interaction Tested

I recorded a React DevTools Profiler session while navigating to the menu and adding dishes to the cart.

## Before Optimization

The recorded commit took approximately **17.6 ms**.

The slowest individual component render I observed was:

- **Routes — 3.2 ms**

Other components observed included Layout, Header, App, AuthProvider, and React Router components.

## Optimization

I investigated unnecessary rendering and optimized the Header component using `React.memo`.

The purpose was to prevent unnecessary parent-driven renders when the Header's props have not changed.

## After Optimization

After the optimization, another profiling session recorded approximately **7.9 ms** for the tested interaction.

The Header appeared as:

**Header (Memo)**

## Result

The application was profiled before making the optimization, then profiled again afterward to compare the rendering behavior.

The optimization was kept because the second profiling session showed a lower recorded commit time during the tested interaction.

## Note

The Header still re-renders when its own Zustand cart subscription changes because the cart count displayed in the Header depends on the cart state. `React.memo` is therefore intended to prevent unnecessary parent-driven renders, not updates caused by its own subscribed state.
