Start with index.html

FIDEGenerator is a Python script that retrieves FIDE player ratings from fide.com and updates fide.html every hour.
This add-on exists because many sites, including FIDE, are not CORS-enabled, preventing direct browser requests. By running the process server-side, we bypass CORS restrictions and ensure that the latest ratings are always available for display.