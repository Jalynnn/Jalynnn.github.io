Heads up! I originally started designing and adding content to my website in this other repo: https://github.com/Jalynnn/Website.

However, I learned the importance of using React as it has allowed for flexibility in my code when it comes to viewing websites on a variety of screen sizes. With motiviation and YouTube videos I was able to complete this website, and I wanted to support future developers. Below are the steps I took and resources to complete a website like mine.

## Set up React with GH Pages

youtube video here

importance of repo name

I use GitHub desktop and VS Code

## Import content

using "npm start" to automatically view the updates locally

## Deploying GH Website

Settings - GH Pages

Note that you do not modify or add to GH pages. Make your changes in main/master. From your main run "npm build x"

Running this anytime will apply your changes to the public page

## Accessibility

Color Friendly

* https://www.youtube.com/watch?v=3xxrsF5tYEE
* https://coolors.co/gradient-maker/4a9b7f-0a3431?position=43,100&opacity=100,100&type=linear&rotation=90
* https://coolors.co/587b7f-022943-ccdbdc-6a0136-bfab25
* https://leonardocolor.io/#
* https://leonardocolor.io/scales.html#
* Color Contrast: https://dequeuniversity.com/rules/axe/4.9/color-contrast

Scans

After using Google's [PageSpeed Insights]([url](https://pagespeed.web.dev/)) performance and accessibility page, I made several changes to my website's code based on their recommendations. It could also be beneficial to go through some other websites such as [accessScan]([url](https://accessibe.com/accessscan)) which can provide some additional information on how to make your webstie more accessible.

## Changing the Domain Name $$

I found my domain name by going through [Namecheap]([url](https://www.namecheap.com/)). I pay approximately $8 a year, having selected auto-renew, for an .org domain. I also used the Chrome Extension, [Honey]([url](https://chromewebstore.google.com/detail/honey-automatic-coupons-r/bmnlcjabgnpnenekpadlanbbkooimhnj?pli=1)), to help save me some cents.

I also added some records in the Advanced Domain section of the Namecheap website after selecting "manage my domain," which appeared on the receipt page. Knowing which records to add is based on the DNS configuration recommended at the bottom of this [GitHub Page]([url](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)).

Optionally, you can review this GitHub page: "[About custom domains and GitHub Pages]([url](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages))" to help confirm or troubleshoot your domain steps.

## Using Analytics

* https://support.google.com/sites/answer/97459?hl=en&ref_topic=7184581&sjid=2132772151434578541-NC

## SEO

* Changes to index.html, app.js, and package.json
* Install react-helmet and react-snap: npm install --save react-helmet && npm install react-snap

Verify JSON at https://jsonlint.com/

Verify react helmet steps here https://www.npmjs.com/package/react-helmet

Go into Google Search Console
 Copy info back into Namecheap with @
 Verify in Google Search Console - Might take a few tries

Sitemap XML https://www.xml-sitemaps.com/
Add your (new) domain Download sitemap 
Add sitemap.xml download into the public folder
Copy https://www.jalynn-nicoly.org/sitemap.xml into https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Ajalynn-nicoly.org

## HTTP vs. HTTPS

Make sure to enable HTTPS in the GitHub Settings. It would be helpful to refer to this GitHub page as well: "[Securing your GitHub Pages site with HTTPS.]([url](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https))"
