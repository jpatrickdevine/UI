# Performant Parallaxing

This is a little directory I put together after learning the performant parallaxing concept from Google Chrome Labs.
* Blog post: <https://developers.google.com/web/updates/2016/12/performant-parallaxing>
* GitHub repo: <https://github.com/GoogleChromeLabs/ui-element-samples/tree/gh-pages/parallax>

## Additions

Aside from organizing the code into external sheets and scripts, there are a few minor changes and additions:
1. I added a custom property for adjusting the parallax element's height
   Not only does this make it a little easier to adjust the height, but I used this property in a calculation for `#content` height because too small of height can show the `#parallax` element underneath.
2. I replaced two divs with semantic HTML tags (`header` and `main`) to better distinguish the elements in the HTML doc.
3. I embedded some CSS in the HTML doc as a suggested on how to style the basic structure.
   E.g., I added styles to fix a `footer` to the bottom of the `main` element.