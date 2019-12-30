This is a site based on Barber for Jekyll 

# Barber
Barber is a minimal blog theme built for Jekyll. The blog theme features a masonry grid, endless scrolling, and page transitions. 💈 Barber is also available for [Ghost](https://github.com/samesies/barber-ghost).

### Deployment
GitHub Pages [does not support]((https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/)) custom plugins. The tag list and tag pagination are built using custom plugins. There are several options to avoid any errors while deploying to production.
* Run ````bundle exec jekyll build```` or ````npm run build```` and manually add the contents of the ```_site``` folder to the ```gh-pages``` branch.
* Link the repository to [Netlify](https://www.netlify.com/). Netlify will then rebuild the theme every time a commit is pushed to the repo.
* Finish setting up the [s3-website](https://github.com/klaemo/s3-website) package that is already included in the theme. This would deploy the theme to AWS S3 when ```npm run deploy``` is run.

### Donations
Barber has been released for free. Similar themes cost around $29 on [ThemeForest](https://themeforest.net/category/static-site-generators/jekyll). Any donations would be greatly appreciated after the work that went into releasing Barber.

* PayPal – <https://www.paypal.me/samesies>
* Bitcoin – 1PSzNmcfAFJY1PtBK5u9R5bTGfF7KAuLcq
* Ethereum – 0x392F7116e4171F1D740397B6000EadD2e4bb9670
* Litecoin – LSH9AnjcUTV5T7PUxXQuxPqb9W5aSR9GEP

### Support
Email <okay@samesies.io> if you need any additional support with Barber.
