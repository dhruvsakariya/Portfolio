# CRA Public Folder Asset References

When referencing images or other assets from the `public/` folder in this Create React App project:

- **Always use** `process.env.PUBLIC_URL` prefix instead of relative paths.
- **Never use** bare relative paths like `"./image.png"` — these break during local development when `homepage` is set in `package.json`.

### Correct
```jsx
src={process.env.PUBLIC_URL + "/Dhruv.png"}
src={`${process.env.PUBLIC_URL}/blog-post.gif`}
```

### Incorrect
```jsx
src="./Dhruv.png"
src="./blog-post.gif"
```

This ensures assets resolve correctly in **both** `npm start` (local dev) and the GitHub Pages deployment.
