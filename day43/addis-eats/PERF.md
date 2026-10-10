# Addis Eats Performance Report

## Test Environment

- Browser: Google Chrome
- Device: Desktop
- Network: Slow 4G for testing
- Build command: npm run build

## Before Optimization

| Metric      |       Result |
| ----------- | -----------: |
| Performance |     Baseline |
| LCP         | Not measured |
| CLS         | Not measured |
| INP         | Not measured |

## Changes Made

### Images

- Replaced normal image loading with `next/image`
- Added width and height
- Added responsive `sizes`
- Added meaningful alt text
- Preloaded the main hero image

### Fonts

- Added `next/font`
- Selected the Latin subset

### Scripts

- Added `next/script`
- Used `lazyOnload` for a non-critical script

### JavaScript

- Kept components as Server Components where possible
- Avoided unnecessary `"use client"`

### Environment

- Added `.env.example`
- Added `.env.local`
- Added `.env*.local` to `.gitignore`
- Kept secrets out of `NEXT_PUBLIC_` variables

### Configuration

- Added `next.config.mjs`
- Configured remote image patterns
- Added a redirect

## After Optimization

| Metric      |   Before | After |
| ----------- | -------: | ----: |
| Performance | Baseline |       |
| LCP         |          |       |
| CLS         |          |       |
| INP         |          |       |

## Analysis

The main optimization areas were image delivery, font loading,
third-party script loading, and reducing unnecessary browser JavaScript.

The application was tested using a production build rather than only
the development server.
